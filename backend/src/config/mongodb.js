import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));

        await mongoose.connect(process.env.MONGODB_URI, { dbName: 'healthcare' });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message || error);
        throw error;
    }
}

export default connectDB;