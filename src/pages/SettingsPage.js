import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import './SettingsPage.css'; // We'll create this CSS file later

function SettingsPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="settings-page-container">
      <h2 className="settings-title">Configuración</h2>
      
      <div className="settings-section">
        <h3 className="settings-section-title">Cuenta</h3>
        <ul className="settings-options-list">
          <li className="settings-option-item">
            <button onClick={handleLogout} className="settings-logout-button">
              Cerrar Sesión
            </button>
          </li>
          {/* Add more account-related settings options here */}
          {/* 
          <li className="settings-option-item">
            <button className="settings-action-button">Cambiar Contraseña</button>
          </li>
          */}
        </ul>
      </div>

      {/* Example of another settings section for future use */}
      {/* 
      <div className="settings-section">
        <h3 className="settings-section-title">Notificaciones</h3>
        <ul className="settings-options-list">
          <li className="settings-option-item">
            <span>Preferencias de Email</span>
            <button className="settings-action-button">Gestionar</button>
          </li>
        </ul>
      </div>
      */}

      {/* Add more sections as needed */}
    </div>
  );
}

export default SettingsPage; 