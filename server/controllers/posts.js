import PostCollection from '../models/postCollection.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postCollections = await PostCollection.find();
        console.log(postCollections);
        res.status(200).json(postCollections);
    } catch (error) {
        res.status(404).json({ collection: error.collection });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostCollection.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ description: error.description });
    }
}

export const createPost = async (req, res) => {
    const { name, description, news, coins } = req.body;

    const newPostCollection = new PostCollection({ name, description, news, coins })

    try {
        await newPostCollection.save();

        res.status(201).json(newPostCollection);
    } catch (error) {
        res.status(409).json({ collection: error.collection });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { name, description, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { name, description, selectedFile, _id: id };

    await Postdescription.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Postdescription.findByIdAndRemove(id);

    res.json({ description: "Post deleted successfully." });
}


export default router;