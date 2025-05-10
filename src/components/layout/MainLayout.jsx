import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
