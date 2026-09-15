import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { contact, socialLinks } from '../data/socialLinks';
import '../styles/under-construction.css';

function UnderConstructionPage() {
  return (
    <main className="site-shell">
      <section className="launch-page" aria-labelledby="site-title">
        <header className="topbar" aria-label="ITL Land Ventures">
          <img src="/logo.png" className="topbar-logo" alt="ITL Land Ventures logo" />
          <span className="status-pill">New website underway</span>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Land ventures and real estate services</p>
            <h1 id="site-title">ITL Land Ventures</h1>
            <p className="lead">
              We are preparing a clearer digital home for available plots,
              site visit booking, and real estate enquiries.
            </p>

            <div className="actions" aria-label="Primary contact options">
              <a className="primary-action" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                WhatsApp us
              </a>
              <a className="secondary-action" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>

          <aside className="launch-card" aria-label="Current service availability">
            <img src="/logo.png" className="brand-mark" alt="" aria-hidden="true" />
            <div>
              <p className="card-kicker">Still available</p>
              <p className="card-title">Talk to the team while the site is being built.</p>
            </div>
            <ul className="service-list">
              <li>Land availability</li>
              <li>Site visit coordination</li>
              <li>Purchase enquiries</li>
            </ul>
          </aside>
        </div>

        <footer className="social-footer">
          <p>Follow the launch</p>
          <ul className="social-links" aria-label="Social media links">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name}: ${link.label}`}>
                  <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </main>
  );
}

export default UnderConstructionPage;
