import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-root">
      <header className="layout-header">
 
  <div className="layout-logo">
    <img src="/logo-nobckg.png" alt="Logo Ana" />
    <span className="layout-name">Ana</span>
  </div>

  <nav className="layout-nav-center">
    <Link to="/">HOME</Link>
    <span className="nav-dot">•</span>
    <Link to="/about">ABOUT</Link>
    <span className="nav-dot">•</span>
    <Link to="/education">EDUCATION</Link>
    <span className="nav-dot">•</span>
    <Link to="/project">PROJECTS</Link>
    <span className="nav-dot">•</span>
    <Link to="/services">SERVICES</Link>
  </nav>

  <div className="layout-nav-right">
    <Link to="/contact" className="layout-contact-btn">
      CONTACT
    </Link>
  </div>
</header>

      <main className="layout-main">{children}</main>
    </div>
  );
}
