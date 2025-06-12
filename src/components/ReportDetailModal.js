import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReports } from '../context/ReportContext.js';
import './ReportDetailModal.css';

function ReportDetailModal({ report, user, onClose, show }) {
  const { t, i18n } = useTranslation();
  const { updateReportStatus } = useReports();
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

  const problemTypeName = problem?.problem_type?.type_name || t('reportCard.unspecified');
  const problemName = problem?.problem_name || t('reportCard.unspecified');
  const fullProblemDescription = `${problemTypeName} - ${problemName}`;

  const reporterName = author
    ? (author.neighborProfile?.first_name ? `${author.neighborProfile.first_name} ${author.neighborProfile.last_name}` : author.municipalityProfile?.name) || t('reportCard.anonymous')
    : t('reportCard.anonymous');

  const cantonName = canton?.canton_name || t('reportCard.unspecified');
  const districtName = district_report_districtTodistrict?.district_name || t('reportCard.unspecified');

  const getStatusKey = (statusString) => {
    switch(statusString) {
      case 'Waiting':
      case 'En espera':
        return 'reportList.status.waiting';
      case 'In Progress':
      case 'En progreso':
        return 'reportList.status.inProgress';
      case 'Resolved':
      case 'Completado':
        return 'reportList.status.resolved';
      default: 
        return 'reportCard.unspecified';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString(i18n.language, {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const handleEditClick = () => {
    navigate(`/reportes/${report_id}/editar`);
    onClose();
  };
  
  const handleStatusUpdate = async () => {
    if (newStatus === status) return;
    
    setIsUpdating(true);
    setError('');

    try {
      await updateReportStatus(report_id, newStatus);
      const updatedReportFromContext = { ...report, status: newStatus };
      onClose();

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
            <h4 className="modal-section-title">{t('reportModal.problemDetails')}</h4>
            <p><strong>{t('reportModal.problem')}:</strong> {fullProblemDescription}</p>
            <p><strong>{t('reportModal.location')}:</strong> {`${street || '-'}, ${neighborhood || '-'}, ${districtName}, ${cantonName}`}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">{t('reportModal.statusAndDates')}</h4>
            <p><strong>{t('reportModal.currentStatus')}:</strong> <span className={`status status-${(status || 'desconocido').toLowerCase().replace(' ', '-')}`}>{t(getStatusKey(status))}</span></p>
            <p><strong>{t('reportModal.reportDate')}:</strong> {formatDate(report_date)}</p>
            <p><strong>{t('reportModal.lastUpdated')}:</strong> {formatDate(updated_at || report_date)}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">{t('reportModal.reportedBy')}</h4>
            <p>{reporterName}</p>
          </div>

          {}
          {user?.role === 'MUNICIPALITY' && (
            <div className="modal-section status-update-section">
              <h4 className="modal-section-title">{t('reportModal.updateStatusTitle')}</h4>
              <div className="form-group"> 
                <label htmlFor="status-select">{t('reportModal.newStatus')}</label>
                <div className="status-update-controls">
                  <select 
                      id="status-select"
                      value={newStatus} 
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="status-select"
                      disabled={isUpdating}
                  >
                    <option value="En espera">{t('reportList.status.waiting')}</option>
                    <option value="En progreso">{t('reportList.status.inProgress')}</option>
                    <option value="Completado">{t('reportList.status.resolved')}</option>
                  </select>
                  <button 
                      onClick={handleStatusUpdate} 
                      className="status-update-button"
                      disabled={isUpdating || newStatus === status}
                  >
                    {isUpdating ? t('reportModal.updating') : t('reportModal.save')}
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
              {t('reportModal.editMyReport')}
            </button>
          )}
          <p className="modal-report-id">{t('reportModal.reportId')}: {report_id}</p>
        </div>
      </div>
    </div>
  );
}

export default ReportDetailModal; 