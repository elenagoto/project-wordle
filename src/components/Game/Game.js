import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner/Banner';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [endGame, setEndGame] = React.useState(false);
  const [win, setWin] = React.useState(false);

  function handleGuess(guess) {
    const newGuess = {
      id: crypto.randomUUID(),
      label: guess,
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      console.log(guess, answer);
      setEndGame(true);
      setWin(true);
      return;
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndGame(true);
    }

    console.info(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} endGame={endGame} />
      <Banner
        endGame={endGame}
        win={win}
        answer={answer}
        guessNumber={guesses.length}
      />
    </>
  );
}

export default Game;
