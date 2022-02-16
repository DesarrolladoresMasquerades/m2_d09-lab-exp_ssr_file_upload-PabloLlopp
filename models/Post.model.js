const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    content: String,
    creatorId: String,
    picPath: String,
    picName: String
});

module.exports = model("Post", postSchema);
