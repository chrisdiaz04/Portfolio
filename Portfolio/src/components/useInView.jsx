// useInView.jsx
import { useEffect, useState } from 'react';

function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Determine the threshold based on the screen size
    const thresholdValue = window.innerWidth < 900 ? 0.38 : 0.43;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: thresholdValue }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isInView;
}

export default useInView;
