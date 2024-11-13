import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map(({ id, label }) => (
        <p className='guess' key={id} data-key={id}>
          {label}
        </p>
      ))}
    </div>
  );
}
export default GuessResults;
