import Iot from '../models/Iot';

export default class IotController {
  static getIot(uuid) {
    return Iot.findOne({ uuid });
  }

  static getIots() {
    return Iot.find({});
  }

  static async createIot(iotCreate, callback) {
    const newIot = new Iot({
      uuid: iotCreate.uuid,
      key: iotCreate.key,
      name: iotCreate.name,
      desc: iotCreate.desc,
      userId: iotCreate.userId,
    });
    newIot.save((err, row) => {
      if (err) return err;
      callback(row);
      return true;
    });
  }
}
