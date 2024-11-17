import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import SadBanner from '../SadBanner';
import HappyBanner from '../HappyBanner';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuess(guess) {
    const newGuess = {
      id: crypto.randomUUID(),
      label: guess,
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuess={handleGuess}
        disabled={gameStatus !== 'running'}
      />
      {gameStatus === 'won' && <HappyBanner guessNumber={guesses.length} />}
      {gameStatus === 'lost' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
