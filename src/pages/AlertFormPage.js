import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function AlertFormPage() {
  const { t } = useTranslation();
  const { alertId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Determine if we are in "edit" mode
    if (alertId) {
      setIsEditing(true);
      setIsLoading(true);
      // Fetch the existing alert data
      const fetchAlert = async () => {
        try {
          // Note: No token needed for public GET, but good practice if it were secured
          const response = await fetch(`/api/alerts`); 
          if (!response.ok) throw new Error(t('alertForm.errors.fetchFailed'));
          const alerts = await response.json();
          const currentAlert = alerts.find(a => a.id === parseInt(alertId));
          if (!currentAlert) throw new Error(t('alertForm.errors.notFound'));
          
          setFormData({
            title: currentAlert.title,
            content: currentAlert.content,
          });
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchAlert();
    }
  }, [alertId]);
  
  // Redirect if user is not from municipality
  useEffect(() => {
    if (user && user.role !== 'MUNICIPALITY') {
      navigate('/alertas');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const token = localStorage.getItem('authToken');
    const url = isEditing ? `/api/alerts/${alertId}` : '/api/alerts';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || t(isEditing ? 'alertForm.errors.updateFailed' : 'alertForm.errors.createFailed'));
      }
      navigate('/alertas'); // Redirect to alerts list on success
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/alertas');
  };

  if (!user || user.role !== 'MUNICIPALITY') {
    return <p>{t('alertForm.accessDenied')}</p>; // Or a loading spinner while redirecting
  }

  return (
    <div className="report-form-container"> {/* Reusing styles from report form */}
      <div className="form-header">
        <h2>{isEditing ? t('alertForm.titleEdit') : t('alertForm.titleCreate')}</h2>
        <button onClick={handleCancel} className="close-button" aria-label={t('alertForm.close')}>
          <FaTimes />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="title">{t('alertForm.labels.title')}</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">{t('alertForm.labels.content')}</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            disabled={isLoading}
            rows="10"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-button">
            {t('alertForm.buttons.cancel')}
          </button>
          <button type="submit" disabled={isLoading} className="submit-button">
            {isLoading ? t('alertForm.buttons.saving') : (isEditing ? t('alertForm.buttons.saveChanges') : t('alertForm.buttons.createAlert'))}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AlertFormPage; 