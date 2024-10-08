import React, { useRef, useEffect, useState } from "react";
import useInView from "./useInView"; // Adjust the path if necessary

function withUpwardScrollAnimation(WrappedComponent) {
    return function ScrollUpAnimationWrapper(props) {
        const elementRef = useRef(null);
        const isInView = useInView(elementRef);
        const [shouldAnimate, setShouldAnimate] = useState(false);

        useEffect(() => {
            if (isInView) {
                setShouldAnimate(true); // Start the animation when in view
            } else {
                setShouldAnimate(false); // Reset the animation when out of view
            }
        }, [isInView]);

        return (
            <div ref={elementRef} className={`scroll-animation-up ${shouldAnimate ? "fade-in" : ""}`}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

export default withUpwardScrollAnimation;
