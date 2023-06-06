import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },
    timeposted: {
        type: Number,
        default: Date.now()
    }
});

export default mongoose.model("Blog", blogSchema);