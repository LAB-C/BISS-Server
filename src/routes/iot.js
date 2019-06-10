import express from 'express';
import IotController from '../controllers/IotController';

const iotRouter = express.Router();

iotRouter.get('/', (_, res) => res.send(new IotController().getIots()));

iotRouter.post('/r1', (req, res) => {
  res.send('Hello /iot/r1');
});

iotRouter.put('/r2', (req, res) => {
  res.send('Hello /iot/r2');
});

iotRouter.delete('/r2', (req, res) => {
  res.send('Hello /iot/r2');
});

export default iotRouter;
