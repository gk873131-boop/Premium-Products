import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { getImage } from '../../utils/helpers.js';

export default function AboutUs() {
  useMeta('about-us');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'About Us', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={getImage('uploaded/cms/ab.jpg')} alt="About Premium Products" />
            </div>
            <div className="about-content">
              <h1>About Premium Products</h1>
              <p>
                Premium Products is a trusted supplier of HVAC equipment in Australia, offering a
                comprehensive range of air handling units, fan coil units, HVAC coils, EC fans, heat
                exchangers, and dehumidifiers.
              </p>
              <p>
                With a commitment to quality and customer satisfaction, we have established ourselves
                as a reliable partner for commercial and industrial HVAC projects across the country.
                Our products are sourced from leading manufacturers and engineered to meet the highest
                standards of performance and reliability.
              </p>
              <p>
                Our team of experienced professionals is dedicated to providing exceptional service,
                from product selection to after-sales support. We work closely with our clients to
                understand their specific requirements and deliver tailored solutions that meet their
                needs.
              </p>
              <div className="about-links">
                <Link to="/our-mission" className="btn-secondary">
                  Our Mission <FiArrowRight />
                </Link>
                <Link to="/our-vision" className="btn-secondary">
                  Our Vision <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-light">
        <div className="container">
          <div className="about-grid reverse">
            <div className="about-image">
              <img src={getImage('uploaded/cms/ab3.jpg')} alt="Our Facility" />
            </div>
            <div className="about-content">
              <h2>Why Choose Us?</h2>
              <ul className="about-list">
                <li>High-quality HVAC products from trusted manufacturers</li>
                <li>Custom solutions tailored to your project requirements</li>
                <li>Experienced team with deep industry knowledge</li>
                <li>Competitive pricing and reliable delivery</li>
                <li>Comprehensive after-sales support</li>
                <li>Serving clients across Australia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
