import Word from '../models/word.model.js';
import mongoose from 'mongoose';

export const getAllWords = (req, res) => {
  Word.find()
    .then((allWords) => {
      return res.status(200).json({
        success: true,
        message: 'All Users',
        Word: allWords,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error',
        error: err.message,
      });
    });
};

export const getOneWord = (req, res) => {
  const id = req.params.wordid;
  Word.findById(id)
    .then((singleWord) => {
      res.status(200).json({
        success: true,
        message: 'singleWord',
        Word: singleWord,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This user does not exist',
        error: err.message,
      });
    });
};

export const createWord = (req, res) => {
  const postWord = new Word({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    category_id: req.body.category_id,
    translation: req.body.translation,
  });
  return postWord
    .save()
    .then((newWord) => {
      return res.status(201).json({
        success: true,
        message: 'New word created successfully',
        Word: newWord,
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

export const updateWord = (req, res) => {
  const id = req.params.wordid;
  const updateObject = req.body;
  Word.update({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Word is updated',
        updateWord: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
      });
    });
};

export const deleteWord = (req, res) => {
  const id = req.params.wordid;
  User.findByIdAndRemove(id)
    .exec()
    .then(() =>
      res.status(204).json({
        success: true,
      })
    )
    .catch((err) =>
      res.status(500).json({
        success: false,
        message: 'Cannot find a wordd.',
      })
    );
};

export const RandomWord = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.catid);
  Word.aggregate([{ $match: { category_id: id } }, { $sample: { size: 1 } }])
    .then((singleWord) => {
      res.status(200).json({
        success: true,
        message: 'singleWord',
        Word: singleWord,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error',
        error: err.message,
      });
    });
};
