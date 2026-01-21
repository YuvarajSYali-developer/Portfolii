import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type CursorType = 'default' | 'hover' | 'click' | 'text' | 'drag' | 'link';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Hide cursor when mouse leaves the window
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Update cursor type based on hovered element
      const target = e.target as HTMLElement;
      
      if (target.closest('a, button, [role="button"], [data-cursor="link"]')) {
        setCursorType('link');
      } else if (target.closest('input, textarea, [contenteditable]')) {
        setCursorType('text');
      } else if (target.closest('[data-cursor="drag"]')) {
        setCursorType('drag');
      } else {
        setCursorType('default');
      }
    };
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setCursorType('click');
    const handleMouseUp = () => setCursorType('default');
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }
  
  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      x: position.x - 12,
      y: position.y - 12,
      backgroundColor: 'transparent',
      borderColor: 'hsl(210, 100%, 70%)',
      scale: 1,
    },
    hover: {
      width: 40,
      height: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: 'hsla(210, 100%, 70%, 0.2)',
      borderColor: 'hsl(210, 100%, 70%)',
      scale: 1.2,
    },
    click: {
      width: 30,
      height: 30,
      x: position.x - 15,
      y: position.y - 15,
      backgroundColor: 'hsla(210, 100%, 70%, 0.3)',
      borderColor: 'hsl(210, 100%, 80%)',
      scale: 0.9,
    },
    text: {
      width: 8,
      height: 24,
      x: position.x - 4,
      y: position.y - 12,
      backgroundColor: 'hsl(210, 100%, 70%)',
      borderColor: 'transparent',
      scale: 1,
    },
    drag: {
      width: 40,
      height: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: 'hsla(150, 95%, 60%, 0.2)',
      borderColor: 'hsl(150, 95%, 60%)',
      scale: 1.1,
    },
    link: {
      width: 40,
      height: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: 'hsla(340, 95%, 60%, 0.2)',
      borderColor: 'hsl(340, 95%, 60%)',
      scale: 1.1,
    },
  };
  
  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ display: hidden ? 'none' : 'block' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className={cn(
            'fixed rounded-full border-2 pointer-events-none',
            'transition-colors duration-200 ease-out',
            {
              'bg-transparent': cursorType === 'default',
              'bg-opacity-20': cursorType !== 'default',
              'border-opacity-100': cursorType !== 'text',
              'border-opacity-0': cursorType === 'text',
              '!w-2 !h-6': cursorType === 'text',
            }
          )}
          variants={cursorVariants}
          animate={cursorType}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
            mass: 0.5,
          }}
        />
      </AnimatePresence>
      
      {/* Cursor trail effect */}
      <AnimatePresence>
        {!hidden && (
          <motion.div
            className="absolute w-6 h-6 rounded-full bg-primary/20 pointer-events-none"
            initial={{ opacity: 0, x: position.x - 12, y: position.y - 12, scale: 1 }}
            animate={{ opacity: 1, x: position.x - 12, y: position.y - 12, scale: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
