import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import ProductSidebar from '../../components/common/ProductSidebar.jsx';
import { productData } from '../../data/products.js';

export default function ProductList({ category }) {
  useMeta(category);

  const data = productData[category];

  if (!data) {
    return (
      <div className="container page-section">
        <p>Category not found.</p>
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
              <div className="category-header">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>

              {data.image && (
                <div className="category-banner">
                  <img src={data.image} alt={data.title} />
                </div>
              )}

              <div className="category-description">
                <p>{data.longDescription}</p>
              </div>

              {data.features && data.features.length > 0 && (
                <div className="category-features">
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

              {data.products && data.products.length > 0 && (
                <div className="products-listing">
                  <h2>Products in this Category</h2>
                  <div className="products-grid">
                    {data.products.map((product, idx) => (
                      <Link key={idx} to={`/${product.slug}`} className="fet_out">
                        <div className="fet_img">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="fet_info">
                          <h3>{product.name}</h3>
                          <span className="view-link">View Details <FiArrowRight /></span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
