const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city: {
        type: String,
        maxLenght: 20,
    },
    district: {
        type: String,
        maxLenght: 20,
    },
    ward: {
        type: String,
        maxLenght: 20,
    },
    streetName: {
        type: String,
        maxLenght: 256,
    },
    _idUser: { 
        type: Schema.Types.ObjectId, 
        required: true,
    }
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = {
    // AddressSchema: AddressSchema,
    Address: Address
}