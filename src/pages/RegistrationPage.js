import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthForm.css'; // Import the shared CSS file
// import './RegistrationPage.css'; // You can create and import this for styling

function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    // Basic client-side validation for password length (example)
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
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
        throw new Error(data.message || 'Failed to register');
      }

      setSuccessMessage(data.message + ' Redirigiendo a Iniciar Sesión...');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Wait 2 seconds before redirecting

    } catch (err) {
      setError(err.message);
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-container form-container-styles"> {/* form-container-styles is for the teal box */}
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
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
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono (Opcional)</label>
          <input
            type="tel" // Changed to type tel for better mobile UX
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
      <p style={{ textAlign: 'center', marginTop: '20px' }}> {/* Adjusted margin */}
        ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
      </p>
    </div>
  );
}

export default RegistrationPage; 