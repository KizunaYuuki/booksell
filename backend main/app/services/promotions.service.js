const { ObjectId } = require("mongodb");

class PromotionsService {
    constructor(client) {
        this.Promotions = client.db().collection("promotions");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractPromotionsData(payload) {
        const promotions = {
            promotionName: payload.promotionName,
            promotionPrice: payload.promotionPrice,
            promotionBegin: payload.promotionBegin,
            promotionEnd: payload.promotionEnd,
            promotionDes: payload.promotionDes,
            productList: payload.productList,
        };
        // remove undefined fields. 
        Object.keys(promotions).forEach(
            (key) => promotions[key] === undefined && delete promotions[key]
        );
        return promotions;
    }

    async create(payload) {
        const promotions = this.extractPromotionsData(payload);
        const result = await this.Promotions.findOneAndUpdate(
            promotions,
            { $set: promotions },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Promotions.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Promotions.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractPromotionsData(payload);
        const result = await this.Promotions.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Promotions.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Promotions.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Promotions.drop()
        return result
    }
}

module.exports = PromotionsService;