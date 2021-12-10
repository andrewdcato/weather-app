import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

import logger from './lib/logger.js';
import forecastRouter from './routes/forecast.js';

dotenv.config();

// ES modules don't support old-school Node path shortcuts, so mimic using new funcs
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const { API_PORT: port } = process.env;
const app = express();

global.logger = logger;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
  // If we aren't in prod, don't serve the compiled app
  if (process.env.NODE_ENV !== 'production') return res.redirect(`http://localhost:3000`);

  // Otherwise, serve the production app
  res.sendFile('index.html', { root: `${__dirname}/../build`});
});

app.use('/forecast', forecastRouter);

app.listen(port, () => { logger.warn(`Server running on port ${port}!`); });
