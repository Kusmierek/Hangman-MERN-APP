import express from 'express';
import { createGame, topGamers } from '../controllers/game.controller.js';

const gameRouter = express.Router();

gameRouter.post('/new', createGame);
gameRouter.get('/top', topGamers);

export default gameRouter;
