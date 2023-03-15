const { ObjectId } = require("mongodb");

class CartsService {
    constructor(client) {
        this.Carts = client.db().collection("carts");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractCartsData(payload) {
        const carts = {
            _idUser: payload._idUser,
            bookList: payload.bookList,
        };
        // remove undefined fields. 
        Object.keys(carts).forEach(
            (key) => carts[key] === undefined && delete carts[key]
        );
        return carts;
    }

    async create(payload) {
        const carts = this.extractCartsData(payload);
        const result = await this.Carts.findOneAndUpdate(
            carts,
            { $set: carts },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Carts.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Carts.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractCartsData(payload);
        const result = await this.Carts.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Carts.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Carts.deleteMany(filter);
        return result.deletedCount;
    }
    //Push genre from array
    async pushSubGenre(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Carts.findOneAndUpdate(
            filter,
            { $push: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    //Remove genre from array
    async removeSubGenre(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = payload;
        const result = await this.Carts.findOneAndUpdate(
            filter,
            { $pull: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    async drop() {
        const result = await this.Carts.drop()
        return result
    }
}

module.exports = CartsService;