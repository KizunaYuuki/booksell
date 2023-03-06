const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    promotionName: {
        type: String,
        maxLenght: 100,
    },
    promotionPrice: {
        type: Number,
    },
    promotionBegin: {
        type: Date,
        default: Date.now(),
    },
    promotionEnd: {
        type: Date,
        default: null,
    },
    promotionDes: {
        type: String,
        maxLenght: 1000,
    },
    productList: {
        type: [{
            _idBook: Schema.Types.ObjectId,
        }],
    },
})

const Promotion = mongoose.model("Promotion", PromotionSchema);

module.exports = {
    Promotion: Promotion
}