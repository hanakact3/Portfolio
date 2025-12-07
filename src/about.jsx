import './About.css';
import portfolioImg from './portfolioimg.jpg';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-left">
        <div className="about-photo-wrapper">
          <img
            src={portfolioImg}
            alt="Ana Maria Castro Trujillo"
            className="about-photo"
          />
        </div>
      </div>

      <div className="about-text">
        <h2>Ana Maria Castro Trujillo</h2>
        <p>
          I am a Software Engineering student at Centennial College in Toronto with a strong interest in web and application design. I enjoy solving problems through technology and have hands-on experience building a sensor-guided robot and exploring custom applications for real-time control. While my long-term goal is to become a full-stack developer, I am currently more focused on front-end development, where I can combine creativity and precision to deliver intuitive, user-friendly experiences.
        </p>
        <p>
          I learn quickly, pay close attention to detail, and take pride in producing work with quality and clarity. I am dedicated, collaborative, and always open to teamwork, believing that the best solutions come from sharing ideas and learning together. My mission is to grow as a developer by embracing challenges, contributing my creativity and technical skills to innovative projects, and ultimately building technology that empowers people and creates meaningful digital experiences.
        </p>
        <p>
          My main focus is learning modern web development, databases and system design so I can
          contribute to real-world projects in the future.
        </p>
        <a href="/ResumeW.pdf" download className="about-resume">
          Download my Resume (PDF)
        </a>
      </div>
    </div>
  );
}