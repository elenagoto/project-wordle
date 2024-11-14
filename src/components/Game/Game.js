import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    const newGuess = {
      id: crypto.randomUUID(),
      label: guess,
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    console.info(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput guesses={guesses} handleGuess={handleGuess} />
    </>
  );
}

export default Game;
