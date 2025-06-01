import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For the "Crear Reporte" button
import ReportCard from '../components/ReportCard.js'; // Added .js extension
import './ReportListPage.css';

function ReportListPage() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
    const problemDescription = report.problem?.description?.toLowerCase() || '';
    const problemType = report.problem?.problem_type?.name?.toLowerCase() || '';
    const reportTitle = report.title?.toLowerCase() || ''; // If reports have a direct title field
    const lowerSearchTerm = searchTerm.toLowerCase();

    return problemDescription.includes(lowerSearchTerm) || 
           problemType.includes(lowerSearchTerm) ||
           reportTitle.includes(lowerSearchTerm);
  });

  return (
    <div className="report-list-page-container">
      <div className="report-list-main-content">
      <div className="report-list-header">
        <div className="search-bar-container">
          <input
            type="text"
              placeholder="Buscar reportes... (por tipo, descripción)"
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
                <ReportCard key={report.id_report} report={report} />
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
    </div>
  );
}

export default ReportListPage; 