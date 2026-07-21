import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { getImage } from '../../utils/helpers.js';

export default function OurMission() {
  useMeta('our-mission');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Mission', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={getImage('mission.jpg')} alt="Our Mission" />
            </div>
            <div className="about-content">
              <h1>Our Mission</h1>
              <p>
                Our mission is to deliver high-performance air handling units, fan coil units, and
                HVAC coil solutions across Australia. We strive to provide our clients with products
                that combine superior quality, energy efficiency, and reliability.
              </p>
              <p>
                We are committed to understanding the unique needs of each client and delivering
                solutions that exceed their expectations. Our focus on innovation and continuous
                improvement ensures that we remain at the forefront of the HVAC industry.
              </p>
              <p>
                By maintaining strong relationships with leading manufacturers and investing in our
                team's expertise, we aim to be the preferred HVAC equipment supplier for commercial
                and industrial projects across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
