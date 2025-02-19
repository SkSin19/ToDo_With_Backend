import express from 'express';
import cors from 'cors';
import routes from './routes/Routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();


const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
  




app.use(express.json())
app.use(cors())
app.use(routes)
app.use(cookieParser());


const PORT = process.env.PORT;


app.listen(PORT || 4000, () => {
    console.log(`Backend server started successfully at ${PORT}`)
})