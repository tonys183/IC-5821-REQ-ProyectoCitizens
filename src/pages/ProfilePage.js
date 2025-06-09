import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { useTranslation } from 'react-i18next';
import './ProfilePage.css'; // We will create this CSS file

function ProfilePage() {
  const { t } = useTranslation();
  const { user, setUser, logout, isLoading: isAuthLoading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Neighbor fields
    firstName: '',
    lastName: '',
    secondLastName: '',
    phoneNumber: '',
    identification: '',
    // Muni fields
    name: '',
    canton: '',
    // Common field
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // This function populates the form from the user object in AuthContext
  const populateFormFromUser = useCallback(() => {
    if (!user) return;
    
    setFormData({
      email: user.email || '',
      // Populate fields based on role
      firstName: user.role === 'NEIGHBOR' ? user.profile?.first_name || '' : '',
      lastName: user.role === 'NEIGHBOR' ? user.profile?.last_name || '' : '',
      secondLastName: user.role === 'NEIGHBOR' ? user.profile?.second_last_name || '' : '',
      phoneNumber: user.role === 'NEIGHBOR' ? user.profile?.phone_number?.toString() || '' : '',
      identification: user.role === 'NEIGHBOR' ? user.profile?.identification?.toString() || '' : '',
      name: user.role === 'MUNICIPALITY' ? user.profile?.name || '' : '',
      canton: user.role === 'MUNICIPALITY' ? user.profile?.canton || '' : '',
    });
  }, [user]);

  useEffect(() => {
    if (isAuthLoading) {
      // If auth context is still figuring things out, wait.
      return;
    }
    if (user) {
      populateFormFromUser();
      setIsLoading(false);
    } else {
      // If auth is done and there's no user, redirect.
      navigate('/login');
    }
  }, [user, isAuthLoading, navigate, populateFormFromUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setError(null);
    setSuccessMessage('');
    if (isEditing) {
      // If canceling edit, revert to original data
      populateFormFromUser();
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch(`/api/profile`, { // Use the new endpoint
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ // Only send neighbor fields for now as per backend logic
          firstName: formData.firstName,
          lastName: formData.lastName,
          secondLastName: formData.secondLastName,
          phoneNumber: formData.phoneNumber,
        }),
      });
      const data = await response.json(); 
      if (!response.ok) {
        throw new Error(data.message || t('profilePage.errors.updateError'));
      }
      
      setSuccessMessage(data.message || t('profilePage.success.updateSuccess'));
      
      // We need to update the user object in the context
      // The backend should return the updated profile data
      setUser(prevUser => ({
          ...prevUser,
          profile: {
              ...prevUser.profile,
              ...data.profile, // Assuming backend sends back the updated neighborProfile
          }
      }));
      
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm(t('profilePage.dangerZone.confirmDelete'))) {
      setIsLoading(true);
      setError(null);
      const token = localStorage.getItem('authToken');
      try {
        const response = await fetch(`/api/profile`, { // Use the new endpoint
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || t('profilePage.errors.deleteError'));
        }
        logout(); // This will clear context and localStorage
        navigate('/registrarse'); // Navigate to a public page
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  if (isLoading || isAuthLoading) {
      return <p>{t('profilePage.loading')}</p>;
  }

  // Render different profile views based on role
  const renderNeighborProfile = () => (
    <>
      <div className="form-group">
        <label htmlFor="identification">{t('profilePage.labels.identification')}</label>
        <input type="text" id="identification" name="identification" value={formData.identification} disabled />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">{t('profilePage.labels.firstName')}</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} disabled={!isEditing || isLoading} required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">{t('profilePage.labels.lastName')}</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} disabled={!isEditing || isLoading} required />
      </div>
      <div className="form-group">
        <label htmlFor="secondLastName">{t('profilePage.labels.secondLastName')}</label>
        <input type="text" id="secondLastName" name="secondLastName" value={formData.secondLastName} onChange={handleChange} disabled={!isEditing || isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">{t('profilePage.labels.phoneNumber')}</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} disabled={!isEditing || isLoading} />
      </div>
    </>
  );

  const renderMunicipalityProfile = () => (
    <>
      <div className="form-group">
        <label htmlFor="name">{t('profilePage.labels.institutionName')}</label>
        <input type="text" id="name" name="name" value={formData.name} disabled />
      </div>
      <div className="form-group">
        <label htmlFor="canton">{t('profilePage.labels.canton')}</label>
        <input type="text" id="canton" name="canton" value={formData.canton} disabled />
      </div>
    </>
  );


  return (
    <div className="profile-page-container">
      <h2 className="profile-title">{t('profilePage.title')}</h2>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form className="profile-form" onSubmit={handleSaveChanges}>
        <div className="form-group">
          <label htmlFor="email">{t('profilePage.labels.email')}</label>
          <input type="email" id="email" name="email" value={formData.email} disabled />
        </div>

        {/* Render role-specific fields */}
        {user.role === 'NEIGHBOR' ? renderNeighborProfile() : renderMunicipalityProfile()}

        {user.role === 'NEIGHBOR' && ( // Only neighbors can edit their profile for now
          isEditing ? (
            <div className="form-actions">
              <button type="submit" className="save-button submit-button" disabled={isLoading}>
                {isLoading ? t('profilePage.buttons.saving') : t('profilePage.buttons.saveChanges')}
              </button>
              <button type="button" className="cancel-button" onClick={handleEditToggle} disabled={isLoading}>
                {t('profilePage.buttons.cancel')}
              </button>
            </div>
          ) : (
            <button type="button" className="edit-button action-button" onClick={handleEditToggle} disabled={isLoading || !!error}>
              {t('profilePage.buttons.editInfo')}
            </button>
          )
        )}
      </form>

      <div className="profile-section danger-zone">
        <h3 className="profile-section-title">{t('profilePage.dangerZone.title')}</h3>
        <p>{t('profilePage.dangerZone.description')}</p>
        <button type="button" onClick={handleDeleteAccount} className="delete-button action-button" disabled={isLoading}>
          {isLoading ? t('profilePage.buttons.deleting') : t('profilePage.buttons.deleteAccount')}
        </button>
      </div>
    </div>
  );
}

export default ProfilePage; 