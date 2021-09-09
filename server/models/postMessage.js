// import mongoose from 'mongoose';

// const postSchema = mongoose.Schema({
//     name: String,
//     description: String,
//     news: [String],
//     coins: [String],
//     selectedFile: String,
//     createdAt: {
//         type: Date,
//         default: new Date()
//     },
// });

// const PostCollection = mongoose.model('PostCollection', postSchema)

// export default PostCollection;
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;