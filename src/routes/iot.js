import express from 'express';
import IotController from '../controllers/IotController';

const iotRouter = express.Router();

iotRouter.get('/:uuid', (req, res) => {
  console.log(IotController.getIot(req.params.uuid));
  res.send(IotController.getIot(req.params.uuid));
});

iotRouter.get('/', (_, res) => res.send(IotController.getIots()));

iotRouter.post('/', (req, res) => {
  IotController.createIot({
    uuid: req.body.uuid,
    key: req.body.key,
    name: req.body.name,
    desc: req.body.desc,
    useId: req.body.useId,
  },
  (row) => {
    console.log(row);
    res.send(row);
  });
});

iotRouter.put('/r2', (req, res) => {
  res.send('Hello /iot/r2');
});

iotRouter.delete('/r2', (req, res) => {
  res.send('Hello /iot/r2');
});

export default iotRouter;
