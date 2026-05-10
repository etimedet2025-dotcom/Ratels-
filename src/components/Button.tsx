import * as React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../lib/utils';
import Loader from './Loader';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  className,
  variant = 'primary',
  isLoading,
  children,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-nigeria-emerald text-white hover:bg-emerald-900 shadow-md",
    secondary: "bg-nigeria-green text-white hover:bg-emerald-700 shadow-md",
    outline: "border-2 border-nigeria-emerald text-nigeria-emerald hover:bg-emerald-50",
    ghost: "text-nigeria-emerald hover:bg-emerald-50",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
  };

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      disabled={disabled || isLoading}
      className={cn(
        "relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
          <Loader size="sm" className={variant === 'outline' || variant === 'ghost' ? 'opacity-100' : 'bg-transparent'} />
        </div>
      )}
      <span className={cn("flex items-center gap-2", isLoading && "opacity-0")}>
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    </motion.button>
  );
}
