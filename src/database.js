import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true });

export default mongoose;
