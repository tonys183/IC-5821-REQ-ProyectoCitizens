import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js'; // Re-import useAuth
import { FaCog, FaQuestionCircle } from 'react-icons/fa'; // Import icons
import './Sidebar.css';

function Sidebar() {
  const { user } = useAuth(); // Get user from context
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path;
  const isBasePathActive = (basePath) => location.pathname.startsWith(basePath);

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav top-nav">
        <ul>
          <li className={isBasePathActive('/reportes') ? 'active' : ''}>
            <Link to="/reportes">Reportes</Link>
          </li>
          <li className={isActive('/alertas') ? 'active' : ''}> 
            <Link to="/alertas">Alertas</Link> 
          </li>
        </ul>
      </nav>

      <div className="sidebar-separator"></div>

      <nav className="sidebar-nav bottom-nav">
        <ul>
          <li className={isActive('/perfil') ? 'active' : ''}> 
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        {user && (
          <div className="user-info">
            <p>
              {(user.role === 'NEIGHBOR' && user.profile?.first_name) ||
               (user.role === 'MUNICIPALITY' && user.profile?.name) ||
               user.email}
            </p> 
          </div>
        )}
        <div className="footer-icons">
          <Link to="/ayuda" className="sidebar-icon-link" title="Ayuda">
            <FaQuestionCircle />
          </Link>
          <Link to="/configuracion" className={`sidebar-icon-link ${isActive('/configuracion') ? 'active' : ''}`} title="Configuración">
            <FaCog />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar; 