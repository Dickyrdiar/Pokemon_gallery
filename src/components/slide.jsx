// src/components/Slide.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const SlideContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 400px; /* Adjust as needed */
  margin: 0 auto;
`;

const SlidingContent = styled.div`
  animation: ${slideIn} 0.5s ease-in-out;
`;

const Slide = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SlideContainer>
      {isVisible && <SlidingContent>{children}</SlidingContent>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </SlideContainer>
  );
};

export default Slide;
