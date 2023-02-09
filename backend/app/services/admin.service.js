const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    adminname: { 
        unique: [true, "adminname is unique"],
        type: String, 
        minLength: 3, 
        maxLenght: 50, 
        required: [true, "Why no name?"],
    },
    password: { 
        type: String, 
        required: [true, "Why no password?"], 
    },
    discountCode: {
        type: Number,
        default: 1
    }
})


module.exports = mongoose.model("Admin", AdminSchema);