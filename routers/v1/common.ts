import express from 'express';
import { commonController } from '../../controllers'

const router = express.Router();

router.get('/', commonController.v1.example)

export default router;
