import mongoose from "mongoose";

const avatarSchema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user', 
            required: true 
        },
        url: { 
            type: String, 
            required: true 
        },
        style: { 
            type: String, 
            enum: ['Professional', 'Anime', 'Cartoon', 'Gaming', 'LinkedIn', 'Other'],
            default: 'Professional' 
        },
        baseImageUrl: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const avatarModel = mongoose.models.Avatar || mongoose.model('avatar', avatarSchema);
export default avatarModel;
