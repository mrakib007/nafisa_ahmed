import { motion } from 'framer-motion';

const SlideIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5, 
  className = '',
  ...props 
}) => {
  // Define initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: 50, opacity: 0 };
      case 'right':
        return { x: -50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
