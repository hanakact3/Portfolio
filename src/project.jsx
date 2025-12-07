import { useState } from 'react';
import './project.css';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    img: '/portss.png',
    alt: 'Portfolio Home screenshot',
    description:
      'React-based personal portfolio showcasing my education, projects and contact information, with a custom layout and navigation.',
  },
  {
    id: 2,
    title: 'Phonebook GUI Application',
    img: '/phonebookJava.png',
    alt: 'Phonebook Entry Window',
    description:
      'Desktop phonebook built in Java using JavaFX, with custom UI styling and input validation for managing contacts.',
  },
  {
    id: 3,
    title: 'MongoDB Aggregation Lab',
    img: '/aggregations.png',
    alt: 'MongoDB aggregation pipeline',
    description:
      'Set of aggregation pipelines to filter and analyze restaurant and Airbnb datasets using the MongoDB Aggregation Framework.',
  },
];

export default function Project() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <section
            key={project.id}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-image-wrapper">
              <img
                src={project.img}
                alt={project.alt}
                className="project-image"
              />
              <span className="project-cta">Click to view</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </section>
        ))}
      </div>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={activeProject.img}
              alt={activeProject.alt}
              className="project-modal-image"
            />
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <button
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
