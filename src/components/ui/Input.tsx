
import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    const isDateInput = props.type === 'date';

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-[10px] uppercase text-white/40 font-bold tracking-wider px-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20',
            isDateInput &&
              'appearance-none text-left [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-4 [&::-webkit-calendar-picker-indicator]:right-auto [&::-webkit-calendar-picker-indicator]:h-5 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0',
            error && 'border-red-500/50 focus:border-red-500',
            className
          )}
          {...props}
          dir={isDateInput ? 'ltr' : props.dir}
          lang={isDateInput ? props.lang ?? 'en-CA' : props.lang}
        />
        {error && <p className="text-[10px] text-red-500 px-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
