import { motion, useSpring, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  className,
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = countRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: duration,
      onUpdate(value) {
        node.textContent = prefix + Math.floor(value).toLocaleString() + suffix;
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [value, duration, prefix, suffix]);

  return <span ref={countRef} className={className}>{prefix}0{suffix}</span>;
}
