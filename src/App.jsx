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
    const intervalId = setInterval(checkNightMode, 60000);

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

    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', '_uKBoYS6yXAh9HztcRRrK');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;
    document.body.appendChild(script);

    window.embeddedChatbotConfig = {
      chatbotId: "_uKBoYS6yXAh9HztcRRrK",
      domain: "www.chatbase.co",
      config: {
        iconWidth: 40,  // Set icon width to 40px to accommodate the border
        iconHeight: 40,  // Set icon height to 40px to accommodate the border
        iconBackground: '#282c34',
        iconBorderRadius: '50%',
        iconBorderColor: '#FF0000',
        iconBorderWidth: '2px',
        position: 'bottom-left',
        iconMargin: {
          right: '10px',  // Add margin from the right side
          bottom: '10px'  // Add margin from the bottom
        },
        mobile: {
          iconWidth: 40,
          iconHeight: 40,
          iconBackground: '#282c34',
          iconBorderRadius: '50%',
          iconBorderColor: '#FF0000',
          iconBorderWidth: '2px',
          iconMargin: {
            right: '10px',  // Add margin from the right side
            bottom: '10px'  // Add margin from the bottom
          }
        }
      }
    };
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${isNightMode ? 'night-mode' : ''}`}>
        <img src="/logo.png" className="App-logo" alt="logo" width="200" height="200" />
        <h1>ITL Land Ventures</h1>
        <p>Our website is currently under development. Stay connected with us through our social media channels!</p>
        <ul className="social-links">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <span>Follow us on Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <span>Like our Facebook page</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              <span>Message us on WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <span>Watch our YouTube videos</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <span>Follow us on Twitter</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
