import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import v1Routes from './index.js';
import { notFoundMiddleware } from './middlewares/notFound.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { limiter } from './utils/limiter.utils.js';

dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//app.use(limiter);

app.get("/", (req, res) => {
    res.json({ message: "Deploy Vercel" });
});

app.use('/v1', v1Routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;