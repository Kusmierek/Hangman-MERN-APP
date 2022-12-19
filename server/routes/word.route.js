import express from 'express';
import {
  createWord,
  deleteWord,
  getAllWords,
  getOneWord,
  updateWord,
} from '../controllers/word.controller.js';

const wordRouter = express.Router();

wordRouter.get('/', getAllWords);
wordRouter.post('/new', createWord);
wordRouter.get('/:userid', getOneWord);
wordRouter.put('/:userid', updateWord);
wordRouter.delete('/:userid', deleteWord);

export default wordRouter;
