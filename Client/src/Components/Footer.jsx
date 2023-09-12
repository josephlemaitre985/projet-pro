import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Vous pouvez ajouter d'autres informations générales ici, si nécessaire */}
      
      <div className="social-icons">
        <a href="https://www.instagram.com/votre_compte/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/votre_compte" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.facebook.com/votre_compte" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
