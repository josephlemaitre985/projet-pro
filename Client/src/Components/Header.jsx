import React from 'react';
import './Header.css'; // Si vous souhaitez ajouter des styles spécifiques pour le Header
import logo from '../images/logo.png';
import Navbar from './Navbar';  // Assurez-vous que le chemin d'importation est correct



const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
      <img src={logo} alt="Nom du site" />

        
      </div>
      <Navbar />

      <h1 className="site-title">Drink'in</h1>
      
    </header>
  );
};

export default Header;
