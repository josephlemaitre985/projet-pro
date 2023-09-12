import React from 'react';
import { useNavigate } from 'react-router-dom'; // Nouvelle importation
import Header from './Header';
import Footer from './Footer';
import Slider from "react-slick";
import MapComponent from './Map';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css';
import './Footer.css';
import PeopleDrink from '../images/PeopleDrink.png';

const HomePage = () => {
  const navigate = useNavigate(); // Utilisation du hook

  const goToQuestionnaire = () => {
    navigate('/questionnaire'); // Redirection vers la page du questionnaire
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homepage-container">
      <Header />

      <main>
        <div className="section description-section">
          <h1>Trouvez le meilleur de la nuit près de vous</h1>
          <h2>Bars, boîtes de nuit et événements spéciaux en un seul clic</h2>
          <p>Découvrez les meilleures adresses pour sortir dans votre ville ou à proximité. Qu'il s'agisse d'une soirée tranquille dans un bar ou d'une nuit dansante en boîte de nuit, nous avons tout ce qu'il vous faut. Restez également informé des soirées à thème et des événements spéciaux autour de vous. Commencez l'aventure maintenant.</p>
        </div>

        <div className="section find-my-spot-section">
          <h2>Prêt à trouver le lieu parfait pour votre soirée ?</h2>
          <button onClick={goToQuestionnaire}>Trouver mon spot</button> {/* Mise à jour du onClick */}
        </div>

        <div className="section preview-section">
          <Slider {...sliderSettings}>
            <div className="slide-content">
              <img src={PeopleDrink} alt="Aperçu 1" />
              <div className="slide-text">Votre texte ici</div>
            </div>

            <div className="slide-content">
              <img src="chemin_vers_image2.png" alt="Aperçu 2" />
              <div className="slide-text">Un autre texte ici</div>
            </div>
            {/* ... ajoutez autant de slides que vous le souhaitez */}
          </Slider>
        </div>

        <div className="section map-section">
          <MapComponent />
        </div>
      </main>

      
        <Footer />
      
    </div>
  );
};

export default HomePage;
