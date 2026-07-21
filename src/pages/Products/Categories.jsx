import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { categoryList } from '../../config/siteConfig.js';
import { getImage } from '../../utils/helpers.js';

export default function Categories() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Categories', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Product Categories</h1>
            <p>Explore our comprehensive range of HVAC products</p>
          </div>
          <div className="categories-grid">
            {categoryList.map((cat, idx) => (
              <Link key={idx} to={`/${cat.slug}`} className="cat_bx">
                <div className="cat-img">
                  <img src={getImage(cat.image)} alt={cat.name} />
                </div>
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <span className="cat-link">View Products <FiArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
