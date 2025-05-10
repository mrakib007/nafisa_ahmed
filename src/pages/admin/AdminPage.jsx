import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import MainLayout from '../../components/layout/MainLayout';

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const AdminPage = () => {
  const [error, setError] = useState('');
  const { currentUser, login, isAdmin } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in as admin
  useEffect(() => {
    if (currentUser && isAdmin()) {
      navigate('/admin/upload');
    }
  }, [currentUser, isAdmin, navigate]);

  // Handle login
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setError('');
      await login(values.email, values.password);
      navigate('/admin/upload');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
      console.error('Login error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-20 min-h-[80vh] flex items-center">
        <div className="container-custom max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 rounded-lg shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
              <p className="text-gray-400">
                Enter your credentials to access the admin area
              </p>
            </div>

            {error && (
              <div className="bg-red-900/30 border border-red-500 text-red-100 rounded-lg p-4 mb-6">
                {error}
              </div>
            )}

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`input ${
                        touched.email && errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="admin@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 mt-1 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-white font-medium mb-2">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`input ${
                        touched.password && errors.password ? 'border-red-500' : ''
                      }`}
                      placeholder="••••••••"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 mt-1 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </button>
                </Form>
              )}
            </Formik>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                For demo purposes, use:
                <br />
                Email: admin@example.com
                <br />
                Password: password123
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdminPage;
