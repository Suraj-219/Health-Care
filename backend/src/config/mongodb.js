import mongoose from "mongoose";

const connectDB = async() => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Database already connected");
            return;
        }

        mongoose.connection.on('connected', () => console.log("Database Connected"));

        await mongoose.connect(process.env.MONGODB_URI, { 
            dbName: 'healthcare',
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            serverSelectionTimeoutMS: 10000
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message || error);
        throw error;
    }
}

export default connectDB;