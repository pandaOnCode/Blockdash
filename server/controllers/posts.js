import postCollection from '../models/postCollection.js'



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
