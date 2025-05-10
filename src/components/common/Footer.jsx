import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Behance', url: 'https://behance.net', icon: 'behance' },
  ];

  // Footer links
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Social media icons
  const SocialIcon = ({ icon }) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.205.557 1.975 0 .623-.12 1.161-.359 1.612a3.144 3.144 0 01-.974 1.114c-.408.288-.891.5-1.443.641a6.974 6.974 0 01-1.747.206H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 00-.417-.428 1.683 1.683 0 00-.597-.215 3.609 3.609 0 00-.697-.061H4.71v2.875h2.742zm.151 5.239c.267 0 .521-.023.76-.077.241-.052.455-.136.637-.261.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H4.71v3.39h2.893zm8.565-8.823c.546 0 1.018.059 1.431.167.407.108.743.272 1.003.48.253.22.449.497.578.826.13.329.196.724.196 1.185h-6.361c0 .637.169 1.168.495 1.59.329.42.875.634 1.634.634.351 0 .676-.05.967-.152.294-.102.563-.254.804-.459l.917 1.145c-.367.34-.821.593-1.359.757a5.511 5.511 0 01-1.636.248c-.708 0-1.328-.107-1.85-.322a3.766 3.766 0 01-1.337-.904 3.783 3.783 0 01-.811-1.392c-.187-.536-.274-1.125-.274-1.765 0-.622.1-1.194.296-1.723.193-.526.476-.983.847-1.368.37-.385.825-.684 1.364-.904.536-.216 1.142-.324 1.815-.324zm.033 1.59c-.673 0-1.199.17-1.581.512-.38.339-.613.806-.697 1.403h4.361c0-.5-.142-.921-.428-1.264-.286-.339-.725-.515-1.318-.651h-.337zm8.895-3.911c.354 0 .704.018 1.045.051.34.037.677.103 1.003.206v1.877c-.234-.103-.497-.182-.779-.236a4.512 4.512 0 00-.811-.079c-.533 0-.921.119-1.17.356-.249.239-.371.585-.371 1.038v.517h2.854v1.696h-2.854v6.189h-2.173v-6.189H19.3v-1.696h1.503v-.465c0-.519.088-.97.263-1.353.178-.385.429-.7.752-.951.323-.249.712-.432 1.175-.55.461-.12.979-.178 1.555-.178z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark-900 pt-16 pb-8">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="text-3xl font-serif font-bold text-white mb-4 inline-block">
              Artist<span className="text-primary-400">Portfolio</span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              With a passion deeply rooted in fine arts and a professional journey spanning imaginative digital illustration, 
              dynamic concept art, and compelling storytelling, I transform ideas into vivid visual worlds.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Email: <a href="mailto:contact@artistportfolio.com" className="text-primary-400 hover:text-primary-300">contact@artistportfolio.com</a>
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-dark-700 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Artist Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
