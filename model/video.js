const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    url: String,
    username: String,
    description: String,
    song: String,
    Likes: Number,
    messages: Number,
    share: Number
})


const Videos = mongoose.model("video", dataSchema);


module.exports = { Videos, dataSchema };