import express from 'express';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seriesRoutes from './routes/series.routes.js';

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

async function start() {
    if (!process.env.MONGO_URI) {
        console.error('MONGO_URI is not defined. Please set it in your .env file.');
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

void start();

app.use('/api/series', seriesRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});



