import React, { useRef } from "react";
import useInView from "./useInView";

function withScrollAnimation(WrappedComponent) {
    return function ScrollAnimationWrapper(props) {
        const elementRef = useRef(null);
        const isInView = useInView(elementRef);

        console.log("Component in view:", isInView); // Debugging line

        return (
            <div ref={elementRef} className={`scroll-animation ${isInView ? "fade-in" : ""}`}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

export default withScrollAnimation;
