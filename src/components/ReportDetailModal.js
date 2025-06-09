import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ReportDetailModal.css';

function ReportDetailModal({ report, user, onClose, show, onReportUpdate }) {
  const { t, i18n } = useTranslation();
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
      case 'Waiting': return 'reportList.status.waiting';
      case 'In Progress': return 'reportList.status.inProgress';
      case 'Resolved': return 'reportList.status.resolved';
      default: return 'reportCard.unspecified';
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
            <h4 className="modal-section-title">{t('reportModal.problemDetails')}</h4>
            <p><strong>{t('reportModal.problem')}:</strong> {fullProblemDescription}</p>
            <p><strong>{t('reportModal.location')}:</strong> {`${street || '-'}, ${neighborhood || '-'}, ${districtName}, ${cantonName}`}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">{t('reportModal.statusAndDates')}</h4>
            <p><strong>{t('reportModal.currentStatus')}:</strong> <span className={`status status-${(status || '').toLowerCase().replace(' ', '-')}`}>{t(getStatusKey(status))}</span></p>
            <p><strong>{t('reportModal.reportDate')}:</strong> {formatDate(report_date)}</p>
            <p><strong>{t('reportModal.lastUpdated')}:</strong> {formatDate(updated_at || report_date)}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">{t('reportModal.reportedBy')}</h4>
            <p>{reporterName}</p>
          </div>

          {/* Municipality Status Update Section */}
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
                    <option value="Waiting">{t('reportList.status.waiting')}</option>
                    <option value="In Progress">{t('reportList.status.inProgress')}</option>
                    <option value="Resolved">{t('reportList.status.resolved')}</option>
                    <option value="Rejected">{t('reportList.status.rejected')}</option>
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