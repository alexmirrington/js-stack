import express from 'express';
import songRouter from './api/songs';

const indexRouter = express.Router();

indexRouter.use('/api/songs', songRouter);

export default indexRouter;