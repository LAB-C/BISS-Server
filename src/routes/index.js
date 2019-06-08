import express from 'express';
import iotRouter from './iot';

const router = express.Router();

router.use('iot', iotRouter);

export default router;