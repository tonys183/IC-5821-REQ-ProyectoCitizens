import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { FaTimes } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';
import './ReportFormPage.css'; 

function EditReportPage() {
  const { t } = useTranslation();
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
  
  const [isLoadingReport, setIsLoadingReport] = useState(true); 
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [isFetchingProblems, setIsFetchingProblems] = useState(false);
  const [isFetchingDistricts, setIsFetchingDistricts] = useState(false);

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [problemTypesRes, cantonsRes] = await Promise.all([
          fetch('/api/problem-types'),
          fetch('/api/cantons')
        ]);
        if (!problemTypesRes.ok) throw new Error('Failed to fetch problem types');
        if (!cantonsRes.ok) throw new Error('Failed to fetch cantons');
        const problemTypesData = await problemTypesRes.json();
        const cantonsData = await cantonsRes.json();
        setProblemTypes(problemTypesData);
        setCantons(cantonsData);
      } catch (err) {
        console.error("Error fetching initial data:", err);
        setError(prev => prev || err.message || t('reportForm.errors.loadInitialData'));
      }
    };
    fetchInitialData();
  }, []);

  const fetchProblemsByType = useCallback(async (problemTypeId) => {
    if (!problemTypeId) {
      setProblems([]);
      return;
    }
    setIsFetchingProblems(true);
    try {
      const res = await fetch(`/api/problems?problemTypeId=${problemTypeId}`);
      if (!res.ok) throw new Error('Failed to fetch specific problems');
      const data = await res.json();
      setProblems(data);
    } catch (err) {
      console.error("Error fetching specific problems:", err);
      setError(prev => prev || err.message);
    } finally {
      setIsFetchingProblems(false);
    }
  }, []);

  const fetchDistrictsByCanton = useCallback(async (cantonId) => {
    if (!cantonId) {
      setDistricts([]);
      return;
    }
    setIsFetchingDistricts(true);
    try {
      const res = await fetch(`/api/districts?cantonId=${cantonId}`);
      if (!res.ok) throw new Error('Failed to fetch districts');
      const data = await res.json();
      setDistricts(data);
    } catch (err) {
      console.error("Error fetching districts:", err);
      setError(prev => prev || err.message);
    } finally {
      setIsFetchingDistricts(false);
    }
  }, []);

  useEffect(() => {
    if (!reportId || !user) {
        if (!user && !isLoadingReport) {
             setError(t('reportForm.errors.notAuthenticated'));
             setIsLoadingReport(false);
        }
        return;
    }

    const fetchReportData = async () => {
      setIsLoadingReport(true);
      setError(null);
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError(t('reportForm.errors.noAuthTokenRedirect'));
        setIsLoadingReport(false);
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`/api/reports/${reportId}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || t('reportForm.errors.loadReportError'));
        }
        
        const initialFormData = {
          report_title: data.report_title || '',
          problem_type_id: data.problem_type_id?.toString() || '',
          problem_id: data.problem_id?.toString() || '',
          canton_id: data.canton_id?.toString() || '',
          district_id: data.district_id?.toString() || '',
          neighborhood: data.neighborhood || '',
          street: data.street || '',
        };
        setFormData(initialFormData);

        if (initialFormData.problem_type_id) {
          fetchProblemsByType(initialFormData.problem_type_id);
        }
        if (initialFormData.canton_id) {
          fetchDistrictsByCanton(initialFormData.canton_id);
        }

      } catch (err) {
        console.error("Error fetching report data:", err);
        setError(err.message);
      } finally {
        setIsLoadingReport(false);
      }
    };

    fetchReportData();
  }, [reportId, user, navigate, fetchProblemsByType, fetchDistrictsByCanton]);

  const handleCancel = () => {
    navigate('/reportes');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
        const newState = { ...prev, [name]: value };
        if (name === 'problem_type_id') {
            newState.problem_id = '';
            fetchProblemsByType(value); 
        }
        if (name === 'canton_id') {
            newState.district_id = '';
            fetchDistrictsByCanton(value); 
        }
        return newState;
    });
    setError(null);
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!user || !token) {
      setError(t('reportForm.errors.notAuthenticated'));
      return;
    }
    
    const { report_title, problem_id, canton_id, district_id, neighborhood, street } = formData;
    if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
        setError(t('reportForm.errors.fillAllFields'));
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
    
    try {
      const response = await fetch(`/api/reports/${reportId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reportDataToUpdate),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || t('reportForm.errors.updateError'));
      }

      setSuccessMessage(t('reportForm.success.reportUpdated'));
      setTimeout(() => {
        navigate('/reportes');
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingReport) {
    return <div className="form-container">{t('reportForm.loadingReportData')}</div>;
  }

  return (
    <div className="form-container">
      <button 
        onClick={handleCancel}
        title={t('reportForm.cancelAndReturn')}
        className="close-form-button"
      >
        <FaTimes />
      </button>
      <h2 className="form-title">{t('reportForm.titleEdit')}</h2>
      
      <form onSubmit={handleSubmit} noValidate>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <div className="contact-prompt">
          <p>
          {t('reportForm.contactPrompt.text')}{' '}
            <Link to="/contacto">{t('reportForm.contactPrompt.link')}</Link>.
          </p>
        </div>

        <div className="form-group full-width">
          <label htmlFor="report_title">{t('reportForm.labels.reportTitle')} *</label>
          <input
            type="text"
            id="report_title"
            name="report_title"
            value={formData.report_title}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </div>
        
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="problem_type_id">{t('reportForm.labels.problemType')} *</label>
            <select
              id="problem_type_id"
              name="problem_type_id"
              value={formData.problem_type_id}
              onChange={handleChange}
              required
            >
              <option value="">{t('reportForm.placeholders.selectType')}</option>
              {problemTypes.map(pt => (
                <option key={pt.problem_type_id} value={pt.problem_type_id}>
                  {pt.type_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="problem_id">{t('reportForm.labels.specificProblem')} *</label>
            <select
              id="problem_id"
              name="problem_id"
              value={formData.problem_id}
              onChange={handleChange}
              required
              disabled={!formData.problem_type_id || isFetchingProblems}
            >
              <option value="">{isFetchingProblems ? t('reportForm.placeholders.loading') : (formData.problem_type_id ? t('reportForm.placeholders.selectProblem') : t('reportForm.placeholders.selectTypeFirst'))}</option>
              {problems.map(p => (
                  <option key={p.problem_id} value={p.problem_id}>
                    {p.problem_name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="canton_id">{t('reportForm.labels.canton')} *</label>
            <select
              id="canton_id"
              name="canton_id"
              value={formData.canton_id}
              onChange={handleChange}
              required
            >
              <option value="">{t('reportForm.placeholders.selectCanton')}</option>
              {cantons.map(c => (
                <option key={c.canton_id} value={c.canton_id}>
                  {c.canton_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="district_id">{t('reportForm.labels.district')} *</label>
            <select
              id="district_id"
              name="district_id"
              value={formData.district_id}
              onChange={handleChange}
              required
              disabled={!formData.canton_id || isFetchingDistricts}
            >
              <option value="">{isFetchingDistricts ? t('reportForm.placeholders.loading') : (formData.canton_id ? t('reportForm.placeholders.selectDistrict') : t('reportForm.placeholders.selectCantonFirst'))}</option>
              {districts.map(d => (
                  <option key={d.district_id} value={d.district_id}>
                    {d.district_name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="neighborhood">{t('reportForm.labels.neighborhood')} *</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="street">{t('reportForm.labels.exactAddress')} *</label>
          <textarea
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            maxLength="255"
            rows="3"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-button">
            {t('reportForm.buttons.cancel')}
          </button>
          <button type="submit" disabled={isSubmitting || isLoadingReport} className="submit-button">
            {isSubmitting ? t('reportForm.buttons.saving') : t('reportForm.buttons.saveChanges')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditReportPage; 