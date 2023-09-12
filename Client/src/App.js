import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Questionnaire from './Components/Questionnaire';
import BarsAndClubs from './Components/BarsAndClubs';
import ProfilePage from   './Components/ProfilePage';
import EventsPage from './Components/EventsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/bars" element={<BarsAndClubs />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/evenements' element={<EventsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
