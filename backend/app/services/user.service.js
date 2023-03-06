const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    dateOfBirth: {
        type: Date,
        default: null,
    },
    name: {
        type: String,
        minLength: 3,
        maxLenght: 30,
    },    
    password: { 
        type: String, 
        required: [true, "Why no password?"], 
    },
    registerDate: {
        type: Date,
        default: Date.now(),
    },
    sex: {
        type: Boolean
    },
    statusUser: {
        type: Boolean,
        default: true,
        // true ~ account activate, false ~ account blocked
    },    
    phone: {
        unique: true,
        type: String,
        maxLenght: 10,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = {
    User: User
}