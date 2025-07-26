import { useEffect } from 'react';

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