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
      const existingScript = document.querySelector('script[src="https://www.chatbase.co/embed.min.js"]');
      if (!existingScript) {
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
          }
        };
      }
    };

    initializeCMP();
    initializeChatbase();
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
            <a href="https://www.instagram.com/itllandventures/">
              <FontAwesomeIcon icon={faInstagram} />
              <span>Follow us on Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
              <span>Like our Facebook page</span>
            </a>
          </li>
          <li>
            <a href="https://whatsapp.com">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Message us on WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
              <span>Watch our YouTube videos</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
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