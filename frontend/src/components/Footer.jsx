import React from 'react';

const Footer = () => (
  <footer>
    <div style={{
      maxWidth: 1100,
      margin: '0 auto',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      © {new Date().getFullYear()} LeadGen | Educational Framework
    </div>
  </footer>
);

export default Footer;
