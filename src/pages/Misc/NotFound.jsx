import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="page-section not-found-section">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/index" className="btn-primary">
            <FiHome /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
