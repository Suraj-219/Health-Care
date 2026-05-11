// import mongoose from "mongoose";

// const connectDB = async() => {
//     try {
//         if (mongoose.connection.readyState === 1) {
//             console.log("Database already connected");
//             return;
//         }

//         mongoose.connection.on('connected', () => console.log("Database Connected"));

//         await mongoose.connect(process.env.MONGODB_URI, { 
//             dbName: 'healthcare',
//             connectTimeoutMS: 10000,
//             socketTimeoutMS: 45000,
//             serverSelectionTimeoutMS: 10000
//         });
//     } catch (error) {
//         console.error('Failed to connect to MongoDB:', error.message || error);
//         throw error;
//     }
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {

    try {

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing")
        }

        mongoose.connection.on('connected', () => {
            console.log("Database Connected")
        })

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'healthcare'
        })

    } catch (error) {

        console.log("MongoDB Error:")
        console.log(error.message)

        throw error
    }
}

export default connectDB;