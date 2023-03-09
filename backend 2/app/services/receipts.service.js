const { ObjectId } = require("mongodb");

class ReceiptsService {
    constructor(client) {
        this.Receipts = client.db().collection("receipts");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractReceiptsData(payload) {
        const receipts = {
            dateReceipt: payload.dateReceipt,
            _idSupplier: payload._idSupplier,
            listProduct: payload.listProduct,
            owe: payload.owe,
            paid: payload.paid,
            totalMoneyReceipt: payload.totalMoneyReceipt,
        };
        // remove undefined fields. 
        Object.keys(receipts).forEach(
            (key) => receipts[key] === undefined && delete receipts[key]
        );
        return receipts;
    }

    async create(payload) {
        const receipts = this.extractReceiptsData(payload);
        const result = await this.Receipts.findOneAndUpdate(
            receipts,
            { $set: receipts },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Receipts.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Receipts.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractReceiptsData(payload);
        const result = await this.Receipts.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Receipts.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Receipts.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Receipts.drop()
        return result
    }
}

module.exports = ReceiptsService;