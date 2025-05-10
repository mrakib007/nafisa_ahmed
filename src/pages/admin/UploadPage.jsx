import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import AdminLayout from '../../components/layout/AdminLayout';

// Validation schema
const ArtworkSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title is too short')
    .max(100, 'Title is too long')
    .required('Title is required'),
  category: Yup.string()
    .required('Category is required'),
  description: Yup.string()
    .min(10, 'Description is too short')
    .max(1000, 'Description is too long')
    .required('Description is required'),
  story: Yup.string()
    .min(10, 'Story is too short')
    .max(5000, 'Story is too long')
    .required('Story is required'),
  image: Yup.mixed()
    .required('Image is required')
    .test(
      'fileFormat',
      'Unsupported file format. Use JPG, PNG or WEBP',
      value => value && ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)
    )
    .test(
      'fileSize',
      'File too large. Max size is 5MB',
      value => value && value.size <= 5 * 1024 * 1024
    ),
});

const UploadPage = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Categories for artwork
  const categories = [
    { value: 'digital-illustration', label: 'Digital Illustration' },
    { value: 'concept-art', label: 'Concept Art' },
    { value: 'character-design', label: 'Character Design' },
    { value: 'environment-design', label: 'Environment Design' },
    { value: 'storyboard', label: 'Storyboard' },
    { value: 'traditional-art', label: 'Traditional Art' },
  ];

  // Handle image preview
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue('image', file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // In a real application, you would upload the image and save the data
    console.log('Form values:', values);
    
    // Simulate API call
    setTimeout(() => {
      setUploadSuccess(true);
      resetForm();
      setPreviewUrl(null);
      setSubmitting(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setUploadSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Upload New Artwork</h1>
          <p className="text-gray-400 mb-8">
            Add new artwork to your portfolio with details and story
          </p>
        </motion.div>

        {uploadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-900/30 border border-green-500 text-green-100 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold mb-2">Artwork Uploaded!</h3>
            <p>Your artwork has been successfully uploaded to the portfolio.</p>
          </motion.div>
        )}

        <Formik
          initialValues={{
            title: '',
            category: '',
            description: '',
            story: '',
            image: null,
          }}
          validationSchema={ArtworkSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, touched, errors }) => (
            <Form className="space-y-6 bg-dark-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-white font-medium mb-2">
                    Artwork Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    id="title"
                    className={`input ${
                      touched.title && errors.title ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter artwork title"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-white font-medium mb-2">
                    Category
                  </label>
                  <Field
                    as="select"
                    name="category"
                    id="category"
                    className={`input ${
                      touched.category && errors.category ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-white font-medium mb-2">
                  Short Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  rows="3"
                  className={`input ${
                    touched.description && errors.description ? 'border-red-500' : ''
                  }`}
                  placeholder="Brief description of the artwork"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              <div>
                <label htmlFor="story" className="block text-white font-medium mb-2">
                  Artwork Story
                </label>
                <Field
                  as="textarea"
                  name="story"
                  id="story"
                  rows="6"
                  className={`input ${
                    touched.story && errors.story ? 'border-red-500' : ''
                  }`}
                  placeholder="Tell the story behind this artwork..."
                />
                <ErrorMessage
                  name="story"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-white font-medium mb-2">
                  Artwork Image
                </label>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div
                      className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary-500 transition-colors ${
                        touched.image && errors.image ? 'border-red-500' : 'border-dark-600'
                      }`}
                      onClick={() => document.getElementById('image').click()}
                    >
                      <input
                        type="file"
                        id="image"
                        name="image"
                        className="hidden"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(event) => handleImageChange(event, setFieldValue)}
                      />
                      <div className="py-8">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="mt-2 text-sm text-gray-400">
                          Click to upload or drag and drop
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          JPG, PNG, WEBP up to 5MB
                        </p>
                      </div>
                    </div>
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="text-red-500 mt-1 text-sm"
                    />
                  </div>

                  {previewUrl && (
                    <div className="flex-1">
                      <div className="rounded-lg overflow-hidden border border-dark-600">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Uploading...' : 'Upload Artwork'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AdminLayout>
  );
};

export default UploadPage;
