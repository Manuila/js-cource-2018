import mongoose from 'mongoose';
import serverConfig from './config';
import express from 'express';
import posts from './routes/postRoutes';
import bodyParser from 'body-parser'

const app = express();


// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});
// enable CORS on the server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use('/posts', posts);

app.listen(serverConfig.port, () => {
  console.log(`Server running on port ${serverConfig.port}!`);
});

export default app;