import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthForm.css';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    identification: '',
    firstName: '',
    lastName: '',
    secondLastName: '',
    email: '',
    password: '',
    phoneNumber: '',
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    const MUNI_DOMAIN = '@munialajuela.go.cr';
    if (formData.email.endsWith(MUNI_DOMAIN)) {
      setError(
        <span>
          Este formulario es para vecinos. Para registrar una cuenta de municipalidad, usa el 
          <Link to="/registro-municipalidad" className="register-link-button" style={{display: 'inline-block', margin: '0 5px', textDecoration: 'none'}}>formulario de registro municipal</Link>.
        </span>
      );
      setIsLoading(false);
      return;
    }
    
    const isPasswordValid = passwordRequirements.every(req => req.met);
    if (!isPasswordValid) {
      setError('La contraseña no cumple con todos los requisitos.');
      setIsLoading(false);
      return;
    }
    
    if (isNaN(parseInt(formData.identification))) {
      setError('La cédula debe ser un número.');
      setIsLoading(false);
      return;
    }

    const submissionData = {
      ...formData,
      identification: parseInt(formData.identification), 
      phoneNumber: formData.phoneNumber ? parseInt(formData.phoneNumber) : null, 
    };


    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to register');
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
    <div className="registration-container form-container-styles"> {}
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="identification">Cédula</label>
          <input
            type="number" 
            id="identification"
            name="identification"
            value={formData.identification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Primer Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="secondLastName">Segundo Apellido (Opcional)</label>
          <input
            type="text"
            id="secondLastName"
            name="secondLastName"
            value={formData.secondLastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono (Opcional)</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit" className="submit-button account-button" disabled={isLoading}>
          {isLoading ? 'Registrando...' : 'Registrarme'}
        </button>
      </form>
      <div className="auth-switch-link-container">
        <div className="auth-switch-link">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
        </div>
        <div className="auth-switch-link">
          ¿Eres empleado municipal? <Link to="/registro-municipalidad">Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage; 