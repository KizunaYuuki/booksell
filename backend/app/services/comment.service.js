const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {
        type: String,
        maxLenght: 5000,
    },
    rateStar: {
        type: Number,
        min: 1,
        max: 5,
    },
    commentDate: {
        type: Date,
        default: Date.now(),
    },
    phone: {
        type: String,
        maxLenght: 10
    },
    _idBook: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {
    Comment: Comment
}