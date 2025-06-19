import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <h1>{t('contactPage.title')}</h1>
      <p>{t('contactPage.intro')}</p>
      <div className="contact-info">
        <h2>{t('contactPage.infoTitle')}</h2>
        <p>
          <strong>{t('contactPage.emailLabel')}:</strong> desarrollosocial@munialajuela.go.cr 
        </p>
        <p>
          <strong>{t('contactPage.phoneLabel')}:</strong> +506 2446-2300
        </p>
        <p>
          <strong>{t('contactPage.addressLabel')}:</strong> {t('contactPage.addressValue')}
        </p>
      </div>
    </div>
  );
};

export default ContactPage; 