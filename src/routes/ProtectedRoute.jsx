import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  // If still loading, show nothing
  if (loading) {
    return null;
  }

  // If not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/admin" replace />;
  }

  // If authenticated, show the protected content
  return children;
}

export default ProtectedRoute;
