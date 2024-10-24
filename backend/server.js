import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// Create a function to initialize the serverless handler
const app = express()

// Connect to DB and cloud services only once
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/admin', adminRouter) //localhost:4000/api/admin/add-doctor
app.use('/api/doctor', doctorRouter) //localhost:4000/api/doctor/list
app.use('/api/user', userRouter) //localhost:4000/api/user/register

app.get('/', (req, res) => {
    res.send('API Working')
})

// Export the app (no app.listen)
export default app
