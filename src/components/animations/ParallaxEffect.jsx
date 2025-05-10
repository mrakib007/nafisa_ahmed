import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxEffect = ({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Calculate transform based on direction and speed
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${-100 * speed}%`]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${-100 * speed}%`]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ['0%', `${-100 * speed}%`]);
    }
  };

  const transform = getTransform();
  const isVertical = direction === 'up' || direction === 'down';
  const style = isVertical ? { y: transform } : { x: transform };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      <motion.div style={style} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxEffect;
