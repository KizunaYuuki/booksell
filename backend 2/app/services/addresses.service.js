const { ObjectId } = require("mongodb");

class AddressesService {
    constructor(client) {
        this.Addresses = client.db().collection("addresses");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractAddressesData(payload) {
        const addresses = {
            city: payload.city,
            district: payload.district,
            ward: payload.ward,
            streetName: payload.streetName,
            _idUser: payload._idUser,
        };
        // remove undefined fields. 
        Object.keys(addresses).forEach(
            (key) => addresses[key] === undefined && delete addresses[key]
        );
        return addresses;
    }

    async create(payload) {
        const addresses = this.extractAddressesData(payload);
        const result = await this.Addresses.findOneAndUpdate(
            addresses,
            { $set: addresses },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Addresses.find(filter);
        return await cursor.toArray();
    } 

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Addresses.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractAddressesData(payload);
        const result = await this.Addresses.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Addresses.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Addresses.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Addresses.drop()
        return result
    }
}

module.exports = AddressesService;