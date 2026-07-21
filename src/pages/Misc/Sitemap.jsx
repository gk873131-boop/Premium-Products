import { Link } from 'react-router-dom';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { sidebarCategories } from '../../config/siteConfig.js';

export default function Sitemap() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Sitemap', active: true },
  ];

  const sections = [
    {
      title: 'Main Pages',
      links: [
        { label: 'Home', path: '/index' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Our Mission', path: '/our-mission' },
        { label: 'Our Vision', path: '/our-vision' },
        { label: 'Contact Us', path: '/contact-us' },
        { label: 'Sitemap', path: '/sitemap' },
      ],
    },
    {
      title: 'Products',
      links: sidebarCategories.map((c) => ({ label: c.name, path: `/${c.slug}` })),
    },
    {
      title: 'Gallery',
      links: [
        { label: 'Image Gallery', path: '/gallery' },
        { label: 'Video Gallery', path: '/videos' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'FAQ', path: '/faq' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'News', path: '/news' },
        { label: 'Featured Products', path: '/featured-products' },
        { label: 'Hot Products', path: '/hot-products' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms & Conditions', path: '/terms-conditions' },
        { label: 'Legal Disclaimer', path: '/legal-disclaimer' },
      ],
    },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Sitemap</h1>
            <p>Navigate through all pages of our website</p>
          </div>

          <div className="sitemap-grid">
            {sections.map((section, idx) => (
              <div key={idx} className="sitemap-section">
                <h2>{section.title}</h2>
                <ul>
                  {section.links.map((link, lidx) => (
                    <li key={lidx}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
