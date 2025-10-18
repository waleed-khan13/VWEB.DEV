"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

type UseInViewOptions = {
  threshold?: number;
  once?: boolean;
};

export function useInView(options: UseInViewOptions = {}): { ref: RefObject<HTMLDivElement>; isInView: boolean } {
  const { threshold = 0.1, once = false } = options; // Default 'once' to false
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else {
          // If 'once' is false, set isInView to false when it goes out of view
          if (!once) {
            setIsInView(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  return { ref, isInView };
}
