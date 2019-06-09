import express from 'express';

const iotRouter = express.Router();

iotRouter.get('/r2', (req, res) => {
  res.send('Hello /iot/r2');
});

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
