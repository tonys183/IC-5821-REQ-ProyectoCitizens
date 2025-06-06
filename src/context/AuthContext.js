import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // This effect synchronizes the user state to localStorage
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [user, isLoading]);

  // This effect initializes the user state from localStorage on app load
  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('currentUser');

      if (token && storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        console.log('AuthContext Init: Session restored for user:', parsedUser);
      }
    } catch (error) {
      console.error("AuthContext Init: Error restoring session", error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (loginData) => {
    if (loginData && loginData.user && loginData.token) {
      // The user object from the backend is now { id, email, role, profile: {...} }
      // This is the object we will store and provide in the context
      localStorage.setItem('currentUser', JSON.stringify(loginData.user));
      localStorage.setItem('authToken', loginData.token);
      setUser(loginData.user);
      setIsAuthenticated(true);
      console.log('AuthContext Login: User logged in, session stored.', loginData.user);
    } else {
      console.error('AuthContext Login: Login data is invalid.', loginData);
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
    console.log('AuthContext: User logged out, session cleared.');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
