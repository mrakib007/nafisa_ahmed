import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Hook to update document title
export const usePageTitle = (title) => {
  useEffect(() => {
    // Update document title immediately
    document.title = title ? `Nafisa Hamed | ${title}` : 'Nafisa Hamed';
    
    return () => {
      // Reset to base title when component unmounts
      document.title = 'Nafisa Hamed';
    };
  }, [title]);
};

// Component to render Helmet
export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `Nafisa Hamed | ${title}` : 'Nafisa Hamed'}</title>
    </Helmet>
  );
}; 