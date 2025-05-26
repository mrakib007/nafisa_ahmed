import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import burgerIcon from '../../assets/burgericon.svg';

const NavigationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close popup when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠', description: 'Welcome to my artistic world' },
    { name: 'Portfolio', path: '/portfolio', icon: '🎨', description: 'Explore my creative works' },
    { name: 'About', path: '/about', icon: '👤', description: 'Learn about my journey' },
    { name: 'Contact', path: '/contact', icon: '📧', description: 'Let\'s connect and collaborate' },
  ];

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      {/* Stylish Navigation Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #0b2a2b 0%, #1a4a4b 50%, #2a6a6b 100%)',
          boxShadow: '0 4px 15px rgba(11, 42, 43, 0.3)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={burgerIcon}
            alt="Menu"
            className="w-6 h-6"
            style={{ filter: 'invert(1)' }} // Makes the icon white
          />
        </motion.div>
      </motion.button>

      {/* Navigation Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Popup Content */}
            <motion.div
              className="relative rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4"
              style={{
                background: 'linear-gradient(135deg, #f6d0a8 0%, #f4c794 50%, #f2be80 100%)',
                border: '2px solid rgba(11, 42, 43, 0.2)',
                boxShadow: '0 25px 50px rgba(11, 42, 43, 0.3)'
              }}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  backgroundColor: 'rgba(11, 42, 43, 0.1)',
                  color: '#0b2a2b'
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(11, 42, 43, 0.2)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Header */}
              <motion.div
                className="text-center mb-8"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-fancy mb-2" style={{ color: '#0b2a2b' }}>Navigation</h2>
                <p className="font-script" style={{ color: '#0b2a2b', opacity: 0.8 }}>Where would you like to go?</p>
              </motion.div>

              {/* Navigation Links */}
              <motion.nav className="space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                  >
                    <Link
                      to={link.path}
                      className="block p-4 rounded-2xl transition-all duration-300 group"
                      style={{
                        backgroundColor: location.pathname === link.path
                          ? '#0b2a2b'
                          : 'rgba(255, 255, 255, 0.5)',
                        color: location.pathname === link.path
                          ? 'white'
                          : '#0b2a2b',
                        boxShadow: location.pathname === link.path
                          ? '0 8px 25px rgba(11, 42, 43, 0.3)'
                          : '0 2px 10px rgba(11, 42, 43, 0.1)'
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.span
                          className="text-2xl"
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          {link.icon}
                        </motion.span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{link.name}</h3>
                          <p
                            className="text-sm"
                            style={{
                              color: location.pathname === link.path
                                ? 'rgba(255, 255, 255, 0.8)'
                                : 'rgba(11, 42, 43, 0.7)'
                            }}
                          >
                            {link.description}
                          </p>
                        </div>
                        <motion.svg
                          className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Footer */}
              <motion.div
                className="text-center mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(11, 42, 43, 0.2)' }}
                variants={itemVariants}
              >
                <p className="text-sm font-script" style={{ color: 'rgba(11, 42, 43, 0.7)' }}>
                  ✨ Crafted with passion ✨
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationPopup;
