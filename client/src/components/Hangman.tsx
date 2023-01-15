import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../store';
import { useParams, Link } from 'react-router-dom';
import {
  assignWord,
  addDisabled,
  wordType,
  resetDisabled,
} from '../slices/wordSlice';
import { useEffect, useMemo, useState } from 'react';
import { randomWordGet } from '../server/RandomWord';

interface StateProps {
  word: string;
  alphabet: string[];
  disabled: string[];
}

const Hangman = () => {
  const gameState = useSelector<StateType, StateProps>(
    (state) => state.hangmanGameWord
  );
  const { catid } = useParams();

  const dispatch = useDispatch();
  const randomWord = 'ANGLIA';

  useEffect(() => {
    randomWordGet(catid).then((response: any) => {
      console.log(response);
      dispatch(resetDisabled());
      dispatch(assignWord(response.Word[0].name.toUpperCase()));
    });
  }, [dispatch]);

  const maskedWord = useMemo(() => {
    const state = gameState.word
      .split('')
      .map((letter) =>
        gameState.disabled.includes(letter) || letter == ' ' ? letter : '_'
      )
      .join(' ');
    if (!state.includes('_') && state != '') {
      console.log('koniec gry');
    }
    return state;
  }, [gameState.word, gameState.disabled]);

  const errors = useMemo(() => {
    return gameState.disabled.filter(
      (x) => !gameState.word.slice('').includes(x)
    ).length;
  }, [gameState.word, gameState.disabled]);

  const score = useMemo(() => {
    return 7 + gameState.word.length - errors;
  }, [gameState.word, gameState.disabled]);
  console.log(score);

  return (
    <div className="h-1/2">
      <div className="flex h-3/4 items-center justify-center">
        <svg height="320" width="250" className="figure-container">
          {/* <!-- Rod --> */}
          {errors > 0 && <line x1="60" y1="20" x2="200" y2="20" />}
          {errors > 0 && <line x1="170" y1="20" x2="170" y2="70" />}
          {errors > 0 && <line x1="60" y1="20" x2="60" y2="300" />}
          {errors > 0 && <line x1="20" y1="300" x2="100" y2="300" />}
          {/* <!-- Head --> */}
          {errors > 1 && <circle cx="170" cy="90" r="20" />}
          {/* <!-- Body --> */}
          {errors > 2 && <line x1="170" y1="110" x2="170" y2="180" />}
          {/* <!-- Arms --> */}
          {errors > 3 && <line x1="170" y1="140" x2="120" y2="100" />}
          {errors > 4 && <line x1="170" y1="140" x2="220" y2="100" />}
          {/* <!-- Legs --> */}
          {errors > 5 && <line x1="170" y1="180" x2="190" y2="230" />}
          {errors > 6 && <line x1="170" y1="180" x2="150" y2="230" />}
        </svg>
      </div>
      <div className="flex h-1/4 items-center justify-center">
        <p className="text-6xl text-blue-300 w-auto">{maskedWord}</p>
      </div>
      {/* {console.log(score)} */}
    </div>
  );
};

export default Hangman;
