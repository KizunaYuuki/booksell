const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    supplierName: {
        type: String,
        maxLenght: 30,
    },
    supplierPhone: {
        type: String,
        maxLenght: 10,
    },
    supplierAddress: {
        type: String,
        maxLenght: 256,
    },
});

const Supplier = mongoose.model("Supplier", SupplierSchema);

module.exports = {
    Supplier: Supplier
}