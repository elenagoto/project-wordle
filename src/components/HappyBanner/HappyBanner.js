import React from 'react';
import Banner from '../Banner';

function HappyBanner({ guessNumber }) {
  return (
    <>
      <Banner status='happy'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessNumber === 1 ? '1 guess' : `${guessNumber} guesses`}
          </strong>
          .
        </p>
      </Banner>
    </>
  );
}

export default HappyBanner;
