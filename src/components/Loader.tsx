import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2.5 w-2.5',
  lg: 'h-4 w-4',
};

export default function Loader({ className, size = 'md' }: LoaderProps) {
  const colors = [
    'bg-nigeria-green',
    'bg-nigeria-emerald',
    'bg-emerald-400'
  ];

  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={cn("rounded-full shadow-[0_0_10px_rgba(0,135,81,0.3)]", colors[i], sizes[size])}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
            y: [0, -4, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
