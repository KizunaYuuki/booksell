const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    nameImage: {
        type: String,
        maxLenght: 200,
    },
    linkImage: {
        type: String,
        maxLenght: 200,
    },
    _idBook: {
        type: Schema.Types.ObjectId,
        required: true,
    }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = {
    Image: Image
}