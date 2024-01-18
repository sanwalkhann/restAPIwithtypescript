import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './Router';
import mongoose from 'mongoose';

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router());

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const MONGO_URL = "mongodb+srv://typecheck:12345@cluster0.lu2wukg.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));
mongoose.connection.once('open', () => {
  console.log('MongoDB connection successful!');
});
