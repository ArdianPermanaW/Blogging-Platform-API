const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

//we bouta CRUD!! 🗣️🗣️🗣️🔥🔥🔥

// C is for Create
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
});

// R is for Read... get? all post
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
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