const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    //id: {type: Number, required: true},
    title: { type: String, required: true },
    content: { type: String, required: true },
    //category: { type: String, required: true },
    //tags: {type: [String], required: true},
    //createdAt: { type: Date, default: Date.now },
    //updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);