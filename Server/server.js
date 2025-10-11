import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware,requireAuth } from '@clerk/express'
import aiRouter from './Routes/aiRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './Routes/userRoute.js';


const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) =>res.send('Server is Live'))

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

app.use(requireAuth())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("server is runing on port", PORT);
})

