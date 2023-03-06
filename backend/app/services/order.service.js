const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// const OrderSchema = new Schema({
//     orderCode: {
//         // unique: [true, "order is unique"],
//         type: String,
//         required: [true, "Why no orderCode?"],
//     },
//     productCode: {
//         type: [Schema.Types.ObjectId],
//         ref: "Product code",
//     },
//     orderDate: {
//         type: Date,
//     },
//     orderReceiptDate: {
//         type: Date,
//         default: Date.now,
//     },
//     statusOrder: {
//         type: String,
//         enum: ["Take Product", "Delivery", "Received"],
//         // Take Product ~ Lấy hàng từ kho
//         // Delivery ~ Giao hàng
//         // Received ~ Đã nhận hàng
//     },
//     userOrder: {
//         // type: Schema.Types.ObjectId,
//         type: String,
//         ref: "Phone number",
//     },
//     totalProductMoney: {
//         type: Number,
//         unit: "VND",
//         ref: "Tổng giá trị các sản phẩm, chưa tính mã giảm giá..."
//     },
//     transportFee: {
//         type: Number,
//         ref: "Phí vận chuyển",
//     },
//     discountCode: {
//         type: Schema.Types.ObjectId,
//         ref: "Mã giảm giá",
//     },
//     intoMoney: {
//         type: Number,
//         unit: "VND",
//         ref: "Thành tiền, số tiền thực tế mà người đặt hàng phải trả",
//     },
//     paymentMethod: {
//         type: String,
//         enum: ["Bank transfer", "Cash"],
//     },
// });

const OrderSchema = new Schema({
    reDate: {
        type: Date,
    },
    orderTotal: {
        type: Schema.Types.Decimal128,
    },
    shipFee: {
        type: Schema.Types.Decimal128,
    },
    totalProductMoney: {
        type: Schema.Types.Decimal128,
    },
    payment: {
        type: String,
        enum: ["Thanh toán khi nhận hàng", "Chuyển khoản"],
    },
    productList: {
        type: [{
            _idBook: Schema.Types.ObjectId,
            quantity: Number,
        }],
    },
    orderDate: {
        type: Date,
        default: Date.now(),
    },
    orderStatus: {
        type: String,
        enum: ["Chờ Xác Nhận", "Lấy Hàng", "Đang Giao", "Đã Giao", "Huỷ Đơn Hàng"],
    },
    phone: {
        type: String,
        maxLenght: 10,
    },
})

const Order = mongoose.model("Order", OrderSchema);

module.exports = {
    // OrderSchema: OrderSchema,
    Order: Order
}
