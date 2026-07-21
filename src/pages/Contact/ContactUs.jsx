import { useState } from 'react';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { siteConfig } from '../../config/siteConfig.js';
import { submitContactForm } from '../../services/ContactService.js';

export default function ContactUs() {
  useMeta('contact-us');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Contact Us', active: true },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);
    formData.set('form_id', 'contactForm');

    const result = await submitContactForm(formData);
    setStatus(result.success ? 'success' : 'error');
    setMessage(result.message);
    setSubmitting(false);

    if (result.success) {
      e.target.reset();
    }
  };

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Contact Us</h1>
            <p>Get in touch with our team for all your HVAC needs</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have a question about our products or services? We're here to help. Contact us using
                the form or the details below.
              </p>
              <ul className="contact-details">
                <li>
                  <FiMapPin />
                  <div>
                    <strong>Address</strong>
                    <span>{siteConfig.address}</span>
                  </div>
                </li>
                <li>
                  <FiPhone />
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                  </div>
                </li>
                <li>
                  <FiMail />
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-form-wrap">
              <h2>Send Us a Message</h2>

              {status === 'success' && (
                <div className="form-success">Thank you! Your message has been sent successfully.</div>
              )}
              {status === 'error' && (
                <div className="form-error">{message || 'An error occurred. Please try again.'}</div>
              )}

              <form onSubmit={handleSubmit} className="contact_form_bg">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c_name">Name *</label>
                    <input type="text" id="c_name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c_email">Email *</label>
                    <input type="email" id="c_email" name="email" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c_phone">Phone</label>
                    <input type="tel" id="c_phone" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c_subject">Subject</label>
                    <input type="text" id="c_subject" name="subject" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c_message">Message *</label>
                  <textarea id="c_message" name="message" rows="5" required />
                </div>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Sending...' : <>Send Message <FiSend /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
