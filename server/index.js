import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import categoryRouter from './routes/category.route.js';
import userRouter from './routes/user.route.js';
import wordRouter from './routes/word.route.js';

dotenv.config();
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
mongoose.set('strictQuery', false);

console.log(process.env.MONGO_PATH);

mongoose.connect(process.env.MONGO_PATH, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mongodb is connected');
  }
});

app.use('/api/cat', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/word', wordRouter);

app.listen(3000);
