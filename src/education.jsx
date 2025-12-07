import './education.css';

export default function Education() {
  return (
    <div className="education-page">
      <section className="edu-item">
        <img
          src="/ccgl.png"
          alt="Centennial College campus"
          className="edu-photo"
        />
        <div className="edu-overlay">
          <h3>Centennial College, Toronto</h3>
          <p>Software Engineering Technician – 3rd semester (2023 – Present)</p>
        </div>
      </section>

      <section className="edu-item">
        <img
          src="/LogoCaa-1.png"
          alt="Anglo Americano School, Bogotá , Colombia"
          className="edu-photo"
        />
        <div className="edu-overlay">
          <h3>Anglo Americano School, Bogotá</h3>
          <p>High School Diploma – 2023</p>
        </div>
      </section>
    </div>
  );
}
