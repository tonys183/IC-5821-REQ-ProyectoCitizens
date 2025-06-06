import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import ReportFormPage from './pages/ReportFormPage.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.js';
import LoginPage from './pages/LoginPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
import DashboardPage from './pages/DashboardPage.js';
import ReportListPage from './pages/ReportListPage.js';
import SettingsPage from './pages/SettingsPage.js';
import ProfilePage from './pages/ProfilePage.js';
import AlertsPage from './pages/AlertsPage.js';
import EditReportPage from './pages/EditReportPage.js';
import AlertFormPage from './pages/AlertFormPage.js';

// Layout for authenticated users (with Sidebar)
const MainLayout = ({ children }) => (
  <div className="App">
    <Sidebar />
    <main className="main-content">
      {children}
    </main>
  </div>
);

// Layout for public pages (Login, Register - no Sidebar)
const AuthLayout = ({ children }) => (
  <div className="auth-layout-container">
    {children}
  </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route Component (redirects if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - use AuthLayout */}
        <Route path="/login" element={<PublicRoute><AuthLayout><LoginPage /></AuthLayout></PublicRoute>} />
        <Route path="/registrarse" element={<PublicRoute><AuthLayout><RegistrationPage /></AuthLayout></PublicRoute>} />

        {/* Protected Routes - use MainLayout */}
        <Route path="/dashboard" element={<ProtectedRoute><MainLayout><DashboardPage /></MainLayout></ProtectedRoute>} />
        <Route path="/reportes" element={<ProtectedRoute><MainLayout><ReportListPage /></MainLayout></ProtectedRoute>} />
        <Route path="/reportes/nuevo" element={<ProtectedRoute><MainLayout><ReportFormPage /></MainLayout></ProtectedRoute>} />
        <Route path="/reportes/:reportId/editar" element={<ProtectedRoute><MainLayout><EditReportPage /></MainLayout></ProtectedRoute>} />
        <Route path="/alertas" element={<ProtectedRoute><MainLayout><AlertsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/alertas/nueva" element={<ProtectedRoute><MainLayout><AlertFormPage /></MainLayout></ProtectedRoute>} />
        <Route path="/alertas/:alertId/editar" element={<ProtectedRoute><MainLayout><AlertFormPage /></MainLayout></ProtectedRoute>} />
        <Route path="/configuracion" element={<ProtectedRoute><MainLayout><SettingsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/perfil" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
        
        {/* Redirect root based on auth state */}
        <Route 
          path="/"
          element={ <NavigateToDashboardOrLogin /> }
        />

        {/* Fallback for any other route can be a 404 page or redirect */}
        {/* For now, redirecting to dashboard, but a 404 component would be better for unkown paths */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} /> 
      </Routes>
    </Router>
  );
}

// Helper component to decide initial redirect
const NavigateToDashboardOrLogin = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>; // Or your global loader
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
};

export default App; 