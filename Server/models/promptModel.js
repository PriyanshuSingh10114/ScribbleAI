import mongoose from "mongoose";

const promptSchema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user', 
            required: true 
        },
        text: { 
            type: String, 
            required: true 
        },
        title: {
            type: String,
            default: 'Untitled Prompt'
        },
        category: {
            type: String,
            default: 'General'
        },
        tags: [{
            type: String
        }],
        isFavorite: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const promptModel = mongoose.models.Prompt || mongoose.model('prompt', promptSchema);
export default promptModel;
