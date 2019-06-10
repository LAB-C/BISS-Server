import express from 'express';
import bodyParser from 'body-parser';
import iotRouter from './iot';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', (_, res) => {
  res.send('BISS Backend Server');
});

router.use('/iot', iotRouter);

export default router;
