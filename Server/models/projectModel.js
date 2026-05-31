import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user', 
            required: true 
        },
        name: { 
            type: String, 
            required: [true, 'Project name is required'],
            trim: true
        },
        description: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { timestamps: true }
);

const projectModel = mongoose.models.Project || mongoose.model('project', projectSchema);
export default projectModel;
