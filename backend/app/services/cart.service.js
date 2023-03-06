const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    _idUser: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    bookList: {
        type: [Object],
    }
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = {
    Cart: Cart
}