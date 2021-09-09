import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    description: String,
    news: [String],
    coins: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostCollection = mongoose.model('PostCollection', postSchema)

export default PostCollection;