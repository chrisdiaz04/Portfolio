// withScrollAnimation.jsx
import React, { useRef, useEffect, useState } from 'react';
import useInView from './useInView'; // Importing the default export

function withScrollAnimation(Component) {
  return function ScrollAnimationWrapper(props) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
      // Trigger the animation only if the element is in view and it hasn't played before
      if (isInView && !hasPlayed) {
        ref.current.classList.add('fade-in');
        setHasPlayed(false); // Mark the animation as played
      }
    }, [isInView, hasPlayed]);

    return (
      <div ref={ref} className="scroll-animation">
        <Component {...props} />
      </div>
    );
  };
}

export default withScrollAnimation;
