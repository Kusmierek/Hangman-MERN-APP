import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { StateType } from '../store';
import { assignWord, addDisabled, wordType } from '../slices/wordSlice';

interface StateProps {
  word: String;
  alphabet: String[];
  disabled: String[];
}

const Keyboard = () => {
  const dispatch = useDispatch();

  const gameState = useSelector<StateType, StateProps>(
    (state) => state.hangmanGameWord
  );

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();
        dispatch(addDisabled(letter));
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div className="w-full h-1/2">
      <div className="keyboard-row">
        {gameState.alphabet.slice(0, 13).map((key, i) => {
          return (
            <button
              key={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                dispatch(addDisabled(key))
              }
            >
              {gameState.disabled.includes(key) ? (
                <kbd className="keyboard-el-dis">{key}</kbd>
              ) : (
                <kbd className="keyboard-el">{key}</kbd>
              )}
            </button>
          );
        })}
      </div>
      <div className="keyboard-row">
        {gameState.alphabet.slice(13, 24).map((key, i) => {
          return (
            <button
              key={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                dispatch(addDisabled(key))
              }
            >
              {gameState.disabled.includes(key) ? (
                <kbd className="keyboard-el-dis">{key}</kbd>
              ) : (
                <kbd className="keyboard-el">{key}</kbd>
              )}
            </button>
          );
        })}
      </div>
      <div className="keyboard-row">
        {gameState.alphabet.slice(24, 34).map((key, i) => {
          return (
            <button
              key={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                dispatch(addDisabled(key))
              }
            >
              {gameState.disabled.includes(key) ? (
                <kbd className="keyboard-el-dis">{key}</kbd>
              ) : (
                <kbd className="keyboard-el">{key}</kbd>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
