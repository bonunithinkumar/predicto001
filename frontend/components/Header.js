import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div className="mobile-sidebar-container">
        {/* Mobile menu icon */}
        <div className="mobile-menu-icon">
          <i className="fas fa-bars"></i>
        </div>

        {/* Mobile sidebar */}
        <div id="mobileSidebar" className="mobile-sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="/images/logo.png" alt="Predicto Logo" />
            </div>
            <button className="sidebar-close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="sidebar-search">
            <input type="text" placeholder="Search..." />
            <button><i className="fas fa-search"></i></button>
          </div>
          
          <nav className="sidebar-nav">
            <a href="/dashboard"><i className="fas fa-home"></i> Dashboard</a>
            <a href="/predictions"><i className="fas fa-chart-line"></i> Predictions</a>
            <a href="/markets"><i className="fas fa-globe"></i> Markets</a>
            <a href="/portfolio"><i className="fas fa-briefcase"></i> Portfolio</a>
            <a href="/settings"><i className="fas fa-cog"></i> Settings</a>
          </nav>
          
          <div className="sidebar-profile">
            <div className="profile-info">
              <img src="/images/avatar.png" alt="User Avatar" />
              <div>
                <h4>John Doe</h4>
                <p>Premium Member</p>
              </div>
            </div>
            <a href="/profile" className="profile-link">View Profile</a>
          </div>
        </div>

        {/* Overlay */}
        <div id="sidebarOverlay" className="sidebar-overlay"></div>
      </div>
    </div>
  );
};

export default Header; 