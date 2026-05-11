// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './src/config/mongodb.js'
// import connectCloudinary from './src/config/cloudinary.js'
// import adminRouter from './src/routes/adminRoute.js'
// import doctorRouter from './src/routes/doctorRoute.js'
// import userRouter from './src/routes/userRoute.js'

// // app config
// const app = express()
// const port = process.env.PORT || 4000

// let isInitialized = false

// // Initialize app (to be called before handling requests)
// export async function initializeApp() {
//     if (isInitialized) return
    
//     try {
//         await connectDB()
//         await connectCloudinary()
//         isInitialized = true
//     } catch (error) {
//         console.error('Failed to initialize app:', error)
//         throw error
//     }
// }

// // middilewares
// app.use(express.json())
// app.use(cors())

// // Initialize middleware - ensures connections before handling requests
// app.use(async (req, res, next) => {
//     try {
//         await initializeApp()
//         next()
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to initialize server' })
//     }
// })

// // api endpoints
// app.use('/api/admin', adminRouter);
// app.use('/api/doctor', doctorRouter);
// app.use('/api/user', userRouter)

// // app.get('/', (req, res) => {
// //     res.send({
// //         activeStatus: true,
// //         error: false
// //     })
// // })

// app.get('/', (req,res)=>{
//     res.send("API WORKING")
// })

// app.use((err, req, res, next) => {
//     console.error('Unhandled server error:', err)
//     res.status(500).json({ error: 'Internal Server Error' })
// })

// // For local development
// if (process.env.NODE_ENV !== 'production') {
//     app.listen(port, () => console.log("Server Started at:", port))
// }

// export default app

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import adminRouter from './src/routes/adminRoute.js'
import doctorRouter from './src/routes/doctorRoute.js'
import userRouter from './src/routes/userRoute.js'

// Load environment variables
// dotenv.config()

// App configuration
const app = express()
const port = process.env.PORT || 4000

// Middlewares
app.use(express.json())
app.use(cors())

// API Routes
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// Test Route
app.get('/', (req, res) => {
    res.send('API WORKING')
})

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err.message)

    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    })
})

// Start Server Function
const startServer = async () => {
    try {

        // Connect MongoDB
        await connectDB()
        console.log('MongoDB Connected')

        // Connect Cloudinary
        await connectCloudinary()
        console.log('Cloudinary Connected')

        // Start Express Server
        app.listen(port, () => {
            console.log(`Server Started on PORT: ${port}`)
        })

    } catch (error) {

        console.error('Failed to start server:', error.message)

        process.exit(1)
    }
}

// Run Server
startServer()