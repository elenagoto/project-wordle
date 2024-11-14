import React from 'react';

function Banner({ endGame, win, guessNumber, answer }) {
  let content;

  if (endGame) {
    content = win ? (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessNumber === 1 ? '1 guess' : `${guessNumber} guesses`}
          </strong>
          .
        </p>
      </div>
    ) : (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer was <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    content = <></>;
  }

  return content;
}

export default Banner;
