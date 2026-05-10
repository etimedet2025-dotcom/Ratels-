import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  animation?: 'bounce' | 'rotate' | 'pulse' | 'float';
}

export default function AnimatedIcon({ 
  icon: Icon, 
  className, 
  size = 20, 
  animation = 'bounce' 
}: AnimatedIconProps) {
  
  const animations = {
    bounce: {
      hover: { y: -4 },
      transition: { type: "spring", stiffness: 300 }
    },
    rotate: {
      hover: { rotate: 15 },
      transition: { type: "spring", stiffness: 300 }
    },
    pulse: {
      animate: { scale: [1, 1.1, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    float: {
      animate: { y: [0, -5, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const selected = animations[animation] as any;

  return (
    <motion.div 
      whileHover={selected.hover}
      animate={selected.animate}
      transition={selected.transition}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <Icon size={size} />
    </motion.div>
  );
}
