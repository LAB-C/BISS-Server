import { Schema } from 'mongoose';
import mongoose from '../database';

const iotSchema = new Schema({
  uuid: Schema.Types.String,
  key: Schema.Types.String,
  name: Schema.Types.String,
  desc: Schema.Types.String,
  userId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('iot', iotSchema);
