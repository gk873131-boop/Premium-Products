import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { sidebarCategories } from '../../config/siteConfig.js';

export default function ProductSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="list_left">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="sidebar-cat-list">
        {sidebarCategories.map((cat, idx) => (
          <li key={idx} className={pathname === `/${cat.slug}` ? 'active' : ''}>
            <Link to={`/${cat.slug}`}>
              <FiChevronRight /> {cat.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-enquiry-box">
        <h4>Need Help?</h4>
        <p>Contact us for product enquiries and quotes.</p>
        <Link to="/contact-us" className="btn-enquiry">Send Enquiry</Link>
      </div>
    </aside>
  );
}
