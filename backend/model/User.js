const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    email: {
        type: String,
    },
    products: {
        type: [String],
        default: [],
    }
});


mongoose.model("User", userSchema);