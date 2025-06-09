import React from 'react';
import './DashboardPage.css';
import { useTranslation } from 'react-i18next';

function DashboardPage() {
  const { t } = useTranslation();
  return (
    <div className="dashboard-container">
      <h1>{t('dashboard.title')}</h1>
      <p>{t('dashboard.subtitle')}</p>
      <p>{t('dashboard.description')}</p>
      {}
    </div>
  );
}

export default DashboardPage; 