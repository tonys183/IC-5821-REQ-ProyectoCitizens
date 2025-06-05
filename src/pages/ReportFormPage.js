import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { FaTimes } from 'react-icons/fa'; // Import the close icon
// import './ReportFormPage.css'; // If you create a specific CSS file

function ReportFormPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    report_title: '',    // New
    problem_type_id: '',
    problem_id: '',
    canton_id: '',       // New (was canton_name)
    district_id: '',     // New (was district_name)
    neighborhood: '',    // New
    street: '',           // Existing (repurposed for Señas Exactas / Calle)
  });

  const [problemTypes, setProblemTypes] = useState([]);
  const [problems, setProblems] = useState([]);
  const [cantons, setCantons] = useState([]);             // New
  const [districts, setDistricts] = useState([]);         // New
  
  const [isLoading, setIsLoading] = useState(false); // General loading for submission
  const [isFetchingProblems, setIsFetchingProblems] = useState(false);
  const [isFetchingCantons, setIsFetchingCantons] = useState(false);     // New
  const [isFetchingDistricts, setIsFetchingDistricts] = useState(false); // New

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch initial Problem Types
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

  // Fetch initial Cantons
  useEffect(() => {
    const fetchCantons = async () => {
      setIsFetchingCantons(true);
      try {
        const cantonsRes = await fetch('/api/cantons');
        if (!cantonsRes.ok) throw new Error('Failed to fetch cantons');
        const cantonsData = await cantonsRes.json();
        setCantons(cantonsData);
      } catch (err) {
        console.error("Error fetching cantons:", err);
        setError(prev => prev || err.message || 'Error al cargar cantones.');
      } finally {
        setIsFetchingCantons(false);
      }
    };
    fetchCantons();
  }, []);

  // Fetch Problems when problem_type_id changes
  useEffect(() => {
    if (formData.problem_type_id) {
      const fetchProblemsByType = async () => {
        setIsFetchingProblems(true);
        setProblems([]);
        setFormData(prev => ({ ...prev, problem_id: '' }));
        try {
          const res = await fetch(`/api/problems?problemTypeId=${formData.problem_type_id}`);
          if (!res.ok) throw new Error('Failed to fetch specific problems');
          const data = await res.json();
          setProblems(data);
        } catch (err) {
          console.error("Error fetching specific problems:", err);
          setError(prev => prev || err.message || 'Error al cargar problemáticas.');
        } finally {
          setIsFetchingProblems(false);
        }
      };
      fetchProblemsByType();
    } else {
      setProblems([]);
      setFormData(prev => ({ ...prev, problem_id: '' }));
    }
  }, [formData.problem_type_id]);

  // Fetch Districts when canton_id changes
  useEffect(() => {
    if (formData.canton_id) {
      const fetchDistrictsByCanton = async () => {
        setIsFetchingDistricts(true);
        setDistricts([]);
        setFormData(prev => ({ ...prev, district_id: '' })); // Reset selected district
        try {
          const res = await fetch(`/api/districts?cantonId=${formData.canton_id}`);
          if (!res.ok) throw new Error('Failed to fetch districts for the selected canton');
          const data = await res.json();
          setDistricts(data);
        } catch (err) {
          console.error("Error fetching districts:", err);
          setError(prev => prev || err.message || 'Error al cargar distritos.');
        } finally {
          setIsFetchingDistricts(false);
        }
      };
      fetchDistrictsByCanton();
    } else {
      setDistricts([]);
      setFormData(prev => ({ ...prev, district_id: '' }));
    }
  }, [formData.canton_id]);

  const handleCancel = () => {
    navigate('/reportes'); // Navigate to the report list page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.identification) {
      setError('Usuario no autenticado o falta ID de usuario. Por favor, inicie sesión.');
      return;
    }
    
    const { report_title, problem_id, canton_id, district_id, neighborhood, street } = formData;
    if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
        setError('Por favor complete todos los campos requeridos (*).');
        return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    const reportData = {
      report_title,
      problem_id: parseInt(problem_id),
      canton_id: parseInt(canton_id),
      district_id: parseInt(district_id),
      neighborhood,
      street,
    };

    const token = localStorage.getItem('authToken');
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else {
      setError('No se encontró token de autenticación. Por favor, inicie sesión de nuevo.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/reports', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(reportData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
            setError(responseData.message || 'Error de autenticación. Por favor, intente iniciar sesión de nuevo.');
        } else {
            throw new Error(responseData.message || 'Error al crear el reporte.');
        }
      } else {
        setSuccessMessage('Reporte creado con éxito! Redirigiendo...');
        setTimeout(() => {
          navigate('/reportes'); 
        }, 2000);
      }
    } catch (err) {
      console.error("Error submitting report:", err);
      setError(err.message || 'Ocurrió un error al enviar el reporte.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="report-form-container" style={{ position: 'relative' }}> {/* Added relative positioning for absolute child */}
      <button 
        onClick={handleCancel}
        title="Cancelar y volver a la lista"
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem', // Adjust size as needed
          cursor: 'pointer',
          color: '#555' // Adjust color as needed
        }}
      >
        <FaTimes />
      </button>
      <h2 className="form-title">Crear Reporte</h2>
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
            disabled={!formData.problem_type_id || isFetchingProblems}
          >
            <option value="">{isFetchingProblems ? 'Cargando...' : (formData.problem_type_id ? 'Seleccione problemática' : 'Seleccione tipo primero')}</option>
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
            disabled={isFetchingCantons}
          >
            <option value="">{isFetchingCantons ? 'Cargando...' : 'Seleccione cantón'}</option>
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
            disabled={!formData.canton_id || isFetchingDistricts}
          >
            <option value="">{isFetchingDistricts ? 'Cargando...' : (formData.canton_id ? 'Seleccione distrito' : 'Seleccione cantón primero')}</option>
            {districts.map(d => (
              <option key={d.district_id} value={d.district_id}>
                {d.district_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="neighborhood">Barrio *</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Señas Exactas / Calle *</label>
          <textarea
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        
        {isLoading && <p style={{textAlign: 'center'}}>Enviando reporte...</p>}
        {error && <p className="error-message" style={{color: 'red', textAlign: 'center'}}>{error}</p>}
        {successMessage && <p style={{color: 'green', textAlign: 'center'}}>{successMessage}</p>}

        <button type="submit" className="submit-button account-button" disabled={isLoading || isFetchingProblems || isFetchingCantons || isFetchingDistricts}>
          {isLoading ? 'Enviando...' : 'Crear Reporte'}
        </button>
      </form>
    </div>
  );
}

export default ReportFormPage; 