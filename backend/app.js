import express from 'express';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';
import exerciseRoutes from './Routes/exerciseRoutes.js';
import workoutRoutes from './Routes/workoutRoutes.js';
import prRoutes from './Routes/prRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/pr', prRoutes);

export default app;
