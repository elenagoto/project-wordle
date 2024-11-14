import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word = null, answer }) {
  if (word) {
    const checkedWord = checkGuess(word, answer);
    return (
      <>
        {checkedWord.map(({ letter, status }) => (
          <span className={`cell ${status}`} key={crypto.randomUUID()}>
            {letter}
          </span>
        ))}
      </>
    );
  }

  return (
    <>
      {range(5).map((num) => (
        <span className='cell' key={crypto.randomUUID()}></span>
      ))}
    </>
  );
}
export default Guess;
