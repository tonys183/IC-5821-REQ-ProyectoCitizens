import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import AlertCard from '../components/AlertCard.js';
import { useTranslation } from 'react-i18next';
import './AlertsPage.css';

function AlertsPage() {
  const { t } = useTranslation();
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
        setError(err.message || t('alertsPage.errors.load'));
      } finally {
        setIsLoading(false);
      }
    };
    fetchAlerts();
  }, [t]);

  const handleDelete = async (alertId) => {
    if (!window.confirm(t('alertsPage.confirmDelete'))) return;
    
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch(`/api/alerts/${alertId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.status === 204) {
            setAlerts(alerts.filter(alert => alert.id !== alertId));
        } else {
            const data = await response.json();
            throw new Error(data.message || t('alertsPage.errors.delete'));
        }
    } catch (err) {
        setError(err.message);
    }
  };

  return (
    <div className="alerts-page-container">
      <div className="alerts-header">
        <h1>{t('alertsPage.title')}</h1>
        {user?.role === 'MUNICIPALITY' && (
          <Link to="/alertas/nueva" className="create-alert-button">
            {t('alertsPage.createButton')}
          </Link>
        )}
      </div>

      {isLoading && <p>{t('alertsPage.loading')}</p>}
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
            <p>{t('alertsPage.noAlerts')}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AlertsPage; 