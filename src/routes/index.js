import express from 'express';
import iotRouter from './iot';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('BISS Backend Server');
});

router.use('iot', iotRouter);

export default router;
