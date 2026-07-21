import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import ProductSidebar from '../../components/common/ProductSidebar.jsx';
import { productData } from '../../data/products.js';

export default function HotProducts() {
  useMeta('default');

  const hot = [];
  const categories = ['air-handling-units', 'coils', 'ec-fans'];
  categories.forEach((catSlug) => {
    const cat = productData[catSlug];
    if (cat && cat.products) {
      cat.products.forEach((p) => {
        if (hot.length < 6) hot.push(p);
      });
    }
  });

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Hot Products', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="product-layout">
            <ProductSidebar />
            <div className="product-content">
              <div className="section-header">
                <h1>Hot Products</h1>
                <p>Check out our trending HVAC products</p>
              </div>
              <div className="products-grid">
                {hot.map((product, idx) => (
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
          </div>
        </div>
      </section>
    </>
  );
}
