import express from 'express';
import router from './routes';
import mongoose from './database';

const app = express();
app.use('/', router);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

app.listen(3000, () => {
  console.log('open on 3000');
});
