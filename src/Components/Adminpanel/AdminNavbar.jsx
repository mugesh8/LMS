import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ setIsCollapsed, isCollapsed }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      setIsCollapsed(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 fixed-top">
        <div className="container-fluid">
          <button
            className="hamburger-btn"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger-icon ${!isCollapsed ? 'active' : ''}`}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </button>
          <Link className="navbar-brand" to="/dashboard">
            Dashboard
          </Link>
          <div className="ms-auto d-flex align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-link text-dark dropdown-toggle"
                type="button"
                id="userMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-5"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuButton">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isMobile && !isCollapsed && (
        <div className="sidebar-overlay" onClick={() => setIsCollapsed(true)} />
      )}
    </>
  );
};

export default AdminNavbar;