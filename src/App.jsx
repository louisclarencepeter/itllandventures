import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsNightMode(mediaQuery.matches);
    const handleChange = (e) => {
      setIsNightMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const googleTagManagerScript = document.createElement("script");
    googleTagManagerScript.async = true;
    googleTagManagerScript.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_TAG_MANAGER_ID";

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "YOUR_GOOGLE_TAG_MANAGER_ID");

    document.body.appendChild(googleTagManagerScript);
  }, []);

  return (
    <div className={`App ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <h1>ITL Land Ventures</h1>
        <p>Our website is currently under development. Stay connected with us through our social media channels!</p>
        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/itllandventures/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
              <span>Follow us on Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
              <span>Like our Facebook page</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/255768779517" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Message ITL LAND VENTURES on WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@itllandventures" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
              <span>Watch our YouTube videos</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/ITL_LANDVENTURE" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
              <span>Follow us on Twitter</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
