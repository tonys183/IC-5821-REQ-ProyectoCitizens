import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './ReportDetailModal.css';

function ReportDetailModal({ report, user, onClose, show, onReportUpdate }) {
  const navigate = useNavigate();
  const [newStatus, setNewStatus] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');
  const currentUserId = user?.id;

  useEffect(() => {
    if (report) {
      setNewStatus(report.status || '');
      setError('');
      setIsUpdating(false);
    }
  }, [report]);

  if (!show || !report) {
    return null;
  }

  const {
    report_id,
    report_title,
    problem,
    author,
    status,
    report_date,
    updated_at,
    canton,
    district_report_districtTodistrict,
    neighborhood,
    street
  } = report;

  const problemTypeName = problem?.problem_type?.type_name || 'Tipo no especificado';
  const problemName = problem?.problem_name || 'Problemática no especificada';
  const fullProblemDescription = `${problemTypeName} - ${problemName}`;

  const reporterName = author
    ? (author.neighborProfile?.first_name ? `${author.neighborProfile.first_name} ${author.neighborProfile.last_name}` : author.municipalityProfile?.name) || 'Anónimo'
    : 'Anónimo';

  const cantonName = canton?.canton_name || 'Cantón no especificado';
  const districtName = district_report_districtTodistrict?.district_name || 'Distrito no especificado';

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('es-CR', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const handleEditClick = () => {
    navigate(`/reportes/${report_id}/editar`);
    onClose();
  };
  
  const handleStatusUpdate = async () => {
    if (newStatus === status) return; // Don't update if status hasn't changed
    
    setIsUpdating(true);
    setError('');
    const token = localStorage.getItem('authToken');

    try {
        const response = await fetch(`/api/reports/${report_id}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ status: newStatus })
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.message || 'Error al actualizar el estado.');
        }
        
        // Call the parent component's handler to update the UI
        onReportUpdate(data.report);
        onClose(); // Close modal on success

    } catch (err) {
        setError(err.message);
    } finally {
        setIsUpdating(false);
    }
  };

  const isOwner = author?.id && currentUserId && author.id === currentUserId;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{report_title}</h3>
          <button onClick={onClose} className="modal-close-button">&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Detalles del Problema</h4>
            <p><strong>Problema:</strong> {fullProblemDescription}</p>
            <p><strong>Ubicación:</strong> {`${street || '-'}, ${neighborhood || '-'}, ${districtName}, ${cantonName}`}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">Estado y Fechas</h4>
            <p><strong>Estado Actual:</strong> <span className={`status status-${(status || '').toLowerCase().replace(' ', '-')}`}>{status}</span></p>
            <p><strong>Fecha de Reporte:</strong> {formatDate(report_date)}</p>
            <p><strong>Última Actualización:</strong> {formatDate(updated_at || report_date)}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">Reportado por</h4>
            <p>{reporterName}</p>
          </div>

          {/* Municipality Status Update Section */}
          {user?.role === 'MUNICIPALITY' && (
            <div className="modal-section status-update-section">
              <h4 className="modal-section-title">Actualizar Estado del Reporte</h4>
              <div className="form-group"> 
                <label htmlFor="status-select">Nuevo Estado</label>
                <div className="status-update-controls">
                  <select 
                      id="status-select"
                      value={newStatus} 
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="status-select"
                      disabled={isUpdating}
                  >
                    <option value="Waiting">En espera</option>
                    <option value="In Progress">En progreso</option>
                    <option value="Resolved">Resuelto</option>
                    <option value="Rejected">Rechazado</option>
                  </select>
                  <button 
                      onClick={handleStatusUpdate} 
                      className="status-update-button"
                      disabled={isUpdating || newStatus === status}
                  >
                    {isUpdating ? 'Actualizando...' : 'Guardar'}
                  </button>
                </div>
              </div>
              {error && <p className="error-message">{error}</p>}
            </div>
          )}

        </div>
        <div className="modal-footer">
          {isOwner && (
            <button onClick={handleEditClick} className="modal-button edit-button">
              Editar mi Reporte
            </button>
          )}
          <p className="modal-report-id">ID del Reporte: {report_id}</p>
        </div>
      </div>
    </div>
  );
}

export default ReportDetailModal; 