import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/bottom-nav.css';

const BottomNav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3000/api/auth/user/logout', { withCredentials: true });
      await axios.get('http://localhost:3000/api/auth/food-partner/logout', { withCredentials: true });
      navigate('/register');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Try again.');
    }
  };

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Bottom Navigation">
      <div className="bottom-nav__inner">

        {/* Home */}
        <NavLink to="/" end className={({ isActive }) =>
          `bottom-nav__item ${isActive ? 'is-active home-active' : ''}`}>
          <span className="bottom-nav__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
            </svg>
          </span>
          <span className="bottom-nav__label">Home</span>
        </NavLink>

        {/* Saved */}
        <NavLink to="/saved" className={({ isActive }) =>
          `bottom-nav__item ${isActive ? 'is-active saved-active' : ''}`}>
          <span className="bottom-nav__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
            </svg>
          </span>
          <span className="bottom-nav__label">Saved</span>
        </NavLink>

        {/* Logout */}
        <button className="bottom-nav__item logout-btn" onClick={handleLogout}>
          <span className="bottom-nav__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </span>
          <span className="bottom-nav__label">Logout</span>
        </button>

      </div>
    </nav>
  );
};

export default BottomNav;
