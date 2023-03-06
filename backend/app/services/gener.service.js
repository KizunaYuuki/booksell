const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenerSchema = new Schema({
    generName: {
        type: String,
        maxLenght: 30,
    },
    subGener: {
        type: [{
            _id: Schema.Types.ObjectId,
            name: String,
        }]
    }
});

const Gener = mongoose.model("Gener", GenerSchema);

module.exports = {
    Gener: Gener
}