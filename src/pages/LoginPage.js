import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import './AuthForm.css'; // Import the shared CSS file
// import './LoginPage.css'; // You can create and import this for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to login');
      }

      // Call the login function from AuthContext with user data from backend
      // The backend should return user data (excluding password) and optionally a token
      login(data); // Pass the whole data object { user, token, message }
      
      navigate('/dashboard'); // Navigate to dashboard on successful login

    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container form-container-styles"> {/* form-container-styles is for the teal box */}
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="submit-button account-button" disabled={isLoading}>
          {isLoading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px' }}> {/* Adjusted margin */}
        ¿Sin cuenta? <Link to="/registrarse">Registrarse</Link>
      </p>
    </div>
  );
}

export default LoginPage; 