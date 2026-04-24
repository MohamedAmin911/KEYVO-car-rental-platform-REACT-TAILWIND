
import React from 'react';
import { cn } from '../../utils/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-20',
  };

  return (
    <div className={cn("inline-flex items-center select-none", sizes[size], className)}>
      <img 
        src="/logo.png" 
        alt="KEYVO Logo" 
        className="h-full w-auto drop-shadow-[0_0_8px_rgba(239,255,0,0.3)]"
      />
    </div>
  );
};
