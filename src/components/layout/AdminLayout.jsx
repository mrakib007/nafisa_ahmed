import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import NavigationPopup from '../common/NavigationPopup';

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation();
  const { currentUser, isAdmin } = useAuth();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Redirect if not admin
  useEffect(() => {
    if (currentUser && !isAdmin()) {
      navigate('/');
    }
  }, [currentUser, isAdmin, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationPopup />
      <main className="flex-grow bg-amber-900">
        <div className="container-custom py-8">
          {children}
        </div>
      </main>
      <div className="bg-amber-800 py-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Artist Portfolio Admin. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AdminLayout;
