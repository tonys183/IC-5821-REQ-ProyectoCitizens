import React, { createContext, useState, useContext, useCallback } from 'react';

const ReportContext = createContext();

export function useReports() {
  return useContext(ReportContext);
}

export function ReportProvider({ children }) {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReports = useCallback(async (filters = {}) => {
    setIsLoading(true);
    setError(null);
    const query = new URLSearchParams();
    if (filters.cantonId) query.append('cantonId', filters.cantonId);
    if (filters.status) query.append('status', filters.status);

    try {
      const token = localStorage.getItem('authToken');
      const headers = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`/api/reports?${query.toString()}`, { headers });
      if (!response.ok) {
        throw new Error('Failed to fetch reports');
      }
      const data = await response.json();
      setReports(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createReport = useCallback(async (reportData) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch('/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(reportData),
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create report');
    }

    const newReport = await response.json();
    await fetchReports();
    return newReport;
  }, [fetchReports]);

  const updateReportStatus = useCallback(async (reportId, newStatus) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`/api/reports/${reportId}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
    });

    if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el estado.');
    }
    
    const updatedReport = await response.json();
    await fetchReports();
    return updatedReport;
  }, [fetchReports]);
  
  const value = {
    reports,
    isLoading,
    error,
    fetchReports,
    createReport,
    updateReportStatus
  };

  return (
    <ReportContext.Provider value={value}>
      {children}
    </ReportContext.Provider>
  );
} 