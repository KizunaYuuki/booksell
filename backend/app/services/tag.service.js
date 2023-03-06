const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    nameTag: {
        type: String,
        maxLenght: 30,
    },
});

const Tag = mongoose.model("Tag", TagSchema);

module.exports = {
    Tag: Tag
}