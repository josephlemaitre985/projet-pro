import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './ProfilePage.css'
import './Footer.css'

const ProfilePage = () => {
    const [isProfessional, setIsProfessional] = useState(false);

    return (
        <div className="page-container">
            <Header />

            <div className="profile-container">
            <h1 className="profile-title">Connexion</h1>

                
                <div className="user-type-selection">
                    <button className={isProfessional ? "" : "active"} onClick={() => setIsProfessional(false)}>Particulier</button>
                    <button className={isProfessional ? "active" : ""} onClick={() => setIsProfessional(true)}>Professionnel</button>
                </div>
                
                <label>Email :</label>
                <input type="email" placeholder="Entrez votre email" />

                <label>Mot de passe :</label>
                <input type="password" placeholder="Entrez votre mot de passe" />

                <div className="buttons-group">
                    <button>Se connecter</button>
                    <button>S'inscrire</button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;