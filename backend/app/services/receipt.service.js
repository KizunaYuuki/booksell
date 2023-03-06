const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    dateReceipt: {
        type: Date,
        default: Date.now(),
    },
    _idSupplier: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    listProduct: {
        type: [{
            _idBook: Schema.Types.ObjectId,
            quantityBook: Number,
            priceReceipt: Schema.Types.Decimal128,
        }],
    },
    owe: {
        type: Schema.Types.Decimal128,
    },
    paid: {
        type: Schema.Types.Decimal128,
    },
    totalMoneyReceipt: {
        type: Schema.Types.Decimal128,
    }
});

const Receipt = mongoose.model("Receipt", ReceiptSchema);

module.exports = {
    Receipt: Receipt
}