import React from 'react';
import MapComponent from './Map';
import Header from './Header';
import Footer from './Footer';  // Importation du composant Footer
import './BarsAndClubs.css';
import './Footer.css'

const BarsAndClubs = () => {
    return (
        <div className="bars-and-clubs-container">
            <Header />
            <h1 className="bars-and-clubs-title">Carte des Bars et Boîtes de Nuit</h1>
            <div className="bars-and-clubs-map-container">
                <MapComponent />
            </div>
            <Footer />  {/* Ajout du composant Footer ici */}
        </div>
    );
};

export default BarsAndClubs;
