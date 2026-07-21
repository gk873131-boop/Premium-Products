import { FiStar } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

const testimonials = [
  {
    name: 'James Anderson',
    company: 'Anderson HVAC Contractors',
    rating: 5,
    text: 'Premium Products has been our go-to supplier for air handling units. The quality and reliability of their products are outstanding, and their team is always helpful and responsive.',
  },
  {
    name: 'Sarah Mitchell',
    company: 'Mitchell Engineering',
    rating: 5,
    text: 'We have been using their HVAC coils for several projects across Melbourne. The custom coils they manufactured for us exceeded our expectations in terms of performance and durability.',
  },
  {
    name: 'David Thompson',
    company: 'Thompson Mechanical Services',
    rating: 5,
    text: 'The EC fans we purchased from Premium Products have significantly reduced energy costs for our clients. The variable speed control and quiet operation are exactly what we needed.',
  },
  {
    name: 'Lisa Chen',
    company: 'Chen Building Solutions',
    rating: 5,
    text: 'Excellent service from start to finish. The team helped us select the right air handling units for our project and provided comprehensive support throughout the installation process.',
  },
  {
    name: 'Michael Roberts',
    company: 'Roberts Facilities Management',
    rating: 4,
    text: 'Quality products at competitive prices. The heat exchangers we ordered were delivered on time and performed exceptionally well. Highly recommended for commercial HVAC projects.',
  },
  {
    name: 'Emma Wilson',
    company: 'Wilson Construction Group',
    rating: 5,
    text: 'Premium Products is a reliable partner for all our HVAC needs. Their product knowledge and customer service are top-notch. We will continue to work with them on future projects.',
  },
];

export default function Testimonials() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Testimonials', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Testimonials</h1>
            <p>What our clients say about our products and services</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      className={i < testimonial.rating ? 'star-filled' : 'star-empty'}
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
