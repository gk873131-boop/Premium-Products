import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } from 'react-icons/fi';
import { siteConfig, navItems } from '../../config/siteConfig.js';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (path) => {
    if (path === '/index' || path === '/') {
      return pathname === '/' || pathname === '/index';
    }
    return pathname.startsWith(path);
  };

  const isDropdownActive = (children) => {
    return children.some((child) => isActive(child.path));
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-info">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
              <FiPhone /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <FiMail /> {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-inner">
            <Link to="/index" className="logo">
              <img src="/src/assets/images/logo.png" alt={siteConfig.name} />
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>

            <nav
              className={`main-nav${mobileOpen ? ' open' : ''}`}
              ref={dropdownRef}
            >
              <ul className="nav-list">
                {navItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`nav-item${item.children ? ' has-dropdown' : ''}${
                      item.children && isDropdownActive(item.children)
                        ? ' dropdown-active'
                        : ''
                    }`}
                    onMouseEnter={() =>
                      item.children && setOpenDropdown(idx)
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children ? (
                      <>
                        <button
                          className={`nav-link${isDropdownActive(item.children) ? ' active' : ''}`}
                          onClick={() =>
                            setOpenDropdown(openDropdown === idx ? null : idx)
                          }
                        >
                          {item.label} <FiChevronDown className="dropdown-arrow" />
                        </button>
                        <ul
                          className={`dropdown${openDropdown === idx ? ' open' : ''}`}
                        >
                          {item.children.map((child, cidx) => (
                            <li key={cidx}>
                              <Link
                                to={child.path}
                                className={isActive(child.path) ? ' active' : ''}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`nav-link${isActive(item.path) ? ' active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
