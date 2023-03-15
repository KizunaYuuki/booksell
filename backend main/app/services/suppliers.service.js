const { ObjectId } = require("mongodb");

class SuppliersService {
    constructor(client) {
        this.Suppliers = client.db().collection("suppliers");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractSuppliersData(payload) {
        const suppliers = {
            supplierName: payload.supplierName,
            supplierPhone: payload.supplierPhone,
            supplierAddress: payload.supplierAddress
        };
        // remove undefined fields. 
        Object.keys(suppliers).forEach(
            (key) => suppliers[key] === undefined && delete suppliers[key]
        );
        return suppliers;
    }

    async create(payload) {
        const suppliers = this.extractSuppliersData(payload);
        const result = await this.Suppliers.findOneAndUpdate(
            suppliers,
            { $set: suppliers },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Suppliers.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Suppliers.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractSuppliersData(payload);
        const result = await this.Suppliers.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Suppliers.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Suppliers.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Suppliers.drop()
        return result
    }
}

module.exports = SuppliersService;