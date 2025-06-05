import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { FaTimes } from 'react-icons/fa'; // Import the close icon
// import './ReportFormPage.css'; // Can reuse if styles are identical or create EditReportPage.css

function EditReportPage() {
  const { reportId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    report_title: '',
    problem_type_id: '',
    problem_id: '',
    canton_id: '',
    district_id: '',
    neighborhood: '',
    street: '',
  });

  const [problemTypes, setProblemTypes] = useState([]);
  const [problems, setProblems] = useState([]);
  const [cantons, setCantons] = useState([]);
  const [districts, setDistricts] = useState([]);
  
  const [isLoadingReport, setIsLoadingReport] = useState(true); // Loading initial report data
  const [isSubmitting, setIsSubmitting] = useState(false); // For form submission
  const [isFetchingProblems, setIsFetchingProblems] = useState(false);
  const [isFetchingDistricts, setIsFetchingDistricts] = useState(false);
  // Note: isFetchingCantons is not strictly needed if cantons are fetched once and don't depend on other form data for re-fetching in edit mode.

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch initial Problem Types (runs once)
  useEffect(() => {
    const fetchProblemTypes = async () => {
      try {
        const problemTypesRes = await fetch('/api/problem-types');
        if (!problemTypesRes.ok) throw new Error('Failed to fetch problem types');
        const problemTypesData = await problemTypesRes.json();
        setProblemTypes(problemTypesData);
      } catch (err) {
        console.error("Error fetching problem types:", err);
        setError(prev => prev || err.message || 'Error al cargar tipos de problema.');
      }
    };
    fetchProblemTypes();
  }, []);

  // Fetch initial Cantons (runs once)
  useEffect(() => {
    const fetchCantons = async () => {
      // setIsFetchingCantons(true); // Optional if you want a specific loading state
      try {
        const cantonsRes = await fetch('/api/cantons');
        if (!cantonsRes.ok) throw new Error('Failed to fetch cantons');
        const cantonsData = await cantonsRes.json();
        setCantons(cantonsData);
      } catch (err) {
        console.error("Error fetching cantons:", err);
        setError(prev => prev || err.message || 'Error al cargar cantones.');
      }
      // finally { setIsFetchingCantons(false); }
    };
    fetchCantons();
  }, []);

  // Fetch Problems when problem_type_id changes
  const fetchProblemsByType = useCallback(async (problemTypeId) => {
    if (problemTypeId) {
      setIsFetchingProblems(true);
      setProblems([]); // Clear previous problems
      // setFormData(prev => ({ ...prev, problem_id: '' })); // Reset problem_id when type changes
      try {
        const res = await fetch(`/api/problems?problemTypeId=${problemTypeId}`);
        if (!res.ok) throw new Error('Failed to fetch specific problems');
        const data = await res.json();
        setProblems(data);
      } catch (err) {
        console.error("Error fetching specific problems:", err);
        setError(prev => prev || err.message || 'Error al cargar problemáticas específicas.');
      } finally {
        setIsFetchingProblems(false);
      }
    } else {
      setProblems([]);
      // setFormData(prev => ({ ...prev, problem_id: '' }));
    }
  }, []);

  useEffect(() => {
    if (formData.problem_type_id) {
        fetchProblemsByType(formData.problem_type_id);
    } else {
        setProblems([]); // Clear problems if no type is selected
    }
  }, [formData.problem_type_id, fetchProblemsByType]);


  // Fetch Districts when canton_id changes
  const fetchDistrictsByCanton = useCallback(async (cantonId) => {
    if (cantonId) {
      setIsFetchingDistricts(true);
      setDistricts([]); // Clear previous districts
      // setFormData(prev => ({ ...prev, district_id: '' })); // Reset district_id when canton changes
      try {
        const res = await fetch(`/api/districts?cantonId=${cantonId}`);
        if (!res.ok) throw new Error('Failed to fetch districts for the selected canton');
        const data = await res.json();
        setDistricts(data);
      } catch (err) {
        console.error("Error fetching districts:", err);
        setError(prev => prev || err.message || 'Error al cargar distritos.');
      } finally {
        setIsFetchingDistricts(false);
      }
    } else {
      setDistricts([]);
      // setFormData(prev => ({ ...prev, district_id: '' }));
    }
  }, []);
  
  useEffect(() => {
    if (formData.canton_id) {
        fetchDistrictsByCanton(formData.canton_id);
    } else {
        setDistricts([]); // Clear districts if no canton is selected
    }
  }, [formData.canton_id, fetchDistrictsByCanton]);


  // Fetch existing report data
  useEffect(() => {
    if (!reportId || !user?.identification) {
        // If no reportId or user not loaded yet, don't fetch.
        // User check helps prevent fetch if auth is still loading.
        if (!user?.identification && !isLoadingReport) { // Avoid navigating if already loading/error
             setError("Usuario no autenticado. No se puede cargar el reporte.");
             setIsLoadingReport(false);
        }
        return;
    }

    const fetchReportData = async () => {
      setIsLoadingReport(true);
      setError(null);
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('No autenticado. Token no encontrado.');
        setIsLoadingReport(false);
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`/api/reports/${reportId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || `Error fetching report: ${response.status}`);
        }
        
        // Populate form with fetched data
        // Ensure all fields match what the form expects
        setFormData({
          report_title: data.report_title || '',
          problem_type_id: data.problem_type_id?.toString() || '', // Ensure it's a string for select value
          problem_id: data.problem_id?.toString() || '',
          canton_id: data.canton_id?.toString() || '',
          district_id: data.district_id?.toString() || '',
          neighborhood: data.neighborhood || '',
          street: data.street || '',
        });

        // Trigger dependent fetches if IDs are present
        // These will be handled by their respective useEffects based on formData changes
        // if (data.problem_type_id) fetchProblemsByType(data.problem_type_id.toString());
        // if (data.canton_id) fetchDistrictsByCanton(data.canton_id.toString());


      } catch (err) {
        console.error("Error fetching report data:", err);
        setError(err.message || 'Error al cargar los datos del reporte.');
        if (err.message.includes("Access denied") || err.message.includes("No autenticado")) {
            // Optionally navigate away or show a more specific message
            // navigate('/reportes'); 
        }
      } finally {
        setIsLoadingReport(false);
      }
    };

    fetchReportData();
  }, [reportId, user?.identification, navigate]); // Removed fetchProblemsByType, fetchDistrictsByCanton as they are triggered by formData change

  const handleCancel = () => {
    navigate('/reportes');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
        const newState = { ...prev, [name]: value };
        // If problem_type_id changes, reset problem_id
        if (name === 'problem_type_id') {
            newState.problem_id = '';
        }
        // If canton_id changes, reset district_id
        if (name === 'canton_id') {
            newState.district_id = '';
        }
        return newState;
    });
    setError(null);
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.identification) {
      setError('Usuario no autenticado. Por favor, inicie sesión de nuevo.');
      return;
    }
    
    const { report_title, problem_id, canton_id, district_id, neighborhood, street } = formData;
    if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
        setError('Por favor complete todos los campos requeridos (*).');
        return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccessMessage('');

    const reportDataToUpdate = {
      report_title,
      problem_id: parseInt(problem_id),
      canton_id: parseInt(canton_id),
      district_id: parseInt(district_id),
      neighborhood,
      street,
    };

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No autenticado. Token no encontrado.');
      setIsSubmitting(false);
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`/api/reports/${reportId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reportDataToUpdate),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
            setError(responseData.message || 'Error de autenticación/autorización. No se pudo actualizar.');
        } else {
            throw new Error(responseData.message || 'Error al actualizar el reporte.');
        }
      } else {
        setSuccessMessage('¡Reporte actualizado con éxito! Redirigiendo...');
        setTimeout(() => {
          navigate('/reportes'); 
        }, 2000);
      }
    } catch (err) {
      console.error("Error submitting updated report:", err);
      setError(err.message || 'Ocurrió un error al actualizar el reporte.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingReport) {
    return <p>Cargando datos del reporte...</p>;
  }

  // If there was an error fetching the report (and not just a field validation error)
  // and the form data hasn't been populated, show a more prominent error.
  if (error && !formData.report_title && !isSubmitting) { // Check if initial load failed
    return (
      <div className="report-form-container" style={{ padding: '20px', textAlign: 'center' }}>
        <h2 className="form-title">Error al Cargar Reporte</h2>
        <p className="error-message" style={{color: 'red'}}>{error}</p>
        <button onClick={() => navigate('/reportes')} className="submit-button" style={{marginTop: '20px'}}>Volver a la lista</button>
      </div>
    );
  }


  return (
    <div className="report-form-container" style={{ position: 'relative' }}>
      <button 
        onClick={handleCancel}
        title="Cancelar y volver a la lista"
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: '#555'
        }}
      >
        <FaTimes />
      </button>
      <h2 className="form-title">Editar Reporte</h2>
      <form onSubmit={handleSubmit} className="report-form">
        
        <div className="form-group">
          <label htmlFor="report_title">Título del Reporte *</label>
          <input
            type="text"
            id="report_title"
            name="report_title"
            value={formData.report_title}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="problem_type_id">Tipo de problemática *</label>
          <select
            id="problem_type_id"
            name="problem_type_id"
            value={formData.problem_type_id}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Seleccione un tipo</option>
            {problemTypes.map(pt => (
              <option key={pt.problem_type_id} value={pt.problem_type_id}>
                {pt.type_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="problem_id">Problemática Específica *</label>
          <select
            id="problem_id"
            name="problem_id"
            value={formData.problem_id}
            onChange={handleChange}
            required
            disabled={isSubmitting || isFetchingProblems || !formData.problem_type_id}
          >
            <option value="">{isFetchingProblems ? 'Cargando...' : (problems.length > 0 ? 'Seleccione una problemática' : (formData.problem_type_id ? 'No hay problemáticas para este tipo' : 'Seleccione un tipo primero'))}</option>
            {problems.map(p => (
              <option key={p.problem_id} value={p.problem_id}>
                {p.problem_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="canton_id">Cantón *</label>
          <select
            id="canton_id"
            name="canton_id"
            value={formData.canton_id}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Seleccione un cantón</option>
            {cantons.map(c => (
              <option key={c.canton_id} value={c.canton_id}>
                {c.canton_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="district_id">Distrito *</label>
          <select
            id="district_id"
            name="district_id"
            value={formData.district_id}
            onChange={handleChange}
            required
            disabled={isSubmitting || isFetchingDistricts || !formData.canton_id}
          >
            <option value="">{isFetchingDistricts ? 'Cargando...' : (districts.length > 0 ? 'Seleccione un distrito' : (formData.canton_id ? 'No hay distritos para este cantón' : 'Seleccione un cantón primero'))}</option>
            {districts.map(d => (
              <option key={d.district_id} value={d.district_id}>
                {d.district_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="neighborhood">Barrio / Comunidad *</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Señas Exactas / Calle *</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
        
        <button type="submit" className="submit-button" disabled={isSubmitting || isLoadingReport}>
          {isSubmitting ? 'Guardando Cambios...' : 'Guardar Cambios'}
        </button>
      </form>
    </div>
  );
}

export default EditReportPage; 