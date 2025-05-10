import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .min(5, 'Subject is too short')
    .max(100, 'Subject is too long')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message is too short')
    .max(1000, 'Message is too long')
    .required('Message is required'),
});

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // In a real application, you would send the form data to a server
    console.log('Form values:', values);
    
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      resetForm();
      setSubmitting(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary-900/30 border border-primary-500 text-primary-100 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </motion.div>
      ) : (
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`input ${
                    touched.name && errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
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
                  placeholder="Your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  className={`input ${
                    touched.subject && errors.subject ? 'border-red-500' : ''
                  }`}
                  placeholder="Message subject"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  rows="6"
                  className={`input ${
                    touched.message && errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Your message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
