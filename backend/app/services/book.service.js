const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookName: { 
        type: String,
        maxLenght: 200,
    },
    author: {
        type: String,
        maxLenght: 30,
    },
    publicYear: {
        type: Date,
    },
    bookStock: {
        type: Number,
    },
    bookDes: {
        type: String,
        maxLenght: 5000,
    },
    size: {
        type: String
    },
    quantityPage: {
        type: Number,
    },
    originalPrice: {
        type: Schema.Types.Decimal128,
        // float
    },
    bookPrice: {
        type: Schema.Types.Decimal128,
        // float
    },
    generName: {
        type: [Object],
    },
    publisherName: {
        type: String,
        maxLenght: 30,
    },
    supplisherName: {
        type: String,
        maxLenght: 30,
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = {
    Book: Book
}