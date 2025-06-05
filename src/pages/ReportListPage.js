import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For the "Crear Reporte" button
import ReportCard from '../components/ReportCard.js'; // Added .js extension
import ReportDetailModal from '../components/ReportDetailModal.js'; // Import the modal
import { useAuth } from '../context/AuthContext.js'; // Import useAuth
import './ReportListPage.css';

function ReportListPage() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth(); // Get the authenticated user

  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/api/reports');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReports(data);
      } catch (err) {
        console.error("Failed to fetch reports:", err);
        setError(err.message || "Error al cargar los reportes.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Filter reports based on searchTerm (simple title/description search)
  const filteredReports = reports.filter(report => {
    const problemName = report.problem?.problem_name?.toLowerCase() || '';
    const problemTypeName = report.problem?.problem_type?.type_name?.toLowerCase() || '';
    const currentReportTitle = report.report_title?.toLowerCase() || '';
    const lowerSearchTerm = searchTerm.toLowerCase();

    // Add other fields to search if desired, e.g., status, neighbor name, canton, district
    const status = report.status?.toLowerCase() || '';
    const canton = report.canton?.canton_name?.toLowerCase() || '';
    const district = report.district_report_districtTodistrict?.district_name?.toLowerCase() || '';
    const neighborhood = report.neighborhood?.toLowerCase() || '';

    return problemName.includes(lowerSearchTerm) || 
           problemTypeName.includes(lowerSearchTerm) ||
           currentReportTitle.includes(lowerSearchTerm) ||
           status.includes(lowerSearchTerm) ||
           canton.includes(lowerSearchTerm) ||
           district.includes(lowerSearchTerm) ||
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

  return (
    <div className="report-list-page-container">
      <div className="report-list-main-content">
      <div className="report-list-header">
        <div className="search-bar-container">
          <input
            type="text"
              placeholder="Buscar reportes... (título, problema, estado, ubicación)"
              className="search-input"
            value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
            {/* <button className="search-button">🔍</button> */}
        </div>
          <Link to="/reportes/nuevo" className="create-report-button">
          Crear Reporte
        </Link>
      </div>

        {isLoading && <p>Cargando reportes...</p>}
        {error && <p className="error-message" style={{color: 'red'}}>Error: {error}</p>}
        
        {!isLoading && !error && (
          filteredReports.length > 0 ? (
        <div className="reports-grid">
          {filteredReports.map(report => (
                <ReportCard 
                  key={report.report_id} 
                  report={report} 
                  currentUserId={user?.identification} 
                  onCardClick={handleCardClick}
                />
          ))}
        </div>
      ) : (
            <p className="no-reports-message">
              {reports.length === 0 ? "No hay reportes disponibles." : "No se encontraron reportes con los criterios de búsqueda."}
            </p>
          )
      )}
      </div>

      {/* Nuevos Avisos Sidebar (static for now) */}
      <aside className="nuevos-avisos-sidebar">
        <h4>Nuevos avisos</h4>
        <p>Aquí se mostrarán los avisos más recientes o importantes.</p>
        {/* Placeholder content or future dynamic content */}
      </aside>

      <ReportDetailModal 
        show={isModalOpen} 
        report={selectedReport} 
        currentUserId={user?.identification}
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default ReportListPage; 