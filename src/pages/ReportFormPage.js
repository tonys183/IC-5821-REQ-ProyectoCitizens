import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
// import './ReportFormPage.css'; // If you create a specific CSS file

function ReportFormPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    problem_type_id: '', // For the first dropdown (Tipo de problemática)
    problem_id: '',      // For the second dropdown (Problemática específica, stores its ID)
    canton_name: '',      // Corresponds to "Cantón:" (as text input)
    district_name: '',   // Corresponds to "Distrito:"
    street: '',           // Corresponds to "Ubicación:"
  });

  const [problemTypes, setProblemTypes] = useState([]);
  const [problems, setProblems] = useState([]); // For the second dropdown
  const [isLoading, setIsLoading] = useState(false); // General loading for submission
  const [isFetchingProblems, setIsFetchingProblems] = useState(false); // Loading for problems dropdown
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch initial Problem Types
  useEffect(() => {
    const fetchProblemTypes = async () => {
      // setIsLoading(true); // This setIsLoading is for the overall page/submission
      try {
        const problemTypesRes = await fetch('http://localhost:3001/api/problem-types');
        
        if (!problemTypesRes.ok) {
          throw new Error('Failed to fetch problem types');
        }
        const problemTypesData = await problemTypesRes.json();
        setProblemTypes(problemTypesData);
        setError(null);
      } catch (err) {
        console.error("Error fetching problem types:", err);
        setError(err.message || 'Error al cargar tipos de problema.');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchProblemTypes();
  }, []);

  // Fetch Problems when problem_type_id changes
  useEffect(() => {
    if (formData.problem_type_id) {
      const fetchProblemsByType = async () => {
        setIsFetchingProblems(true);
        setProblems([]); // Clear previous problems
        setFormData(prev => ({ ...prev, problem_id: '' })); // Reset selected problem_id
        try {
          const res = await fetch(`http://localhost:3001/api/problems?problemTypeId=${formData.problem_type_id}`);
          if (!res.ok) throw new Error('Failed to fetch specific problems for the selected type');
          const data = await res.json();
          setProblems(data);
          setError(null);
        } catch (err) {
          console.error("Error fetching specific problems:", err);
          setError(err.message || 'Error al cargar las problemáticas específicas.');
        } finally {
          setIsFetchingProblems(false);
        }
      };
      fetchProblemsByType();
    } else {
      setProblems([]); // Clear problems if no type is selected
    }
  }, [formData.problem_type_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.identification) {
      setError('Usuario no autenticado o falta ID de usuario.');
      return;
    }
    // Adjusted required fields for Scenario B
    if (!formData.problem_id || !formData.canton_name || !formData.district_name || !formData.street) {
        setError('Por favor complete todos los campos: Tipo de problemática, Problemática, Cantón, Distrito, Ubicación.');
        return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    const reportData = {
      problem_id: formData.problem_id,
      canton_name: formData.canton_name,
      district_name: formData.district_name,
      street: formData.street,
      neighbor_id: user.identification,
    };

    try {
      const response = await fetch('http://localhost:3001/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Error al crear el reporte.');
      }

      setSuccessMessage('Reporte creado con éxito! Redirigiendo...');
      setTimeout(() => {
        navigate('/reportes'); 
      }, 2000);
    } catch (err) {
      console.error("Error submitting report:", err);
      setError(err.message || 'Ocurrió un error al enviar el reporte.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="report-form-container">
      <h2 className="form-title">Crear Reporte</h2> {/* Title from image */}
      <form onSubmit={handleSubmit} className="report-form">
        
        <div className="form-group">
          <label htmlFor="problem_type_id">Tipo de problemática *</label>
          <select
            id="problem_type_id"
            name="problem_type_id"
            value={formData.problem_type_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo general</option>
            {problemTypes.map(pt => (
              <option key={pt.problem_type_id} value={pt.problem_type_id}>
                {pt.type_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="problem_id">Problemática *</label>
          <select
            id="problem_id"
            name="problem_id"
            value={formData.problem_id}
            onChange={handleChange}
            required
            disabled={!formData.problem_type_id || isFetchingProblems}
          >
            <option value="">{isFetchingProblems ? 'Cargando...' : (formData.problem_type_id ? 'Seleccione problemática específica' : 'Seleccione primero un tipo general')}</option>
            {problems.map(p => (
              <option key={p.problem_id} value={p.problem_id}>
                {p.description}
              </option>
            ))}
          </select>
          {isFetchingProblems && <small>Cargando problemáticas...</small>}
        </div>

        <div className="form-group">
          <label htmlFor="canton_name">Cantón: *</label> 
          <input 
            type="text"
            id="canton_name"
            name="canton_name"
            value={formData.canton_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="district_name">Distrito: *</label>
          <input
            type="text"
            id="district_name"
            name="district_name"
            value={formData.district_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Ubicación: *</label>
          <textarea
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            rows="4" // Adjusted rows to be more like the image's Ubicacion field
            required
          ></textarea>
        </div>
        
        {isLoading && <p style={{textAlign: 'center'}}>Enviando reporte...</p>}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p style={{color: 'green', textAlign: 'center'}}>{successMessage}</p>}

        <button type="submit" className="submit-button account-button" disabled={isLoading || isFetchingProblems}> {/* Matched button style from login/register */}
          {isLoading ? 'Enviando...' : 'Enviar'} {/* Button text from image */}
        </button>
      </form>
    </div>
  );
}

export default ReportFormPage; 