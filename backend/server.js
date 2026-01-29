import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middilewares
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log("Server Started at:", port))