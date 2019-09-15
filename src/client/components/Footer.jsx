import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="copyright">
      { `Copyright © ${(new Date()).getFullYear()} - Thomas Herzog & Allister Moon` }
    </div>
  </div>
);

export default Footer;
