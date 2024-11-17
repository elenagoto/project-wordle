import React from 'react';

function GuessInput({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        pattern='[A-Za-z]{5}'
        title='Please enter a 5-letter word.'
        value={guess}
        disabled={disabled}
        onChange={(event) => {
          let input = event.target.value;
          setGuess(input.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
