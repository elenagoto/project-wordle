import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer }) {
  let emptySlots = NUM_OF_GUESSES_ALLOWED - guesses.length;
  return (
    <div className='guess-results'>
      {guesses.map(({ id, label }) => (
        <p className='guess' key={id} data-key={id}>
          <Guess word={label} answer={answer} />
        </p>
      ))}
      {range(emptySlots).map((num) => (
        <p
          className='guess'
          key={crypto.randomUUID()}
          data-key={crypto.randomUUID()}
        >
          <Guess />
        </p>
      ))}
    </div>
  );
}
export default GuessResults;
