import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { FaTimes } from 'react-icons/fa';

function AlertFormPage() {
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
          if (!response.ok) throw new Error('Failed to fetch alerts');
          const alerts = await response.json();
          const currentAlert = alerts.find(a => a.id === parseInt(alertId));
          if (!currentAlert) throw new Error('Alert not found');
          
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
        throw new Error(data.message || `Failed to ${isEditing ? 'update' : 'create'} alert`);
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
    return <p>Acceso denegado.</p>; // Or a loading spinner while redirecting
  }

  return (
    <div className="report-form-container"> {/* Reusing styles from report form */}
      <div className="form-header">
        <h2>{isEditing ? 'Editar Alerta' : 'Crear Nueva Alerta'}</h2>
        <button onClick={handleCancel} className="close-button" aria-label="Cerrar">
          <FaTimes />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="title">Título</label>
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
          <label htmlFor="content">Contenido</label>
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
            Cancelar
          </button>
          <button type="submit" disabled={isLoading} className="submit-button">
            {isLoading ? 'Guardando...' : (isEditing ? 'Guardar Cambios' : 'Crear Alerta')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AlertFormPage; 