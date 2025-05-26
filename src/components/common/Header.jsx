import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-amber-800/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      } ${isHomePage ? 'hidden' : ''}`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo - only show on non-home pages */}
        {!isHomePage && (
          <Link to="/" className="text-2xl font-serif font-bold text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Artist<span className="text-primary-400">Portfolio</span>
            </motion.div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
