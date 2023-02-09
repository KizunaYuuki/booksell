const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DiscountCodeSchema = new Schema({
    // Overwrite _id, lấy _id làm mã cho mã giảm giá
    _id: {
        type: String,
        maxLength: 10,
    },
    typeDiscount: {
        type: String,
        enum: ["for All", "For One"],
        // for All,  tạo mã giảm giá cho tất cả người dùng
        // for One, tạo mã giảm giá cho 1 người dùng cụ thể
    },
    startDay: {
        type: Date,
        default: Date.now
    },
    expiry: { // han su dung
        type: Number,
        init: "Day"
    },
    discountValue: { // giá trị của mã giảm giá, giảm theo phần trăm giá sản phẩm 
        type: Number,
        init: "%"
    },
    available: { // số lượng mã giảm giá có còn lại, có thể sử dụng
        type: Number,
        default: 1000
    }

})

module.exports = mongoose.model("DiscountCode", DiscountCodeSchema);