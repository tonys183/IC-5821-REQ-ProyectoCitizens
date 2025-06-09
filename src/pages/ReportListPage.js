import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ReportCard from '../components/ReportCard.js'; 
import ReportDetailModal from '../components/ReportDetailModal.js'; 
import { useAuth } from '../context/AuthContext.js';
import { useTranslation } from 'react-i18next'; 
import './ReportListPage.css';

function ReportListPage() {
  const { t } = useTranslation();
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth(); 

  const [cantons, setCantons] = useState([]);
  const [filterCanton, setFilterCanton] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/alerts');
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          return;
        }
        const data = await response.json();
        setAlerts(data);
      } catch (err) {
        console.error("Failed to fetch alerts for sidebar:", err);
      }
    };
    fetchAlerts();
  }, []);

  useEffect(() => {
    const fetchCantons = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/cantons');
        if (!response.ok) throw new Error('Failed to fetch cantons');
        const data = await response.json();
        setCantons(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCantons();
  }, []);


  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      setError(null);
      
      const query = new URLSearchParams();
      if (filterCanton) {
        query.append('cantonId', filterCanton);
      }
      if (filterStatus) {
        query.append('status', filterStatus);
      }
      
      try {
        const response = await fetch(`http://localhost:3001/api/reports?${query.toString()}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReports(data);
      } catch (err) {
        console.error("Failed to fetch reports:", err);
        setError(err.message || t('reportList.error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [filterCanton, filterStatus]);

  const filteredReports = reports.filter(report => {
    const problemName = report.problem?.problem_name?.toLowerCase() || '';
    const problemTypeName = report.problem?.problem_type?.type_name?.toLowerCase() || '';
    const currentReportTitle = report.report_title?.toLowerCase() || '';
    const lowerSearchTerm = searchTerm.toLowerCase();

    const canton = report.canton?.canton_name?.toLowerCase() || '';
    const neighborhood = report.neighborhood?.toLowerCase() || '';

    return problemName.includes(lowerSearchTerm) || 
           problemTypeName.includes(lowerSearchTerm) ||
           currentReportTitle.includes(lowerSearchTerm) ||
           canton.includes(lowerSearchTerm) ||
           neighborhood.includes(lowerSearchTerm);
  });

  const handleCardClick = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedReport(null);
    setIsModalOpen(false);
  };

  const handleReportUpdate = (updatedReport) => {
    setReports(prevReports => 
      prevReports.map(report => 
        report.report_id === updatedReport.report_id ? updatedReport : report
      )
    );
  };

  return (
    <div className="report-list-page-container">
      <div className="report-list-main-content">
        <div className="report-list-header">
          <div className="controls-left">
            <div className="search-bar-container">
              <input
                type="text"
                placeholder={t('reportList.searchPlaceholder')}
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filters-container">
              <select
                value={filterCanton}
                onChange={(e) => setFilterCanton(e.target.value)}
                className="filter-select"
              >
                <option value="">{t('reportList.filterCanton')}</option>
                {cantons.map(c => (
                  <option key={c.canton_id} value={c.canton_id}>{c.canton_name}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="">{t('reportList.filterStatus')}</option>
                <option value="Waiting">{t('reportList.status.waiting')}</option>
                <option value="In_Progress">{t('reportList.status.inProgress')}</option>
                <option value="Resolved">{t('reportList.status.resolved')}</option>
              </select>
            </div>
          </div>
          <Link to="/reportes/nuevo" className="create-report-button">
            {t('reportList.createReport')}
          </Link>
        </div>

        {isLoading && <p>{t('reportList.loading')}</p>}
        {error && <p className="error-message" style={{ color: 'red' }}>Error: {error}</p>}
        
        {!isLoading && !error && (
          filteredReports.length > 0 ? (
        <div className="reports-grid">
          {filteredReports.map(report => (
                <ReportCard 
                  key={report.report_id} 
                  report={report} 
                  currentUserId={user?.id}
                  onCardClick={handleCardClick}
                />
          ))}
        </div>
      ) : (
            <p className="no-reports-message">
              {reports.length === 0 ? t('reportList.noReports') : t('reportList.noReportsFound')}
            </p>
          )
      )}
      </div>

      <aside className="nuevos-avisos-sidebar">
        <h4>{t('reportList.newAlertsTitle')}</h4>
        {alerts.length > 0 ? (
          <ul className="alert-preview-list">
            {alerts.slice(0, 5).map(alert => (
              <li key={alert.id} className="alert-preview-item">
                <Link to={`/alertas`} className="alert-preview-link">
                  {alert.title}
                </Link>
                <span className="alert-preview-author">
                  {alert.author?.municipalityProfile?.name || 'Municipalidad'}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{t('reportList.newAlertsBody')}</p>
        )}
      </aside>

      <ReportDetailModal 
        show={isModalOpen} 
        report={selectedReport} 
        user={user}
        onClose={handleCloseModal} 
        onReportUpdate={handleReportUpdate}
      />
    </div>
  );
}

export default ReportListPage; 