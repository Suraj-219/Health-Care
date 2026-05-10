import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import adminRouter from './src/routes/adminRoute.js'
import doctorRouter from './src/routes/doctorRoute.js'
import userRouter from './src/routes/userRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middilewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor',doctorRouter);
app.use('/api/user',userRouter)

app.get('/',(req, res)=>{
    res.send({
        activeStatus: true,
        erros: false
    })
})

app.get('/', (req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log("Server Started at:", port))