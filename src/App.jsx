import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SunCalc from 'suncalc';
import './App.css';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const checkNightMode = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          const now = new Date();
          const sunsetTime = SunCalc.getTimes(now, latitude, longitude).sunset;

          setIsNightMode(now > sunsetTime);
        });
      }
    };

    checkNightMode();
    const intervalId = setInterval(checkNightMode, 60000); // Check every minute

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const initializeCMP = async () => {
      if (window.UC_UI) {
        await window.UC_UI.initialize();
      } else {
        const script = document.getElementById('usercentrics-cmp');
        if (script) {
          script.onload = async () => {
            if (window.UC_UI) {
              await window.UC_UI.initialize();
            }
          };
        }
      }
    };

    initializeCMP();
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${isNightMode ? 'night-mode' : ''}`}>
        <img src="/logo.png" className="App-logo" alt="logo" width="200" height="200" />
        <h1>ITL Land Ventures</h1>
        <p>Our website is currently under development. Stay connected with us through our social media channels!</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span>Follow us on Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <span>Like our Facebook page</span>
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <span>Message us on WhatsApp</span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            <span>Watch our YouTube videos</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <span>Follow us on Twitter</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;