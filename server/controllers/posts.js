import postCollection from '../models/postCollection.js'
import mongoose from 'mongoose'


export const getPosts = async (req, res) => {
    try {
        const postCollections = await PostCollection.find();
        console.log(postCollections);
        res.status(200).json(postCollections);
    } catch (error) {
        res.status(404).json({ collection: error.collection });
    }
}

export const createPost = async (req, res) => {
    const { name, description, news, coins } = req.body;

    const newPostcollection = new Postcollection({ name, description, news, coins })

    try {
        await newPostcollection.save();

        res.status(201).json(newPostcollection);
    } catch (error) {
        res.status(409).json({ collection: error.collection });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { name, description, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { name, description, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;