import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'white' | 'green';
}

const sizes = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-24',
};

export default function Logo({ className, size = 'md' }: LogoProps) {
  return (
    <img 
      src="/logo.jpg" 
      alt="Ratel Logo" 
      className={cn(sizes[size], "object-contain rounded-full shadow-emerald-900/10", className)}
      referrerPolicy="no-referrer"
    />
  );
}
