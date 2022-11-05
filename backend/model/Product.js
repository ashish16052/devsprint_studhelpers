const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    _id: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    bid: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
    },
    seller: {
        type: String,
    },
    tags: {
        type: [String],
        default: []
    },
    picture: {
        data: Buffer,
        contentType: String
    }
});


mongoose.model("Product", productSchema);