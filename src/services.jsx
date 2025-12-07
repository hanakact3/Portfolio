import { useState } from 'react';
import './project.css'; 

const services = [
  {
    id: 1,
    title: 'Web Development',
    img: '/webdev.png',
    alt: 'Web development',
    description:
      'Building responsive web pages using HTML, CSS and JavaScript, including basic React components and navigation.',
  },
  {
    id: 2,
    title: 'Programming',
    img: '/serv1.png',
    alt: 'Programming services',
    description:
      'Implementing small applications and academic projects in Java, JavaFX GUIs and introductory C#.',
  },
  {
    id: 3,
    title: 'Databases & Systems',
    img: '/serv3.png',
    alt: 'Database and system design',
    description:
      'Working with SQL/PL and MongoDB (Atlas and Compass) and designing basic application flows and system connections for user-based applications.',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="projects-page">
      <h2>Services</h2>

      <div className="projects-grid">
        {services.map(service => (
          <section
            key={service.id}
            className="project-card"
            onClick={() => setActiveService(service)}
          >
            <div className="project-image-wrapper">
              <img
                src={service.img}
                alt={service.alt}
                className="project-image"
              />
              <span className="project-cta">Click to view</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </section>
        ))}
      </div>

      {activeService && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveService(null)}
        >
          <div
            className="project-modal"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={activeService.img}
              alt={activeService.alt}
              className="project-modal-image"
            />
            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
            <button
              className="project-modal-close"
              onClick={() => setActiveService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
