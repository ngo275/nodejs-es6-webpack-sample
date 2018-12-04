import express from 'express';
import middleware from './src/middleware';
import v1 from './src/v1';
import config from './config/config.json';

const env = process.env.NODE_ENV || 'development';
const conf = config[env]

const app = express();
const db = {} // TODO

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

// internal middleware
app.use(middleware({ config: conf, db }));

app.use('/api/v1', v1({ config: conf, db }));

const PORT = conf.port || 3389

app.listen(PORT);
