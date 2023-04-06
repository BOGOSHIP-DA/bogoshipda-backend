import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import path from 'path';

import router from './index';

const app = express();

if (process.env.environment !== 'production') {
  try {
    fs.statSync(path.join(__dirname, '../../config/.env'));
    dotenv.config({ path: path.join(__dirname, '../../config/.env') });
  } catch (err) {
    const envFileError = err as Error;
    if (envFileError.message.includes('ENOENT')) {
      throw new Error('missing \'.env\' file in \'config\' folder. please modify \'.env.sample\' file.');
    }
  }
}

app.use(cors());
app.use(cookieParser());
app.use(json({ limit: '10mb' }));
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}../public`));

app.use('/', router);

export default app;
