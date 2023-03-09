// Băm mật khẩu
const bcrypt = require('bcrypt');
const saltRounds = 10;


const { ObjectId } = require("mongodb");

class UsersService {
    constructor(client) {
        this.Users = client.db().collection("users");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractUsersData(payload) {
        const users = {
            name: payload.name,
            dateOfBirth: payload.dateOfBirth,
            password: payload.password,
            registerDate: payload.registerDate,
            sex: payload.sex,
            statusUser: payload.statusUser,
            phone: payload.phone
        };
        // remove undefined fields. 
        Object.keys(users).forEach(
            (key) => users[key] === undefined && delete users[key]
        );
        return users;
    }

    async create(payload) {
        const users = this.extractUsersData(payload);

        //Kiểm tra phone đã tồn tại hay chưa
        const phone = await this.Users.findOne({ phone: payload.phone });
        if (phone === null) {

            // Băm mật khẩu 
            const hash = bcrypt.hashSync(payload.password, saltRounds);
            
            const result = await this.Users.findOneAndUpdate(
                users,
                {
                    $set: {
                        password: hash,
                        registerDate: new Date,
                        statusUser: true
                    }
                },
                { returnDocument: "after", upsert: true }
            );

            return result;
        }
    }

    // Kiểm tra đăng nhập
    async check(filter) {
        const cursor = await this.Users.findOne({
            phone: filter.phone
        });
        if(!cursor){
            return false;
        }
        return await cursor;
    }

    async find(filter) {
        const cursor = await this.Users.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Users.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractUsersData(payload);
        const result = await this.Users.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Users.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Users.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Users.drop()
        return result
    }
}

module.exports = UsersService;