import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters long'],
            maxlength: [50, 'Name cannot exceed 50 characters']
        },
        email: { 
            type: String, 
            required: [true, 'Email is required'], 
            unique: true,
            lowercase: true,
            trim: true
        },
        password: { 
            type: String, 
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters long']
        },
        creditBalance: { 
            type: Number, 
            default: 10,
            min: [0, 'Credit balance cannot be negative'] 
        },
        avatarUrl: {
            type: String,
            default: ''
        },
        totalGenerations: {
            type: Number,
            default: 0
        },
        settings: {
            theme: { type: String, default: 'light' },
            notificationsEnabled: { type: Boolean, default: true }
        }
    },
    { timestamps: true }
);

// Indexes handled by unique: true
// userSchema.index({ email: 1 });

const userModel = mongoose.models.User || mongoose.model('user', userSchema);

export default userModel;