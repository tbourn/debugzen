import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dLogo from '../assets/images/d-logo.png';
import '../styles/logo.css';

const Logo: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      className="logo-container"
      style={isHomePage ? { pointerEvents: 'none', cursor: 'default' } : {}}
    >
      {isHomePage ? (
        <img src={dLogo} alt="D Logo" className="logoIcon" />
      ) : (
        <Link to="/">
          <img src={dLogo} alt="D Logo" className="logoIcon" />
        </Link>
      )}
      <span>ebugZen</span>
    </div>
  );
};

export default Logo;
