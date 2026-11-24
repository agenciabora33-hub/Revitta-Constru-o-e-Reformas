import React, { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.6,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const hasPlus = value.startsWith('+');
    const digitsOnly = value.replace(/\D/g, '');
    const targetNum = parseInt(digitsOnly, 10);

    if (isNaN(targetNum)) {
      el.textContent = value;
      return;
    }

    const matchSuffix = value.match(/[a-zA-Z%]+$/);
    const suffix = matchSuffix ? matchSuffix[0] : '';

    let rafId = 0;
    let hasAnimated = false;

    const startAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const prefersReduced =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        const formatted =
          targetNum >= 1000 ? targetNum.toLocaleString('pt-BR') : targetNum.toString();
        el.textContent = `${hasPlus ? '+' : ''}${formatted}${suffix}`;
        return;
      }

      const startTime = performance.now();
      const durationMs = duration * 1000;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Smooth cubic ease-out
        const eased = 1 - Math.pow(1 - progress, 3);
        const rounded = Math.round(eased * targetNum);
        const formatted = rounded >= 1000 ? rounded.toLocaleString('pt-BR') : rounded.toString();
        if (ref.current) {
          ref.current.textContent = `${hasPlus ? '+' : ''}${formatted}${suffix}`;
        }
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startAnimation();
          observer.disconnect();
        }
      },
      { rootMargin: '-40px 0px', threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};
