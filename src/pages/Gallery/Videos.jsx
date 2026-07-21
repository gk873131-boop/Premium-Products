import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Air Handling Units Overview' },
  { id: 'dQw4w9WgXcQ', title: 'HVAC Coils Manufacturing' },
  { id: 'dQw4w9WgXcQ', title: 'EC Fans Installation Guide' },
  { id: 'dQw4w9WgXcQ', title: 'Heat Recovery Systems' },
];

export default function Videos() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Video Gallery', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1>Video Gallery</h1>
            <p>Watch our product demonstrations and installation videos</p>
          </div>

          <div className="videos-grid">
            {videos.map((video, idx) => (
              <div key={idx} className="video-item">
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3>{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
