import express from 'express';
import { getPRs, addPR } from '../Controllers/prController.js';
const router = express.Router();

router.get('/:userId', getPRs);
router.post('/', addPR);

export default router;
