import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Don't interact with localStorage for 'currentUser' while the context is still loading its initial state.
    if (isLoading) {
      return;
    }
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      // Only remove currentUser from localStorage if user becomes null *after* initial loading is complete.
      // This is typically after a logout action.
      localStorage.removeItem('currentUser');
    }
    // We also need to manage isAuthenticated based on user presence AND token
    // This effect primarily syncs user to localStorage, not auth state directly from user object.
  }, [user, isLoading]); // Added isLoading to the dependency array

  useEffect(() => {
    const rawStoredUser = localStorage.getItem('currentUser');
    const token = localStorage.getItem('authToken');
    console.log('AuthContext Init: rawStoredUser from localStorage:', rawStoredUser);
    console.log('AuthContext Init: token from localStorage:', token);

    if (token) {
      setIsAuthenticated(true);
      if (rawStoredUser && rawStoredUser !== 'undefined') { // Check if it's not null, empty, or the string "undefined"
        try {
          const parsedUser = JSON.parse(rawStoredUser);
          setUser(parsedUser);
          console.log('AuthContext Init: Successfully parsed and set user:', parsedUser);
        } catch (e) {
          console.error("AuthContext Init: Error parsing stored user:", e);
          localStorage.removeItem('currentUser');
        }
      } else {
        console.warn('AuthContext Init: Token found but no valid currentUser data in localStorage. rawStoredUser:', rawStoredUser);
      }
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  const login = (loginData) => {
    if (loginData && loginData.user && loginData.token) {
      console.log('AuthContext Login: User object to be stored:', loginData.user);
      const stringifiedUser = JSON.stringify(loginData.user);
      console.log('AuthContext Login: Stringified user for localStorage:', stringifiedUser);
      localStorage.setItem('currentUser', stringifiedUser);
      localStorage.setItem('authToken', loginData.token);
      setUser(loginData.user);
      setIsAuthenticated(true);
      console.log('AuthContext Login: User logged in, token and user stored.');
    } else {
      console.error('AuthContext Login: Login data is invalid. User or token missing.', loginData);
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken'); // Remove token on logout
    setUser(null);
    setIsAuthenticated(false);
    console.log('AuthContext: User logged out, token removed.');
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
