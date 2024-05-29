import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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