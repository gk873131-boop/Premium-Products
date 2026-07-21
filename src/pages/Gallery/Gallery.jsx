import { useState } from 'react';
import { FiZoomIn, FiX } from 'react-icons/fi';
import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';
import { getImage } from '../../utils/helpers.js';

const galleryImages = [
  { src: getImage('thumb_cache/thumb_855_840_gall_img3.jpg'), title: 'HVAC Installation 1' },
  { src: getImage('thumb_cache/thumb_855_840_gall_img8.jpg'), title: 'HVAC Installation 2' },
  { src: getImage('thumb_cache/thumb_855_840_untitled.png'), title: 'Product Showcase 1' },
  { src: getImage('thumb_cache/thumb_855_840_product_banner_waves_ahu-1536x320.png'), title: 'AHU Banner' },
  { src: getImage('thumb_cache/thumb_855_840_whatsapp-image-2025-04-03-at-12.42.26-pm.jpeg'), title: 'EC Fan Installation' },
  { src: getImage('thumb_cache/thumb_855_840_whatsapp-image-2025-04-03-at-12.56.16-pm.jpeg'), title: 'Coil Installation' },
  { src: getImage('thumb_cache/thumb_855_840_whatsapp-image-2025-04-03-at-2.28.24-pm.jpeg'), title: 'HVAC Project' },
  { src: getImage('thumb_cache/thumb_700_650_17-air-handling-unit-m-1.jpg'), title: 'Air Handling Unit' },
  { src: getImage('thumb_cache/thumb_700_650_condenser.jpg'), title: 'Condenser Unit' },
  { src: getImage('thumb_cache/thumb_700_650_dx-coil-1024x778.png'), title: 'DX Coil' },
  { src: getImage('thumb_cache/thumb_700_650_floor-mounted-ahu11.png'), title: 'Floor Mounted AHU' },
  { src: getImage('thumb_cache/thumb_700_650_hot-water-coil.png'), title: 'Hot Water Coil' },
];

export default function Gallery() {
  useMeta('gallery');
  const [lightbox, setLightbox] = useState(null);

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Gallery', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Image Gallery</h1>
            <p>Explore our HVAC projects and product installations</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="gallery-item"
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <FiZoomIn />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close">
            <FiX />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <p>{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
