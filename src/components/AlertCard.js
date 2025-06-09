import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './AlertCard.css';

function AlertCard({ alert, userRole, onDelete }) {
  const { t, i18n } = useTranslation();
  const { id, title, content, updated_at, author } = alert;

  const formatDate = (dateString) => {
    const lang = i18n.language === 'es' ? 'es-CR' : 'en-US';
    return new Date(dateString).toLocaleString(lang, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const authorName = author?.municipalityProfile?.name || t('alertCard.defaultAuthor');

  return (
    <div className="alert-card">
      <div className="alert-card-header">
        <h2 className="alert-card-title">{title}</h2>
        {userRole === 'MUNICIPALITY' && (
          <div className="alert-card-actions">
            <Link to={`/alertas/${id}/editar`} className="action-button edit-button">
              <FaEdit />
            </Link>
            <button onClick={() => onDelete(id)} className="action-button delete-button">
              <FaTrash />
            </button>
          </div>
        )}
      </div>
      <div className="alert-card-body">
        <p>{content}</p>
      </div>
      <div className="alert-card-footer">
        <span>{t('alertCard.publishedBy')}: <strong>{authorName}</strong></span>
        <span>{t('alertCard.lastUpdated')}: {formatDate(updated_at)}</span>
      </div>
    </div>
  );
}

export default AlertCard; 