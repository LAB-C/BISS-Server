import Iot from '../models/Iot';

export function getIot(uuid) {
  return Iot.find({ uuid });
}

export function createIot(uuid, key, name, desc, userId) {
  const newIot = new Iot({
    uuid, key, name, desc, userId,
  });
  newIot.save((err) => {
    if (err) return err;
    return newIot;
  });
}
