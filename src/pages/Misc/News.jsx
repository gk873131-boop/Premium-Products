import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

const newsItems = [
  {
    title: 'Premium Products Launches New Range of EC Fans',
    date: 'March 2025',
    excerpt: 'We are excited to announce our new range of energy-efficient EC fans, offering up to 70% energy savings and variable speed control for HVAC applications.',
  },
  {
    title: 'Custom Air Handling Units for Major Commercial Project',
    date: 'February 2025',
    excerpt: 'Premium Products has successfully delivered custom air handling units for a major commercial development in Melbourne, showcasing our capability in custom HVAC solutions.',
  },
  {
    title: 'New CO2 Coil Range Now Available',
    date: 'January 2025',
    excerpt: 'Our new CO2 coil range is now available, designed for high-pressure CO2 refrigerant systems with corrosion-resistant construction.',
  },
  {
    title: 'Premium Products Expands Product Line with Heat Recovery Units',
    date: 'December 2024',
    excerpt: 'We have expanded our product offering with the addition of heat recovery units featuring VRF condenser technology for enhanced energy efficiency.',
  },
];

export default function News() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'News', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Latest News</h1>
            <p>Stay updated with our latest products and company news</p>
          </div>

          <div className="news-list">
            {newsItems.map((item, idx) => (
              <article key={idx} className="news-item">
                <div className="news-date">{item.date}</div>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
