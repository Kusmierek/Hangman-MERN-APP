import { createSlice } from '@reduxjs/toolkit';

export interface wordType {
  word: string;
  alphabet: string[];
  disabled: string[];
}

const initialState: wordType = {
  word: '',
  alphabet: [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ],
  disabled: [],
};

const hangmanGameWordSlice = createSlice({
  name: 'hangmanGameWord',
  initialState,
  reducers: {
    assignWord: (state, action) => {
      state.word = action.payload;
    },
    addDisabled: (state, action) => {
      state.disabled = [...state.disabled, action.payload];
    },
    errors: (state, aciton) => {
      return;
    },
  },
});

export const { assignWord, addDisabled } = hangmanGameWordSlice.actions;

export default hangmanGameWordSlice.reducer;
