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

    const initializeChatbase = () => {
      (function() {
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.setAttribute('chatbotId', '_uKBoYS6yXAh9HztcRRrK');
        script.setAttribute('domain', 'www.chatbase.co');
        script.setAttribute('data-namespace', 'chatbase');
        script.async = true;
        document.body.appendChild(script);
    
        window.embeddedChatbotConfig = {
          chatbotId: "_uKBoYS6yXAh9HztcRRrK",
          domain: "www.chatbase.co",
          config: {
            iconWidth: 35,
            iconHeight: 35,
            iconBackground: '#282c34',
            iconBorderRadius: '50%',
            iconBorderColor: '#FF0000',
            iconBorderWidth: '2px',
            position: 'bottom-left',
            iconMargin: {
              right: '20px',
              bottom: '20px'
            },
            mobile: {
              iconWidth: 40,
              iconHeight: 40,
              iconBackground: '#282c34',
              iconBorderRadius: '50%',
              iconBorderColor: '#FF0000',
              iconBorderWidth: '2px',
              iconMargin: {
                right: '20px',
                bottom: '20px'
              }
            }
          }
        };
      })();
    };

    initializeCMP();
    initializeChatbase();
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