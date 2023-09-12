import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-item">Accueil</Link>
            <Link to="/bars" className="navbar-item">Bars et Boîtes</Link>
            <Link to="/profile" className="navbar-item">Profile</Link>
            <Link to="/evenements" className="navbar-item">Évènements</Link>
        </div>
    );
};

export default Navbar;
