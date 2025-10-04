import express from 'express';
import { addWorkout, getWorkouts } from '../Controllers/workoutController.js';
const router = express.Router();

router.post('/', addWorkout);
router.get('/:userId', getWorkouts);

export default router;
