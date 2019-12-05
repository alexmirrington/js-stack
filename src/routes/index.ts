import express from 'express';
import * as homeController from '../controllers/home';

const routes = express.Router();
routes.get('/', homeController.index);

export default routes;