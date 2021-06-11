import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import '@shared/infra/typeorm';
import '@shared/container';
import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/tmp', { useNewUrlParser: true, useUnifiedTopology: true });

import routes from './routes';


const app = express();
app.use('/files', express.static(uploadConfig.tmpFolder));
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				status: 'error',
				message: err.message,
			});
		}
		console.error(err);
		return response.status(500).json({
			status: 'error',
			message: 'Internal server error',
		});
	},
);
app.listen(3344, () => {
	console.log('🚀 server started doctor-backend on port 3344');
});
