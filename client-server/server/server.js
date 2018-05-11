import mongoose from 'mongoose';
import serverConfig from './config';
import express from 'express';
import posts from './routes/post.routes';
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json());
// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

app.use('/posts', posts);

app.listen(serverConfig.port)