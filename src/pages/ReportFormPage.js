import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { useReports } from '../context/ReportContext.js';
import { FaTimes } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';
import './ReportFormPage.css'; 

function ReportFormPage() {
  const { t } = useTranslation();
  const { createReport } = useReports();
  const { isAuthenticated } = useAuth();
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
  
  const [isLoading, setIsLoading] = useState(false); 
  const [isFetchingProblems, setIsFetchingProblems] = useState(false);
  const [isFetchingCantons, setIsFetchingCantons] = useState(false);     
  const [isFetchingDistricts, setIsFetchingDistricts] = useState(false); 

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchProblemTypes = async () => {
      try {
        const problemTypesRes = await fetch('/api/problem-types');
        if (!problemTypesRes.ok) throw new Error('Failed to fetch problem types');
        const problemTypesData = await problemTypesRes.json();
        setProblemTypes(problemTypesData);
      } catch (err) {
        setError(prev => prev || err.message || t('reportForm.errors.loadProblemTypes'));
      }
    };
    fetchProblemTypes();
  }, [t]);

  useEffect(() => {
    const fetchCantons = async () => {
      setIsFetchingCantons(true);
      try {
        const cantonsRes = await fetch('/api/cantons');
        if (!cantonsRes.ok) throw new Error('Failed to fetch cantons');
        const cantonsData = await cantonsRes.json();
        setCantons(cantonsData);
      } catch (err) {
        setError(prev => prev || err.message || t('reportForm.errors.loadCantons'));
      } finally {
        setIsFetchingCantons(false);
      }
    };
    fetchCantons();
  }, [t]);

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
          setError(prev => prev || err.message || t('reportForm.errors.loadProblems'));
        } finally {
          setIsFetchingProblems(false);
        }
      };
      fetchProblemsByType();
    } else {
      setProblems([]);
      setFormData(prev => ({ ...prev, problem_id: '' }));
    }
  }, [formData.problem_type_id, t]);

  useEffect(() => {
    if (formData.canton_id) {
      const fetchDistrictsByCanton = async () => {
        setIsFetchingDistricts(true);
        setDistricts([]);
        setFormData(prev => ({ ...prev, district_id: '' }));
        try {
          const res = await fetch(`/api/districts?cantonId=${formData.canton_id}`);
          if (!res.ok) throw new Error('Failed to fetch districts for the selected canton');
          const data = await res.json();
          setDistricts(data);
        } catch (err) {
          setError(prev => prev || err.message || t('reportForm.errors.loadDistricts'));
        } finally {
          setIsFetchingDistricts(false);
        }
      };
      fetchDistrictsByCanton();
    } else {
      setDistricts([]);
      setFormData(prev => ({ ...prev, district_id: '' }));
    }
  }, [formData.canton_id, t]);

  const handleCancel = () => {
    navigate('/reportes'); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setError(t('reportForm.errors.notAuthenticated'));
      return;
    }
    
    const { report_title, problem_id, canton_id, district_id, neighborhood, street } = formData;
    if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
        setError(t('reportForm.errors.fillAllFields'));
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

    try {
      await createReport(reportData);
      setSuccessMessage(t('reportForm.success.reportCreated'));
      setTimeout(() => {
        navigate('/reportes'); 
      }, 1500);
    } catch (err) {
      setError(err.message || t('reportForm.errors.submitError'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <button 
        onClick={handleCancel}
        title={t('reportForm.cancelAndReturn')}
        className="close-form-button"
      >
        <FaTimes />
      </button>
      <h2 className="form-title">{t('reportForm.titleCreate')}</h2>
      
      <form onSubmit={handleSubmit}>
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
                  {t(`problemTypes.${pt.type_name}`, pt.type_name)}
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
              <option value="">
                {isFetchingProblems 
                  ? t('reportForm.placeholders.loading') 
                  : (formData.problem_type_id 
                      ? t('reportForm.placeholders.selectProblem') 
                      : t('reportForm.placeholders.selectTypeFirst'))
                }
              </option>
              {problems.map(p => (
                <option key={p.problem_id} value={p.problem_id}>
                  {t(`problems.${p.problem_name}`, p.problem_name)}
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
              disabled={isFetchingCantons}
            >
              <option value="">{isFetchingCantons ? t('reportForm.placeholders.loading') : t('reportForm.placeholders.selectCanton')}</option>
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
              <option value="">
                {isFetchingDistricts 
                  ? t('reportForm.placeholders.loading') 
                  : (formData.canton_id 
                      ? t('reportForm.placeholders.selectDistrict') 
                      : t('reportForm.placeholders.selectCantonFirst'))
                }
              </option>
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

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            {t('reportForm.buttons.cancel')}
          </button>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? t('reportForm.buttons.sending') : t('reportForm.buttons.createReport')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReportFormPage; 