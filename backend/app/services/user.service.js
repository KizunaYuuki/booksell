const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = require("./order.service");
const Address = require("./address.service");

const UserSchema = new Schema({
    firstname: {
        type: String,
        minLength: 3,
        maxLenght: 20,
        require: [true, "Why no first name"],
    },
    lastname: {
        type: String,
        minLength: 3,
        maxLenght: 20,
    },
    phoneNumber: {
        unique: [true, "Phone number is unique"],
        type: String,
        minLength: 10,
        maxLenght: 10,
        required: [true, "Why no phone number"],
    },
    // address: [Address.AddressSchema],
    password: { 
        type: String, 
        required: [true, "Why no password?"], 
    },
    // order: [Order.OrderSchema],
    statusUser: {
        type: Boolean,
        default: true,
        // true ~ account activate, false ~ account blocked
    }

})

module.exports = mongoose.model("User", UserSchema);