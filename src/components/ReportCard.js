import React from 'react';
// Link is no longer needed here directly
import './ReportCard.css';

function ReportCard({ report, onCardClick }) { // currentUserId is no longer needed here
  const {
    report_id,
    report_title,
    problem,
    author, // Changed from neighbor
    status,
    report_date,
    canton,
    district_report_districtTodistrict,
    neighborhood,
    street
  } = report || {};

  const problemTypeName = problem?.problem_type?.type_name || 'Tipo no especificado';
  const problemName = problem?.problem_name || 'Problemática no especificada';
  const fullProblemDescription = `${problemTypeName} - ${problemName}`;

  // New logic to determine reporter's name from nested profiles
  const reporterName = author
    ? (author.neighborProfile?.first_name ? `${author.neighborProfile.first_name} ${author.neighborProfile.last_name}` : author.municipalityProfile?.name) || 'Anónimo'
    : 'Anónimo';
  
  const cantonName = canton?.canton_name || 'Cantón no especificado';
  const districtName = district_report_districtTodistrict?.district_name || 'Distrito no especificado';

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    try {
      // Using a simpler approach for date formatting directly, assuming report_date is a valid date string or Date object
      const date = new Date(dateString);
      return date.toLocaleDateString('es-CR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        timeZone: 'UTC' // Important if your dates are stored/handled as UTC
      });
    } catch (e) {
      console.error("Error formatting date in ReportCard:", dateString, e);
      return dateString; 
    }
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(report);
    }
  };

  return (
    <div className="report-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h4 className="report-card-title">{report_title || 'Reporte Sin Título'}</h4>
      <p className="report-card-description"><strong>Problema:</strong> {fullProblemDescription}</p>
      <div className="report-card-details">
        <p><strong>Ubicación:</strong> {`${street || '-'}, ${neighborhood || '-'}, ${districtName}, ${cantonName}`}</p>
        <p><strong>Estado:</strong> <span className={`status status-${(status || 'Desconocido').toLowerCase().replace(' ', '-')}`}>{status || 'Desconocido'}</span></p>
        <p><strong>Reportado por:</strong> {reporterName}</p>
        <p><strong>Fecha:</strong> {formatDate(report_date)}</p>
        {/* ID del Reporte can be shown in the modal if needed */}
      </div>
      {/* Edit button is removed from here and placed in the modal */}
    </div>
  );
}

export default ReportCard; 