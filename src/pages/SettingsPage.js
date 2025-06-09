import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { useTheme } from '../context/ThemeContext.js';
import './SettingsPage.css'; 
import { useTranslation } from 'react-i18next';

function SettingsPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="settings-page-container">
      <h2 className="settings-title">{t('settings.title')}</h2>
      
      <div className="settings-section">
        <h3 className="settings-section-title">{t('settings.themeTitle')}</h3>
        <ul className="settings-options-list">
          <li className="settings-option-item">
            <span>{t('settings.currentTheme')}: {theme === 'dark' ? t('settings.darkTheme') : t('settings.lightTheme')}</span>
            <button onClick={toggleTheme} className="settings-action-button action-button">
              {t('settings.toggleTheme')}
            </button>
          </li>
        </ul>
      </div>

      <div className="settings-section">
        <h3 className="settings-section-title">{t('settings.languageTitle')}</h3>
        <ul className="settings-options-list">
          <li className="settings-option-item">
            <span>{t('settings.currentLanguage')}: {i18n.language.toUpperCase()}</span>
            <div className="language-buttons">
              <button onClick={() => changeLanguage('es')} className="settings-action-button action-button" disabled={i18n.language === 'es'}>
                {t('settings.spanish')}
              </button>
              <button onClick={() => changeLanguage('en')} className="settings-action-button action-button" disabled={i18n.language === 'en'}>
                {t('settings.english')}
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div className="settings-section">
        <h3 className="settings-section-title">{t('settings.accountTitle')}</h3>
        <ul className="settings-options-list">
          <li className="settings-option-item">
            <button onClick={handleLogout} className="settings-logout-button action-button">
              {t('settings.logout')}
            </button>
          </li>
          {}
          {
          }
        </ul>
      </div>

      {}
      {}

      {}
    </div>
  );
}

export default SettingsPage; 