import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './ReportDetailModal.css';

function ReportDetailModal({ report, currentUserId, onClose, show }) {
  const navigate = useNavigate();

  if (!show || !report) {
    return null;
  }

  const {
    report_id,
    report_title,
    problem,
    neighbor,
    status,
    report_date,
    canton,
    district_report_districtTodistrict,
    neighborhood: reportNeighborhood, // Renamed to avoid conflict if 'neighborhood' is used as a variable
    street
  } = report;

  const problemTypeName = problem?.problem_type?.type_name || 'Tipo no especificado';
  const problemName = problem?.problem_name || 'Problemática no especificada';
  const fullProblemDescription = `${problemTypeName} - ${problemName}`;

  const reporterName = neighbor ? `${neighbor.first_name || ''} ${neighbor.last_name || ''}`.trim() : 'Anónimo';
  const cantonName = canton?.canton_name || 'Cantón no especificado';
  const districtName = district_report_districtTodistrict?.district_name || 'Distrito no especificado';

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-CR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC' // Assuming dates are stored in UTC or should be displayed as if they are
      });
    } catch (e) {
      console.error("Error formatting date in Modal:", dateString, e);
      return dateString;
    }
  };

  const handleEdit = () => {
    navigate(`/reportes/${report_id}/editar`);
    onClose(); // Close modal after navigating
  };

  const isOwner = neighbor?.identification && currentUserId && neighbor.identification === currentUserId;

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Close on overlay click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside content */}
        <button className="modal-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h3 className="modal-title">{report_title || 'Detalle del Reporte'}</h3>
        
        <div className="modal-section">
          <div className="modal-field">
            <strong>Estado:</strong> <span className={`status status-${(status || 'Desconocido').toLowerCase().replace(' ', '-')}`}>{status || 'Desconocido'}</span>
          </div>
          <div className="modal-field">
            <strong>Fecha:</strong> {formatDate(report_date)}
          </div>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Problema</h4>
          <p>{fullProblemDescription}</p>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Ubicación</h4>
          <p>{`${street || '-'}`}</p>
          <p>{`${reportNeighborhood || '-'}`}</p>
          <p>{`${districtName}, ${cantonName}`}</p>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Reportado por</h4>
          <p>{reporterName}</p>
        </div>

        {report_id && <p className="modal-report-id">ID del Reporte: {report_id}</p>}

        {isOwner && (
          <div className="modal-actions">
            <button className="edit-button" onClick={handleEdit}>
              Editar Reporte
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportDetailModal; 