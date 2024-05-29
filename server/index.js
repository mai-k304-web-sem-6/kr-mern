import mongoose from 'mongoose';
import cors from 'cors';
import express from "express";
import router from './routes/postRouter.js'

mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.izxl0k3.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router)

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
