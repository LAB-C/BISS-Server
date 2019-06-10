import Iot from '../models/Iot';

export default class IotController {
  static getIots() {
    return Iot.find();
  }

  static createIot(uuid, key, name, desc, userId) {
    Iot.create({
      uuid, key, name, desc, userId,
    }, (err, row) => {
      if (err) return err;
      return row;
    });
  }
}
