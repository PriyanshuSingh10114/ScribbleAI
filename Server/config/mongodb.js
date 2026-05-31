import mongoose from 'mongoose';
import { ENV } from './env.js';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('✅ MongoDB connected successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('⚠️ MongoDB disconnected');
    });

    const MAX_RETRIES = 3;
    let retries = 0;

    const connectWithRetry = async () => {
        try {
            await mongoose.connect(`${ENV.MONGODB_URI}/scribbleai`);
        } catch (error) {
            retries += 1;
            console.error(`❌ MongoDB connection attempt ${retries} failed:`, error.message);
            if (retries >= MAX_RETRIES) {
                console.error('❌ Exceeded maximum MongoDB connection retries. Exiting.');
                process.exit(1);
            }
            console.log('⏳ Retrying MongoDB connection in 5 seconds...');
            setTimeout(connectWithRetry, 5000);
        }
    };

    await connectWithRetry();
};

export default connectDB;