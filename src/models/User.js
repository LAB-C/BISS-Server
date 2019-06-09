import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: Schema.Types.String,
  name: Schema.Types.String,
  password: Schema.Types.String,
  desc: Schema.Types.String,
  userId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('user', userSchema);
