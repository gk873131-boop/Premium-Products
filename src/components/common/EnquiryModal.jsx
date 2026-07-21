import { useState } from 'react';
import { FiX, FiSend } from 'react-icons/fi';
import { submitContactForm } from '../../services/ContactService.js';

export default function EnquiryModal({ isOpen, onClose, productName }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);
    formData.set('form_id', 'enquiryfrm');
    formData.set('product', productName);

    const result = await submitContactForm(formData);
    setStatus(result.success ? 'success' : 'error');
    setMessage(result.message);
    setSubmitting(false);

    if (result.success) {
      e.target.reset();
    }
  };

  const handleClose = () => {
    setStatus('');
    setMessage('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <FiX />
        </button>
        <h2>Product Enquiry</h2>
        <p className="modal-product-name">Product: <strong>{productName}</strong></p>

        {status === 'success' && (
          <div className="form-success">Thank you! Your enquiry has been sent.</div>
        )}
        {status === 'error' && (
          <div className="form-error">{message || 'An error occurred. Please try again.'}</div>
        )}

        <form onSubmit={handleSubmit} className="contact_form_bg">
          <div className="form-group">
            <label htmlFor="enq_name">Name *</label>
            <input type="text" id="enq_name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="enq_email">Email *</label>
            <input type="email" id="enq_email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="enq_phone">Phone</label>
            <input type="tel" id="enq_phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="enq_message">Message *</label>
            <textarea id="enq_message" name="message" rows="4" required defaultValue={`I am interested in ${productName}. Please provide more information.`} />
          </div>
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? 'Sending...' : <>Send Enquiry <FiSend /></>}
          </button>
        </form>
      </div>
    </div>
  );
}
