import express from 'express';
import { createGame } from '../controllers/game.controller.js';

const gameRouter = express.Router();

gameRouter.post('/new', createGame);

export default gameRouter;
