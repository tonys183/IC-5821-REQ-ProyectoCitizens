import React from 'react';
import { useTranslation } from 'react-i18next';
// Link is no longer needed here directly
import './ReportCard.css';

function ReportCard({ report, onCardClick }) { // currentUserId is no longer needed here
  const { t } = useTranslation();
  const {
    report_title,
    status,
    updated_at,
    problem,
    author, // Changed from neighbor
    canton,
    district_report_districtTodistrict,
    neighborhood,
    street
  } = report || {};

  const problemTypeName = problem?.problem_type?.type_name || t('reportCard.unspecified');
  const problemName = problem?.problem_name || t('reportCard.unspecified');
  const fullProblemDescription = `${problemTypeName} - ${problemName}`;

  // New logic to determine reporter's name from nested profiles
  const reporterName = author
    ? (author.neighborProfile?.first_name ? `${author.neighborProfile.first_name} ${author.neighborProfile.last_name}` : author.municipalityProfile?.name) || t('reportCard.anonymous')
    : t('reportCard.anonymous');
  
  const cantonName = canton?.canton_name || t('reportCard.unspecified');
  const districtName = district_report_districtTodistrict?.district_name || t('reportCard.unspecified');

  const getStatusKey = (statusString) => {
    switch(statusString) {
      case 'Waiting': return 'reportList.status.waiting';
      case 'In Progress': return 'reportList.status.inProgress';
      case 'Resolved': return 'reportList.status.resolved';
      default: return 'reportCard.unspecified';
    }
  };

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
      <p className="report-card-description"><strong>{t('reportCard.problem')}:</strong> {fullProblemDescription}</p>
      <div className="report-card-details">
        <p><strong>{t('reportCard.location')}:</strong> {`${street || '-'}, ${neighborhood || '-'}, ${districtName}, ${cantonName}`}</p>
        <p><strong>{t('reportCard.status')}:</strong> <span className={`status status-${(status || 'Desconocido').toLowerCase().replace(/\s+/g, '-')}`}>{t(getStatusKey(status))}</span></p>
        <p><strong>{t('reportCard.reportedBy')}:</strong> {reporterName}</p>
        <p><strong>{t('reportCard.lastUpdated')}:</strong> {formatDate(updated_at)}</p>
        {/* ID del Reporte can be shown in the modal if needed */}
      </div>
      {/* Edit button is removed from here and placed in the modal */}
    </div>
  );
}

export default ReportCard; 