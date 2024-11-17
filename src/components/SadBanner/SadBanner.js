import React from 'react';
import Banner from '../Banner';

function SadBanner({ answer }) {
  return (
    <>
      <Banner status='sad'>
        <p>
          Sorry, the correct answer was <strong>{answer}</strong>.
        </p>
      </Banner>
    </>
  );
}

export default SadBanner;
