const mongoose = require("mongoose");
const { dataSchema } = require("./video");


const userSchema = new mongoose.Schema({
    uname: String,
    fname: String,
    lname: String,
    email: String,
    password: String,
    eVerified: {
        type: Boolean,
        default: false
    },
    tVerified: {
        type: Boolean,
        default: false
    },
    videos: [dataSchema],
})