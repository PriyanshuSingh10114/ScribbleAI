import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
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
        prompt: { 
            type: String, 
            default: '' 
        },
        style: { 
            type: String, 
            default: 'Default' 
        },
        resolution: {
            type: String,
            default: '1024x1024'
        },
        provider: {
            type: String,
            enum: ['Gemini', 'OpenAI', 'Grok', 'ClipDrop', 'Other'],
            default: 'ClipDrop'
        },
        category: {
            type: String,
            enum: ['Generation', 'Editor', 'Variation', 'Thumbnail', 'Poster', 'Social', 'BrandKit'],
            default: 'Generation'
        },
        isFavorite: {
            type: Boolean,
            default: false
        },
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project',
            default: null
        }
    },
    { timestamps: true }
);

const imageModel = mongoose.models.Image || mongoose.model('image', imageSchema);
export default imageModel;
