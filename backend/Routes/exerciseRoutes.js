import express from 'express';
import { getExercises, addExercise } from '../Controllers/exerciseController.js';
const router = express.Router();

router.get('/:userId', getExercises);
router.post('/', addExercise);

export default router;
