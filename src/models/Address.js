import mongoose, { Schema } from 'mongoose';

const addressSchema = new Schema({
  address: Schema.Types.String,
  desc: Schema.Types.String,
  userId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('address', addressSchema);
