import React, { useState } from 'react';
import Header from './Header';
import './Questionnaire.css';

const Questionnaire = () => {
    const [answers, setAnswers] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answers);
    };

    return (
        <div>
        <Header />
        <div className="questionnaire-container">
            <h2>Trouver mon spot</h2>
            <form onSubmit={handleSubmit}>
                <div className="question">
                    <label>Préférez-vous un bar ou une boîte de nuit ?</label>
                    <select name="barOrClub" onChange={handleInputChange}>
                        <option value="">Je ne sais pas</option>
                        <option value="bar">Bar</option>
                        <option value="club">Boîte de nuit</option>
                    </select>
                </div>
                
                <div className="question">
                    <label>Que souhaitez-vous boire ?</label>
                    <select name="drinkType" onChange={handleInputChange}>
                        <option value="">Je ne sais pas</option>
                        <option value="cocktail">Cocktail</option>
                        <option value="wine">Vin</option>
                        <option value="beer">Bière</option>
                        <option value="whiskey">Whiskey</option>
                        <option value="softDrink">Boisson non-alcoolisée</option>
                    </select>
                </div>
                <div className="question">
                    <label>Voulez-vous manger des tapas ?</label>
                    <select name="tapas" onChange={handleInputChange}>
                        <option value="">Je ne sais pas</option>
                        <option value="yes">Oui</option>
                        <option value="no">Non</option>
                    </select>
                </div>
                <div className="question">
                    <label>Type de bar</label>
                    <select name="barType" onChange={handleInputChange}>
                        <option value="">Je ne sais pas</option>
                        <option value="karaoke">Karaoké</option>
                        <option value="dancing">Dansant</option>
                        <option value="chill">Relaxant</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>
                <div className="question">
                    <label>Quelle est votre tranche d'âge ?</label>
                    <select name="ageRange" onChange={handleInputChange}>
                        <option value="">Je ne souhaite pas répondre</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46-55">46-55</option>
                        <option value="56+">56+</option>
                    </select>
                </div>
                
                <button type="submit">Trouver</button>
            </form>
        </div>
        </div>
    );
}

export default Questionnaire;
