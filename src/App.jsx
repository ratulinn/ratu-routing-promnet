import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import './index.css';

function App() {
  return (
    <div>
      {/* Navbar Atas */}
      <nav className="navbar">
        <Link to="/" className="nav-brand">RatuWebsite</Link>
        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Konten Halaman Berdasarkan Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;