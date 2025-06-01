import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js'; // Re-import useAuth
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
            <Link to="/">Alertas</Link> 
          </li>
        </ul>
      </nav>

      <div className="sidebar-separator"></div>

      <nav className="sidebar-nav bottom-nav">
        <ul>
          <li className={isActive('/perfil') ? 'active' : ''}> 
            <Link to="/">Perfil</Link> 
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        {user && (
          <div className="user-info">
            <p>{user.first_name || user.email}</p> 
          </div>
        )}
        <div className="footer-icons">
          <span>?</span> 
          <span>⚙️</span> 
        </div>
      </div>
    </aside>
  );
}

export default Sidebar; 