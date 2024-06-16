import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <h1>ITL Land Ventures</h1>
        <p>Our website is currently under development. Stay connected with us through our social media channels!</p>
        <div className="social-container">
          <ul className="social-links">
            <li>
              <a href="https://www.instagram.com/itllandventures/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span className="hover-text">On Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/itllandventures" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <span className="hover-text">Like our Facebook page</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/255768779517" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <span className="hover-text">Message us on WhatsApp</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@itllandventures" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <span className="hover-text">Watch our YouTube videos</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/ITL_LANDVENTURE" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span className="hover-text">Us on Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;