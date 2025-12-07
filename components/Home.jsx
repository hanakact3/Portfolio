import './Home.css';

export default function Home() {
  return (
    <div className="home-bg">
      <section className="home-card">
        <div className="home-card-header">
          <div>
            <h2>Welcome to Ana&apos;s Portfolio</h2>
            <p>
              Shaping ideas into code, and code into possibilities.
            </p>
          </div>
        </div>

        <div className="home-card-body">
          <h3>Mission Statement</h3>
          <p>
           My mission is to craft modern, intuitive applications that not only solve real-world problems but also enrich everyday digital experiences. I aim to merge creativity with engineering discipline, building solutions that are reliable, inclusive, and forward-looking. As I grow in my journey as a Software Engineering student, I embrace challenges as opportunities to learn, innovate, and contribute to a future where technology empowers people and drives meaningful change.
          </p>
        </div>

        <button
          className="home-card-button"
          onClick={() => (window.location.href = '/about')}
        >
          About Me
        </button>
      </section>
    </div>
  );
}
