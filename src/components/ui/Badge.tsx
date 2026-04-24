
import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-white/10 text-white/80',
    primary: 'bg-primary text-black',
    outline: 'border border-white/20 text-white/60',
  };

  return (
    <span className={cn('text-[10px] px-2 py-1 rounded uppercase font-bold tracking-tight', variants[variant], className)}>
      {children}
    </span>
  );
};
