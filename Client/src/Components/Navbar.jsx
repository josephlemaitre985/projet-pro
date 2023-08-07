import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/" className="navbar-item">Accueil</a>
      <a href="/bars" className="navbar-item">Bars et Boîtes</a>
      <a href="/épiceries" className="navbar-item">Épiceries fines et Caves</a>
      <a href='/producteurs' className='navbar-item'>Producteurs</a>
      <a href='/profile' className='navbar-item'>Profile</a>
      <a href='/panier'  className='navbar-item'>Panier</a>

      {/* Ajoutez d'autres liens de navigation ici */}
    </div>
  );
};

export default Navbar;
