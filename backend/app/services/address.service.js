const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    description: {
        type: String,
        minLength: 3,
        maxLenght: 40,
    }
});

// const Address = mongoose.model("Address", AddressSchema);

module.exports = {
    AddressSchema: AddressSchema,
    // Address: Address
}