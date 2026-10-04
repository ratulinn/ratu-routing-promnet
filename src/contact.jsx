export default function Contact() {
  return (
    <div>
      <div className="home-hero">
        <h3>Let's connet with me👌</h3>
        <h1>Kontak Saya</h1>
        <p>
          Temui saya di GitHub atau sapa saya melalui Instagram.
        </p>
      </div>

      <div className="card-grid">
        <div className="feature-card">
          <div className="card-icon">
            <i className="fa-brands fa-github">💻</i>
          </div>
          <h3>GitHub</h3>
          <p>Lihat berbagai proyek kode dan repository web development yang pernah saya buat.</p>
          <a 
            href="https://github.com/ratulin" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '15px', color: '#d9778c', fontWeight: 'bold', textDecoration: 'none' }}
          >
            Kunjungi GitHub &rarr;
          </a>
        </div>

        <div className="feature-card">
          <div className="card-icon">
            <i className="fa-brands fa-instagram">📸</i>
          </div>
          <h3>Instagram</h3>
          <p>Ikuti keseharian, cerita, dan berbagai momen seru lainnya di akun Instagram saya.</p>
          <a 
            href="https://instagram.com/ratulinnn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '15px', color: '#d9778c', fontWeight: 'bold', textDecoration: 'none' }}
          >
            Kunjungi Instagram @ratulinnn &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}