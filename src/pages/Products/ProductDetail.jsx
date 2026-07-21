import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight, FiX } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import ProductSidebar from '../../components/common/ProductSidebar.jsx';
import EnquiryModal from '../../components/common/EnquiryModal.jsx';
import { productDetailData } from '../../data/products.js';

export default function ProductDetail({ slug }) {
  useMeta(slug);
  const [modalOpen, setModalOpen] = useState(false);

  const data = productDetailData[slug];

  if (!data) {
    return (
      <div className="container page-section">
        <p>Product not found.</p>
        <Link to="/categories">Back to Categories</Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Products', path: '/categories' },
    { label: data.title, active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="product-layout">
            <ProductSidebar />
            <div className="product-content">
              <div className="pc_box">
                <div className="pc_img">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="pc_details">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <button
                    className="btn-enquiry"
                    onClick={() => setModalOpen(true)}
                  >
                    Send Enquiry <FiArrowRight />
                  </button>
                </div>
              </div>

              {data.features && data.features.length > 0 && (
                <div className="product-features">
                  <h2>Key Features</h2>
                  <ul className="features-list">
                    {data.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.specifications && data.specifications.length > 0 && (
                <div className="product-specs">
                  <h2>Specifications</h2>
                  <table className="specs-table">
                    <tbody>
                      {data.specifications.map((spec, idx) => (
                        <tr key={idx}>
                          <th>{spec.label}</th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="product-enquiry-cta">
                <h3>Interested in this product?</h3>
                <p>Contact us today for a quote or more information.</p>
                <button
                  className="btn-primary"
                  onClick={() => setModalOpen(true)}
                >
                  Send Enquiry <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={data.title}
      />
    </>
  );
}
