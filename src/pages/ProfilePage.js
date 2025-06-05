import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import './ProfilePage.css'; // We will create this CSS file

function ProfilePage() {
  const { user, setUser, logout } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    secondLastName: '',
    email: '', // Display only, not editable for now
    phoneNumber: '', // Display only, not editable for now
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchUserProfile = useCallback(async () => {
    if (!user?.identification) {
      console.log('ProfilePage: fetchUserProfile - No user identification found, skipping fetch.');
      setIsLoading(false); // Stop loading if no ID
      return;
    }
    console.log(`ProfilePage: fetchUserProfile - Attempting to fetch for user ID: ${user.identification}`);
    const fetchUrl = `/api/neighbors/${user.identification}`;
    console.log(`ProfilePage: fetchUserProfile - Fetching URL: ${fetchUrl}`); // Log the exact URL
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        const errorText = await response.text(); // Get text to see if it's HTML
        console.error('ProfilePage: fetchUserProfile - Response not OK. Status:', response.status, 'Response text:', errorText);
        throw new Error( `Error ${response.status} fetching profile. Server says: ${response.statusText}. Response body: ${errorText.substring(0,100)}...`);
      }
      const data = await response.json();
      console.log('ProfilePage: fetchUserProfile - Data received:', data);
      setFormData({
        firstName: data.first_name || '',
        lastName: data.last_name || '',
        secondLastName: data.second_last_name || '',
        email: data.email || '',
        phoneNumber: data.phone_number?.toString() || '',
      });
    } catch (err) {
      console.error("ProfilePage: fetchUserProfile - Fetch profile error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
      console.log('ProfilePage: fetchUserProfile - Finished fetching, isLoading set to false.');
    }
  }, [user?.identification]); // Removed setUser from dependencies as it's not directly used for fetching decision

  useEffect(() => {
    console.log('ProfilePage: useEffect triggered. User ID:', user?.identification, 'isLoading:', isLoading);
    if (user?.identification) {
      console.log('ProfilePage: useEffect - User ID found, calling fetchUserProfile.');
      fetchUserProfile();
    } else if (!user && !isLoading) { // Only navigate if not loading and no user
      console.log('ProfilePage: useEffect - No user ID and not loading, navigating to /login.');
      navigate('/login');
    }
  }, [user?.identification, fetchUserProfile, navigate]); // isLoading removed, user itself is enough. fetchUserProfile is memoized.

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setError(null);
    setSuccessMessage('');
    if (isEditing) {
      fetchUserProfile();
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!user?.identification) return;
    console.log('ProfilePage: handleSaveChanges - Saving for user ID:', user.identification, 'Data:', formData);
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch(`/api/neighbors/${user.identification}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          secondLastName: formData.secondLastName,
          phoneNumber: formData.phoneNumber,
        }),
      });
      const data = await response.json(); 
      if (!response.ok) {
        console.error('ProfilePage: handleSaveChanges - Response not OK. Status:', response.status, 'Data:', data);
        throw new Error(data.message || `Error ${response.status} updating profile`);
      }
      console.log('ProfilePage: handleSaveChanges - Save successful. Data:', data);
      setSuccessMessage(data.message || 'Información actualizada con éxito.');
      if (data.user) {
        setUser({ 
          ...user,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          second_last_name: data.user.second_last_name,
          phone_number: data.user.phone_number,
        });
        setFormData({
            firstName: data.user.first_name || '',
            lastName: data.user.last_name || '',
            secondLastName: data.user.second_last_name || '',
            email: data.user.email || user.email, 
            phoneNumber: data.user.phone_number?.toString() || '',
        });
      }
      setIsEditing(false);
    } catch (err) {
      console.error("ProfilePage: handleSaveChanges - Save changes error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault(); // If it's a button in a form context, prevent default
    if (!user?.identification) return;
    console.log('ProfilePage: handleDeleteAccount - Deleting account for user ID:', user.identification);
    if (window.confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible y tus reportes serán desvinculados.')) {
      setIsLoading(true);
      setError(null);
      setSuccessMessage('');
      try {
        const response = await fetch(`/api/neighbors/${user.identification}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (!response.ok) {
          console.error('ProfilePage: handleDeleteAccount - Response not OK. Status:', response.status, 'Data:', data);
          throw new Error(data.message || `Error ${response.status} deleting account`);
        }
        console.log('ProfilePage: handleDeleteAccount - Delete successful. Data:', data);
        setSuccessMessage(data.message || 'Cuenta eliminada con éxito.');
        logout(); 
        navigate('/registrarse'); 
      } catch (err) {
        console.error("ProfilePage: handleDeleteAccount - Delete account error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  console.log('ProfilePage: Rendering. isLoading:', isLoading, 'User ID:', user?.identification, 'formData.email:', formData.email, 'Error:', error);

  if (!user && !isLoading) {
    console.log('ProfilePage: Render - No user, not loading. Redirecting or showing message.');
    return <p>Verificando sesión...</p>; // Changed message
  }
  if (isLoading && !formData.email && !error) { // Show loading only if no form data yet and no error
    console.log('ProfilePage: Render - Loading profile...');
      return <p>Cargando perfil...</p>;
  }
  if (error && !successMessage) { // Show error if error exists and no success message to override
      console.log('ProfilePage: Render - Displaying error message.');
      // Not returning here, error message is displayed above the form
  }
  if (!user?.identification && !isLoading){ // If after initial load, user ID is still not there
    console.log('ProfilePage: Render - No user ID after load, should be redirected by useEffect.');
    return <p>No se pudo cargar la información del usuario. Por favor, intente iniciar sesión de nuevo.</p>;
  }

  return (
    <div className="profile-page-container">
      <h2 className="profile-title">Mi Perfil</h2>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} disabled={!isEditing || isLoading} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Primer Apellido</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} disabled={!isEditing || isLoading} required />
        </div>

        <div className="form-group">
          <label htmlFor="secondLastName">Segundo Apellido</label>
          <input type="text" id="secondLastName" name="secondLastName" value={formData.secondLastName} onChange={handleChange} disabled={!isEditing || isLoading} />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} disabled={!isEditing || isLoading} />
        </div>

        {isEditing ? (
          <div className="form-actions">
            <button type="button" onClick={handleSaveChanges} className="profile-button save-button" disabled={isLoading}>
              {isLoading ? 'Guardando...' : 'Guardar Cambios'}
            </button>
            <button type="button" className="profile-button cancel-button" onClick={handleEditToggle} disabled={isLoading}>
              Cancelar
            </button>
          </div>
        ) : (
          <button type="button" className="profile-button edit-button" onClick={handleEditToggle} disabled={isLoading || !!error}>
            Editar Información
          </button>
        )}
      </form>

      <div className="profile-section danger-zone">
        <h3 className="profile-section-title">Zona Peligrosa</h3>
        <p>La eliminación de la cuenta es permanente y los reportes asociados serán desvinculados.</p>
        <button type="button" onClick={handleDeleteAccount} className="profile-button delete-button" disabled={isLoading}>
          {isLoading ? 'Eliminando...' : 'Eliminar Mi Cuenta'}
        </button>
      </div>
    </div>
  );
}

export default ProfilePage; 