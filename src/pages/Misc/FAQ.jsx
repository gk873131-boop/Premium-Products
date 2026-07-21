import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

const faqData = [
  {
    question: 'What types of HVAC products do you supply?',
    answer: 'We supply a comprehensive range of HVAC products including air handling units, fan coil units, HVAC coils (chilled water, hot water, steam, evaporator, condenser, DX coils), EC fans, heat exchangers, and dehumidifiers.',
  },
  {
    question: 'Do you offer custom HVAC solutions?',
    answer: 'Yes, we offer custom air handling units and coils tailored to your specific project requirements. Our team works closely with you to design and manufacture products that meet your exact needs.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve clients across all of Australia. Our products are available for commercial and industrial projects nationwide.',
  },
  {
    question: 'How can I request a quote?',
    answer: 'You can request a quote by contacting us through our contact form, by phone, or by email. Our team will respond promptly with pricing and product information.',
  },
  {
    question: 'What is the typical lead time for orders?',
    answer: 'Lead times vary depending on the product and order quantity. Standard products are typically available within 2-4 weeks, while custom orders may take 4-8 weeks. Contact us for specific lead time information.',
  },
  {
    question: 'Do you provide after-sales support?',
    answer: 'Yes, we provide comprehensive after-sales support including technical assistance, warranty service, and spare parts availability. Our team is committed to ensuring your HVAC systems operate efficiently.',
  },
  {
    question: 'Are your products energy efficient?',
    answer: 'Yes, our products are designed with energy efficiency in mind. Our EC fans, in particular, offer up to 70% energy savings compared to traditional AC fans, and our AHUs are engineered for optimal performance.',
  },
  {
    question: 'What refrigerants are compatible with your coils?',
    answer: 'Our coils are compatible with a wide range of refrigerants including R410A, R32, R134a, and CO2 (R744). We can customize coils for specific refrigerant requirements.',
  },
];

export default function FAQ() {
  useMeta('default');
  const [openIndex, setOpenIndex] = useState(0);

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'FAQ', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our products and services</p>
          </div>

          <div className="faq-list">
            {faqData.map((faq, idx) => (
              <div key={idx} className={`faq-item${openIndex === idx ? ' open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  <span>{faq.question}</span>
                  {openIndex === idx ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {openIndex === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
