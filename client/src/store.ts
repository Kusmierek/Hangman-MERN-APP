import { configureStore } from '@reduxjs/toolkit';
import hangmanGameWordSlice, { wordType } from './slices/wordSlice';

export const store = configureStore({
  reducer: {
    hangmanGameWord: hangmanGameWordSlice,
  },
});

export interface StateType {
  hangmanGameWord: wordType;
}
