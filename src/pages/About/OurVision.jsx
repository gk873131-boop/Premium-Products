import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { getImage } from '../../utils/helpers.js';

export default function OurVision() {
  useMeta('our-vision');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Vision', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={getImage('vision.jpg')} alt="Our Vision" />
            </div>
            <div className="about-content">
              <h1>Our Vision</h1>
              <p>
                We aim to lead the HVAC industry in Australia with innovative air handling units and
                energy-efficient HVAC systems. Our vision is to be recognized as the most trusted and
                reliable supplier of HVAC equipment in the country.
              </p>
              <p>
                We envision a future where every commercial and industrial building in Australia is
                equipped with high-quality, energy-efficient HVAC systems that provide optimal comfort
                while minimizing environmental impact.
              </p>
              <p>
                Through continuous innovation, strategic partnerships, and a commitment to excellence,
                we strive to set new standards in the HVAC industry and contribute to a more
                sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
