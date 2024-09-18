import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';  // Import Helmet
import { FaUserCircle, FaCog, FaBell, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/css/header.css'; // Import your CSS file

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle menu clicks
  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Toggle menu or close if same
  };

  // Hide all dropdowns when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest('.header-icons') && !event.target.closest('.dropdown-menu')) {
      setOpenMenu(null); // Close all dropdowns
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header>
      {/* Use Helmet to set the document title */}
      <Helmet>
        <title>Financial Data Dashboard</title>
        <meta name="description" content="Track and analyze financial data, stocks, cryptocurrencies, and company performance." />
      </Helmet>

      <div className="header-title">
        <h1>Financial Data Dashboard</h1>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>

          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMobileMenu}> Overview</NavLink>

          <NavLink to="/stocks" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMobileMenu}>Stocks</NavLink>

          <NavLink to="/crypto" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMobileMenu}>CryptoCurrency</NavLink>

          <NavLink to="/company-performance" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMobileMenu}>Performance</NavLink>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button><FaSearch /></button>
      </div>

      <div className="header-icons">
        {/* Settings icon */}
        <div className="settings-icon" onClick={() => handleMenuClick('settings')}>
          <FaCog />
          {openMenu === 'settings' && (
            <div className="dropdown-menu show">
              <p>Settings</p>
              <NavLink to="/general">General</NavLink>
              <NavLink to="/account">Account</NavLink>
              <NavLink to="/privacy">Privacy</NavLink>
            </div>
          )}
        </div>

        {/* Notification icon */}
        <div className="notification-icon" onClick={() => handleMenuClick('notification')}>
          <FaBell />
          {openMenu === 'notification' && (
            <div className="dropdown-menu show">
              <p>Notifications</p>
              <NavLink to="/notifications">View All</NavLink>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="profile-icon" onClick={() => handleMenuClick('profile')}>
          <FaUserCircle />
          {openMenu === 'profile' && (
            <div className="dropdown-menu show">
              <p>Profile</p>
              <NavLink to="/profile">View Profile</NavLink>
              <NavLink to="/settings">Settings</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
