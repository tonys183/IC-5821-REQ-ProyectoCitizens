import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import AlertCard from '../components/AlertCard.js'; // Import the real component
import './AlertsPage.css'; // We will create this CSS file

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch('/api/alerts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAlerts(data);
      } catch (err) {
        setError(err.message || "Error al cargar las alertas.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAlerts();
  }, []);

  const handleDelete = async (alertId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta alerta?')) return;
    
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch(`/api/alerts/${alertId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.status === 204) {
            // Remove the alert from the state to update the UI
            setAlerts(alerts.filter(alert => alert.id !== alertId));
        } else {
            const data = await response.json();
            throw new Error(data.message || 'Error al eliminar la alerta');
        }
    } catch (err) {
        setError(err.message);
    }
  };

  return (
    <div className="alerts-page-container">
      <div className="alerts-header">
        <h1>Alertas de la Municipalidad</h1>
        {user?.role === 'MUNICIPALITY' && (
          <Link to="/alertas/nueva" className="create-alert-button">
            Crear Nueva Alerta
          </Link>
        )}
      </div>

      {isLoading && <p>Cargando alertas...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {!isLoading && !error && (
        <div className="alerts-list">
          {alerts.length > 0 ? (
            alerts.map(alert => (
              <AlertCard 
                key={alert.id} 
                alert={alert} 
                userRole={user?.role}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>No hay alertas disponibles en este momento.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AlertsPage; 