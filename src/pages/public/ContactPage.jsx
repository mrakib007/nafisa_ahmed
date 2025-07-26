import { motion } from 'framer-motion';
import MainLayout from '../../components/layout/MainLayout';
import ContactForm from '../../components/forms/ContactForm';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import { usePageTitle, PageTitle } from '../../hooks/usePageTitle.jsx';

const ContactPage = () => {
  usePageTitle('Contact');
  
  // Contact information
  const contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      content: 'contact@artistportfolio.com',
      link: 'mailto:contact@artistportfolio.com',
    },
    {
      icon: 'location',
      title: 'Location',
      content: 'New York City, USA',
      link: 'https://maps.google.com/?q=New+York+City',
    },
    {
      icon: 'social',
      title: 'Social Media',
      content: 'Instagram, Twitter, Behance',
      link: 'https://instagram.com',
    },
  ];

  // Icon components
  const IconComponent = ({ icon }) => {
    switch (icon) {
      case 'email':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'social':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageTitle title="Contact" />
      <MainLayout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
              Fill out the form below or reach out through any of the provided contact methods.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <SlideIn key={item.title} direction="up" delay={index * 0.1}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-primary-700 rounded-lg p-6 text-center hover:bg-primary-800 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-900 text-primary-400 mb-4">
                    <IconComponent icon={item.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.content}</p>
                </a>
              </SlideIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SlideIn direction="right">
              <div className="bg-primary-700 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </SlideIn>

            <SlideIn direction="left">
              <div className="bg-primary-700 rounded-lg overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620293533561!5m2!1sen!2s"
                  className="w-full h-full min-h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary-400">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are answers to some common questions about my work process and services.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <SlideIn direction="up">
              <div className="space-y-6">
                <div className="bg-dark-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">What is your typical process for working with new clients?</h3>
                  <p className="text-gray-400">
                    My process typically begins with an initial consultation to understand your vision and requirements.
                    I then create concept sketches, refine based on your feedback, and deliver the final artwork in your
                    preferred format.
                  </p>
                </div>

                <div className="bg-dark-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">How long does a typical project take to complete?</h3>
                  <p className="text-gray-400">
                    Project timelines vary depending on complexity and scope. A single illustration might take 1-2 weeks,
                    while a comprehensive concept art package could take several months. I'll provide a detailed timeline
                    during our initial discussion.
                  </p>
                </div>

                <div className="bg-dark-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Do you take on commission work?</h3>
                  <p className="text-gray-400">
                    Yes, I regularly accept commission work for both personal and commercial projects. Please reach out
                    through the contact form with details about your project, and I'll get back to you to discuss possibilities.
                  </p>
                </div>

                <div className="bg-primary-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">What file formats do you deliver?</h3>
                  <p className="text-gray-400">
                    I typically deliver artwork in high-resolution digital formats including PSD, PNG, JPEG, and PDF.
                    For print projects, I ensure all files meet professional print standards with appropriate resolution and color profiles.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </MainLayout>
    </>
  );
};

export default ContactPage;
