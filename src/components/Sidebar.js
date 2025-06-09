import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import './Sidebar.css';
import { FaCog, FaQuestionCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav top-nav">
        <ul>
          <li><NavLink to="/dashboard" end>{t('sidebar.dashboard')}</NavLink></li>
          <li><NavLink to="/reportes">{t('sidebar.reports')}</NavLink></li>
          <li><NavLink to="/alertas">{t('sidebar.alerts')}</NavLink></li>
        </ul>
      </nav>

      <div className="sidebar-separator"></div>

      <nav className="sidebar-nav bottom-nav">
         <ul>
           <li><NavLink to="/perfil" end>{t('sidebar.profile')}</NavLink></li>
         </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <p>
            {(user?.role === 'NEIGHBOR' && user?.profile?.first_name) ||
             (user?.role === 'MUNICIPALITY' && user?.profile?.name) ||
             user?.email}
          </p>
        </div>
        <div className="footer-icons">
          <NavLink to="/contacto" className="sidebar-icon-link" title={t('sidebar.contact')} end>
            <FaQuestionCircle />
          </NavLink>
          <NavLink to="/configuracion" className="sidebar-icon-link" title={t('sidebar.settings')} end>
            <FaCog />
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar; 