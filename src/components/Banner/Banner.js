import React from 'react';

function Banner({ win, guessNumber, answer }) {
  if (win) {
    let guessPhrase = guessNumber === 1 ? '1 guess' : `${guessNumber} guesses`;
    return (
      <div class='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessPhrase}</strong>.
        </p>
      </div>
    );
  } else {
    <div class='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>;
  }
}

export default Banner;
