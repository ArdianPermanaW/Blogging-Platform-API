const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const connectDB = require('../db/connection');

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

//we bouta CRUD!! 🗣️🗣️🗣️🔥🔥🔥

// C is for Create
router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// R is for Read... get? all post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// Another? R is for Read... get? post by id 
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch {
        res.status(404).json({ message: 'Post not found' });
    }
});

// U is for Update
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(post);
    } catch {
        res.status(404).json({ message: 'Post not found' });
    }
});

//D is for Delete
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch {
        res.status(404).json({ message: 'Post not found' });
    }
});

module.exports = router;