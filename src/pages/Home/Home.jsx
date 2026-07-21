import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCpu, FiWind, FiZap, FiThermometer } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import { categoryList, siteConfig } from '../../config/siteConfig.js';
import { getImage } from '../../utils/helpers.js';

const heroSlides = [
  {
    image: getImage('thumb_cache/thumb_1920_585_slide1.jpg'),
    title: 'Premium HVAC Solutions',
    subtitle: 'Engineered for Australian conditions',
  },
];

const featureItems = [
  { icon: FiWind, title: 'Air Handling Units', text: 'High-efficiency AHUs for commercial applications' },
  { icon: FiCpu, title: 'HVAC Coils', text: 'Custom-designed coils for optimal heat transfer' },
  { icon: FiZap, title: 'EC Fans', text: 'Energy-efficient fans with variable speed control' },
  { icon: FiThermometer, title: 'Heat Exchangers', text: 'High-performance heat exchangers for any application' },
];

export default function Home() {
  useMeta('index');
  const [activeSlide] = useState(0);

  return (
    <>
      <section className="hero-slider">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide${idx === activeSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="container">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to="/categories" className="btn-primary">
                  View Products <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {featureItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image">
              <img src={getImage('thumb_cache/thumb_700_650_17-air-handling-unit-m-1.jpg')} alt="Welcome to Premium Products" />
            </div>
            <div className="welcome-content">
              <h2>Welcome to {siteConfig.name}</h2>
              <p>{siteConfig.tagline}</p>
              <p>
                Premium Products is a leading supplier of HVAC equipment in Australia, specializing in
                air handling units, fan coil units, HVAC coils, EC fans, heat exchangers, and
                dehumidifiers. We provide high-quality products engineered for performance, efficiency,
                and reliability.
              </p>
              <p>
                With years of industry experience, our team is dedicated to delivering the best HVAC
                solutions for commercial and industrial applications. Our products are designed to meet
                the diverse needs of our clients across Australia.
              </p>
              <Link to="/about-us" className="btn-secondary">
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Product Categories</h2>
            <p>Explore our comprehensive range of HVAC products</p>
          </div>
          <div className="categories-grid">
            {categoryList.map((cat, idx) => (
              <Link key={idx} to={`/${cat.slug}`} className="cat_bx">
                <div className="cat-img">
                  <img src={getImage(cat.image)} alt={cat.name} />
                </div>
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <span className="cat-link">View Products <FiArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Need a Custom HVAC Solution?</h2>
            <p>Our experts are ready to help you find the perfect product for your project.</p>
            <Link to="/contact-us" className="btn-primary">
              Contact Us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
