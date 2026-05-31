import mongoose from "mongoose";

const logoSchema = new mongoose.Schema(
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
        companyName: { 
            type: String, 
            required: true 
        },
        industry: { 
            type: String, 
            required: true 
        },
        style: { 
            type: String, 
            default: 'Minimalist' 
        }
    },
    { timestamps: true }
);

const logoModel = mongoose.models.Logo || mongoose.model('logo', logoSchema);
export default logoModel;
