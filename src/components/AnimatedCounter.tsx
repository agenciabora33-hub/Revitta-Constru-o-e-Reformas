import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2.0,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Check for plus prefix
    const hasPlus = value.startsWith('+');
    // Extract numerical digits
    const digitsOnly = value.replace(/\D/g, '');
    const num = parseInt(digitsOnly, 10);

    if (isNaN(num)) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    // Extract any trailing suffix (e.g. "h" in "24h")
    const matchSuffix = value.match(/[a-zA-Z%]+$/);
    const suffix = matchSuffix ? matchSuffix[0] : '';

    const controls = animate(0, num, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Luxury deceleration curve
      onUpdate: (latest) => {
        if (ref.current) {
          const rounded = Math.round(latest);
          const formatted = rounded >= 1000 
            ? rounded.toLocaleString('pt-BR')
            : rounded.toString();
          ref.current.textContent = `${hasPlus ? '+' : ''}${formatted}${suffix}`;
        }
      }
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};
