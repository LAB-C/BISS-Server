import Iot from '../models/Iot';

export default class IotController {
  static getIot(uuid, callback) {
    return Iot.findOne({ uuid }, row => callback(row));
  }

  static getIots(callback) {
    return Iot.find({}, rows => callback(rows));
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
      if (err) console.log(err);
      callback(row);
      return true;
    });
  }
}
