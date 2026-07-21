import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { siteConfig, sidebarCategories } from '../../config/siteConfig.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <img src="/src/assets/images/ft-logo.png" alt={siteConfig.name} />
            <p>{siteConfig.tagline}</p>
            <div className="footer-social">
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>

          <div className="footer-col footer-products">
            <h4>Products</h4>
            <ul>
              {sidebarCategories.map((cat, idx) => (
                <li key={idx}>
                  <Link to={`/${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FiMapPin />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <FiPhone />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <FiMail />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            <Link to="/legal-disclaimer">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
