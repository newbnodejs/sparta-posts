const mongoose = require("mongoose");

const connectSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Comment", connectSchema);