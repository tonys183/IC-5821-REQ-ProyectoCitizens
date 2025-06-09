import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthForm.css'; 

const MUNI_DOMAIN = '@munialajuela.go.cr';

function MunicipalityRegistrationPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const passwordRequirements = useMemo(() => {
    const password = formData.password;
    return [
      { text: "Al menos 8 caracteres", met: password.length >= 8 },
      { text: "Al menos una letra minúscula (a-z)", met: /[a-z]/.test(password) },
      { text: "Al menos una letra mayúscula (A-Z)", met: /[A-Z]/.test(password) },
      { text: "Al menos un carácter especial (!@#$...)", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
    ];
  }, [formData.password]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    if (!formData.email.endsWith(MUNI_DOMAIN)) {
      setError(`El registro solo está permitido para correos institucionales (${MUNI_DOMAIN}).`);
      setIsLoading(false);
      return;
    }

    const isPasswordValid = passwordRequirements.every(req => req.met);
    if (!isPasswordValid) {
      setError('La contraseña no cumple con todos los requisitos.');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en el registro');
      }

      setSuccessMessage(data.message + ' Redirigiendo a Iniciar Sesión...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      setError(err.message);
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-container form-container-styles">
      <h2>Registro para Municipalidad</h2>
      <p style={{ textAlign: 'center', color: '#666', marginTop: '-10px', marginBottom: '20px' }}>
        Exclusivo para personal con correo {MUNI_DOMAIN}
      </p>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico Institucional</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={`usuario${MUNI_DOMAIN}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="password-requirements">
            {passwordRequirements.map((req, index) => (
              <div key={index} className={`requirement ${req.met ? 'met' : 'unmet'}`}>
                <span className="requirement-icon">{req.met ? '✓' : '•'}</span> {req.text}
              </div>
            ))}
          </div>
        </div>
        
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}

        <button type="submit" className="submit-button account-button" disabled={isLoading}>
          {isLoading ? 'Registrando...' : 'Registrar Cuenta'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
      </p>
      <div className="registration-links">
        <p>¿No eres empleado municipal?</p>
        <Link to="/register" className="register-link-button">Regístrate aquí</Link>
      </div>
    </div>
  );
}

export default MunicipalityRegistrationPage; 