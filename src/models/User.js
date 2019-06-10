import { Schema } from 'mongoose';
import mongoose from '../database';

const userSchema = new Schema({
  email: Schema.Types.String,
  name: Schema.Types.String,
  password: Schema.Types.String,
  desc: Schema.Types.String,
});

module.exports = mongoose.model('user', userSchema);
