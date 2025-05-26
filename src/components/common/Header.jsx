import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, isAdmin, logout } = useAuth();
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Admin links
  const adminLinks = [
    { name: 'Admin', path: '/admin' },
    { name: 'Upload', path: '/admin/upload' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
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

        {/* Desktop Navigation - only show on non-home pages */}
        {!isHomePage && (
          <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                to={link.path}
                className={`text-lg transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-400 font-medium'
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Admin links and login button are hidden from the main navigation */}
          </nav>
        )}

        {/* Mobile Menu Button - only show on non-home pages */}
        {!isHomePage && (
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu - only show on non-home pages */}
      {!isHomePage && (
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4 bg-dark-800">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-400 font-medium'
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Admin links and login button are hidden from the mobile menu */}
          </nav>
        </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
