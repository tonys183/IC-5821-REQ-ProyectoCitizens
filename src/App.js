import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import ReportFormPage from './pages/ReportFormPage.js';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import MunicipalityRegistrationPage from './pages/MunicipalityRegistrationPage.js';
import ContactPage from './pages/ContactPage.js';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const mainContentClass = location.pathname === '/reportes' ? 'main-content no-padding' : 'main-content';

  return (
    <div className="App">
      <Sidebar />
      <main className={mainContentClass}>
        {children}
      </main>
    </div>
  );
};

const AuthLayout = ({ children }) => (
  <div className="auth-layout-container">
    {children}
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/login" element={<PublicRoute><AuthLayout><LoginPage /></AuthLayout></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><AuthLayout><RegistrationPage /></AuthLayout></PublicRoute>} />
        <Route path="/registro-municipalidad" element={<PublicRoute><AuthLayout><MunicipalityRegistrationPage /></AuthLayout></PublicRoute>} />

        {}
        <Route path="/dashboard" element={<ProtectedRoute><MainLayout><DashboardPage /></MainLayout></ProtectedRoute>} />
        <Route path="/reportes" element={<ProtectedRoute><MainLayout><ReportListPage /></MainLayout></ProtectedRoute>} />
        <Route path="/reportes/nuevo" element={<ProtectedRoute><MainLayout><ReportFormPage /></MainLayout></ProtectedRoute>} />
        <Route path="/reportes/:reportId/editar" element={<ProtectedRoute><MainLayout><EditReportPage /></MainLayout></ProtectedRoute>} />
        <Route path="/alertas" element={<ProtectedRoute><MainLayout><AlertsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/alertas/nueva" element={<ProtectedRoute><MainLayout><AlertFormPage /></MainLayout></ProtectedRoute>} />
        <Route path="/alertas/:alertId/editar" element={<ProtectedRoute><MainLayout><AlertFormPage /></MainLayout></ProtectedRoute>} />
        <Route path="/configuracion" element={<ProtectedRoute><MainLayout><SettingsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/perfil" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
        <Route path="/contacto" element={<ProtectedRoute><MainLayout><ContactPage /></MainLayout></ProtectedRoute>} />
        
        {}
        <Route 
          path="/"
          element={ <NavigateToDashboardOrLogin /> }
        />

        {}
        {}
        <Route path="*" element={<Navigate to="/dashboard" replace />} /> 
      </Routes>
    </Router>
  );
}

const NavigateToDashboardOrLogin = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>; 
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
};

export default App; 