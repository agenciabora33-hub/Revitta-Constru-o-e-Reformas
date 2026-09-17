import React from 'react';

interface SparkleIconProps {
  className?: string;
  size?: number;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({ className = "w-4 h-4 text-indigo-300", size = 16 }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className} 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
    </svg>
  );
};
