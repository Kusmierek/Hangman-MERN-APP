import express from 'express';
import {
  createWord,
  deleteWord,
  getAllWords,
  getOneWord,
  RandomWord,
  updateWord,
  wordByCategory,
} from '../controllers/word.controller.js';

const wordRouter = express.Router();

wordRouter.get('/', getAllWords);
wordRouter.post('/new', createWord);
wordRouter.get('/table', wordByCategory);
wordRouter.get('/:id', getOneWord);
wordRouter.put('/:id', updateWord);
wordRouter.delete('/:id', deleteWord);
wordRouter.get('/random/:catid', RandomWord);

export default wordRouter;
