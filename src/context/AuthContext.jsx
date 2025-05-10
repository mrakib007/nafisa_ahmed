import { createContext, useContext, useState, useEffect } from 'react';

// Create the auth context
const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock login function (replace with Firebase auth in production)
  function login(email, password) {
    return new Promise((resolve, reject) => {
      // For demo purposes, accept any email/password
      // In production, use Firebase authentication
      if (email && password) {
        const user = { email, isAdmin: email === 'admin@example.com' };
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    });
  }

  // Mock logout function
  function logout() {
    return new Promise((resolve) => {
      setCurrentUser(null);
      localStorage.removeItem('user');
      resolve();
    });
  }

  // Check if user is admin
  function isAdmin() {
    return currentUser?.isAdmin === true;
  }

  // Load user from localStorage on initial render
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Context value
  const value = {
    currentUser,
    login,
    logout,
    isAdmin,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
