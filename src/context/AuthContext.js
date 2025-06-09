import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('currentUser');

      if (token && storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (loginData) => {
    if (loginData && loginData.user && loginData.token) {
      localStorage.setItem('currentUser', JSON.stringify(loginData.user));
      localStorage.setItem('authToken', loginData.token);
      setUser(loginData.user);
      setIsAuthenticated(true);
    } else {
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
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
