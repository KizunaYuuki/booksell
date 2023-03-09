const { ObjectId } = require("mongodb");

class OrdersService {
    constructor(client) {
        this.Orders = client.db().collection("orders");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractOrdersData(payload) {
        const orders = {
            reDate: payload.reDate,
            orderTotal: payload.orderTotal,
            shipFee: payload.shipFee,
            totalProductMoney: payload.totalProductMoney,
            payment: payload.payment,
            productList: payload.productList,
            orderDate: payload.orderDate,
            orderStatus: payload.orderStatus,
            phone: payload.phone,
            reAddress: payload.reAddress
        };
        // remove undefined fields. 
        Object.keys(orders).forEach(
            (key) => orders[key] === undefined && delete orders[key]
        );
        return orders;
    }

    async create(payload) {
        const orders = this.extractOrdersData(payload);
        const result = await this.Orders.findOneAndUpdate(
            orders,
            { $set: orders },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.Orders.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({ name: { $regex: new RegExp(name), $options: "i" }, });
    }

    async findById(id) {
        return await this.Orders.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractOrdersData(payload);
        const result = await this.Orders.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id) {
        const result = await this.Orders.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll(filter) {
        const result = await this.Orders.deleteMany(filter);
        return result.deletedCount;
    }

    async drop() {
        const result = await this.Orders.drop()
        return result
    }
}

module.exports = OrdersService;