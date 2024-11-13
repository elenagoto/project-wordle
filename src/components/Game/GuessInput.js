import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleGuess() {
    console.info({ guess });
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess();
        setGuess('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[A-Za-z]{5}'
        value={guess}
        onChange={(event) => {
          let input = event.target.value;
          setGuess(input.toUpperCase());
        }}
      />
    </form>
  );
}
export default GuessInput;
