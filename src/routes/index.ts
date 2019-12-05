import express from 'express';
import * as homeController from '../controllers/home';
import songRouter from './api/songs';

const indexRouter = express.Router();

indexRouter.get('/', homeController.index);

indexRouter.use('/api/songs', songRouter);

export default indexRouter;