import React from 'react';
import { range } from '../../utils';

function Guess({ word = null }) {
  if (word) {
    return (
      <>
        {word.split('').map((letter) => (
          <span className='cell' key={crypto.randomUUID()}>
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
