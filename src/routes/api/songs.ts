import express from 'express';
import * as songsController from '../../controllers/api/songs';

const songRouter = express.Router();
songRouter.get('/', songsController.getAll);
songRouter.get('/:id', songsController.getByID);
songRouter.post('/', songsController.create);

export default songRouter;