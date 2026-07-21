import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb-bar">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`breadcrumb-item${item.active ? ' active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.active || !item.path ? (
                  item.label
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
