import React from 'react';

const Header = () => (
  <header>
    <div style={{
      maxWidth: 1100,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px'
    }}>
      <h2 style={{ margin: 0 }}>LeadGen</h2>
      <nav>
        <a href="#lead" style={{
          color: '#fff',
          padding: '0 12px',
          textDecoration: 'none',
          display: 'inline-block'
        }}>Lead</a>
        {/* Add more menu items here for future features */}
      </nav>
    </div>
  </header>
);

export default Header;
