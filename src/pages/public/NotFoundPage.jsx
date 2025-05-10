import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <section className="py-20 min-h-[80vh] flex items-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary">
              Return to Homepage
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFoundPage;
