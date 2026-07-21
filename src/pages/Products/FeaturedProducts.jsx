import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import ProductSidebar from '../../components/common/ProductSidebar.jsx';
import { productData } from '../../data/products.js';
import { getImage } from '../../utils/helpers.js';

export default function FeaturedProducts() {
  useMeta('default');

  const featured = [];
  Object.values(productData).forEach((cat) => {
    if (cat.products) {
      cat.products.forEach((p) => {
        if (featured.length < 8) featured.push(p);
      });
    }
  });

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Featured Products', active: true },
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
                <h1>Featured Products</h1>
                <p>Discover our most popular HVAC products</p>
              </div>
              <div className="products-grid">
                {featured.map((product, idx) => (
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
