import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavigationPopup from '../common/NavigationPopup';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Check if we're on the home page to remove top padding
  const isHomePage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationPopup />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
