import React from 'react';
import './ReportCard.css'; // Make sure this CSS file exists or create it

function ReportCard({ report }) {
  // Destructure with safe defaults for nested properties
  const { 
    title, // Assuming reports might have a direct title, otherwise it comes from problem type
    problem,
    neighbor,
    status,
    creation_date,
    update_date
  } = report || {};

  const problemType = problem?.problem_type?.name || 'Tipo no especificado';
  const description = problem?.description || 'Sin descripción.';
  const reporterName = neighbor ? `${neighbor.first_name || ''} ${neighbor.last_name || ''}`.trim() : 'Anónimo';
  const reporterEmail = neighbor?.email || '-';

  // Format dates (simple formatting)
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (e) {
      return dateString; // Return original if parsing fails
    }
  };

  return (
    <div className="report-card">
      <h4 className="report-card-title">{title || problemType}</h4>
      <p className="report-card-description">{description}</p>
      <div className="report-card-details">
        <p><strong>Estado:</strong> {status || 'No especificado'}</p>
        <p><strong>Reportado por:</strong> {reporterName} ({reporterEmail})</p>
        <p><strong>Fecha Creación:</strong> {formatDate(creation_date)}</p>
        {update_date && <p><strong>Última Actualización:</strong> {formatDate(update_date)}</p>}
      </div>
      {/* Future: Add actions like 'View Details', 'Edit', 'Delete' based on user role */}
    </div>
  );
}

export default ReportCard; 