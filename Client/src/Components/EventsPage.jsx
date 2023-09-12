import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './EventsPage.css';

const EventsPage = () => {
    const [eventType, setEventType] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const events = [
        { id: 1, type: 'bar', name: 'Soirée Jazz', date: '15 Septembre 2023', venue: 'Bar Le Swing', description: "Venez profiter d'une soirée jazz avec notre groupe maison et des invités spéciaux." },
        { id: 2, type: 'club', name: 'Nuit Electro', date: '18 Septembre 2023', venue: 'Boîte Euphoria', description: 'Les meilleurs DJs de la région vous feront danser toute la nuit.' },
        { id: 3, type: 'club', name: 'Soirée 90s', date: '20 Septembre 2023', venue: 'Boîte Retro', description: "Replongez dans les années 90 avec cette soirée spéciale. N'oubliez pas vos vêtements vintage!" },
        { id: 4, type: 'bar', name: 'Quiz Night', date: '17 Septembre 2023', venue: 'Bar Le Savant', description: 'Venez tester vos connaissances et gagner des prix lors de notre célèbre Quiz Night!' },
        { id: 5, type: 'bar', name: 'Soirée Vin & Fromage', date: '19 Septembre 2023', venue: 'Bar L\'Épicurien', description: 'Découvrez notre sélection de vins locaux accompagnés des meilleurs fromages.' }
    ];

    const filteredEvents = events.filter(event => {
        if (eventType && event.type !== eventType) return false;
        // Vous pouvez ajouter d'autres logiques pour le filtrage basé sur les dates ici
        return true;
    });

    return (
        <div className="events-page-container">
            <Header />
            
            <h1 className="events-title">Événements organisés par les Bars et Boîtes de Nuit</h1>
            
            <div className="filter-section">
                <label>
                    Type d'établissement :
                    <select value={eventType} onChange={e => setEventType(e.target.value)}>
                        <option value="">Tous</option>
                        <option value="bar">Bar</option>
                        <option value="club">Boîte de nuit</option>
                    </select>
                </label>
                
                <label>
                    Quand :
                    <select value={dateFilter} onChange={e => setDateFilter(e.target.value)}>
                        <option value="">Tous</option>
                        <option value="thisWeek">Cette semaine</option>
                        <option value="nextWeek">La semaine prochaine</option>
                        <option value="thisMonth">Dans le mois</option>
                    </select>
                </label>
            </div>

            {/* Contenu relatif aux événements */}
            <div className="events-content">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event-card">
                        <h2>{event.name}</h2>
                        <p>Date : {event.date}</p>
                        <p>Lieu : {event.venue}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
