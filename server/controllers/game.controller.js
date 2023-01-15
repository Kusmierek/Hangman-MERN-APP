import Game from '../models/game.model.js';
import mongoose from 'mongoose';

export const createGame = (req, res) => {
  const postGame = new Game({
    _id: mongoose.Types.ObjectId(),
    score: req.body.score,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
  });
  return postGame
    .save()
    .then((postGame) => {
      return res.status(201).json({
        success: true,
        message: 'New game created successfully',
        Game: postGame,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
};
