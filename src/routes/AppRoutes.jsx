import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

// Public pages
import HomePage from '../pages/public/HomePage';
import PortfolioPage from '../pages/public/PortfolioPage';
import ArtworkDetailPage from '../pages/public/ArtworkDetailPage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import NotFoundPage from '../pages/public/NotFoundPage';

// Admin pages
import AdminPage from '../pages/admin/AdminPage';
import UploadPage from '../pages/admin/UploadPage';

function AppRoutes() {
  const { currentUser, isAdmin } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/:id" element={<ArtworkDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/upload" element={
        <ProtectedRoute>
          <UploadPage />
        </ProtectedRoute>
      } />

      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
