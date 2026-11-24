import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  yOffset?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  yOffset = 20,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible on SSR / first paint so static HTML and immediate fold never trap at opacity 0
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    // Only animate elements that start below the initial viewport
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.95) {
      setRevealed(true);
      return;
    }

    setRevealed(false);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '-40px 0px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-[opacity,transform] duration-500 ease-out will-change-transform ${className}`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translate3d(0, 0, 0)' : `translate3d(0, ${yOffset}px, 0)`,
        transitionDelay: delay ? `${Math.round(delay * 1000)}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};
