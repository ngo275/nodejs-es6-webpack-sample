import express from 'express';
import middleware from './src/middleware';
import v1 from './src/v1';
import config from './config/config.json';

const app = express();
const db = {} // TODO

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

// internal middleware
app.use(middleware({ config, db }));

app.use('/api/v1', v1({ config, db }));

app.listen(3389);
