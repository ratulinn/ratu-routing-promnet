export default function About() {
  return (
    <div>
      <div className="home-hero">
        <h3>Kenalan Lebih Dekat</h3>
        <h1>Tentang Ratu</h1>
        <p>
          Beberapa hal mengenai perjalanan kuliah, organisasi, dan aktivitas keseharianku.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <img 
            src="/ratulin.jpeg" 
            alt="Profil" 
            className="about-img" 
          />
          <h3>Mahasiswa UPI</h3>
          <p>Mahasiswa angkatan 2025 dari Universitas Pendidikan Indonesia program studi Pendidikan Ilmu Komputer.</p>
        </div>

        <div className="about-card">
          <img 
            src="/organisasi.jpeg" 
            alt="Organisasi" 
            className="about-img" 
          />
          <h3>Organisasi</h3>
          <p>Tergabung dalam Badan Legislatif Mahasiswa (BLM) di lingkup himpunan mahasiswa sebagai komisi pengawas.</p>
        </div>

        <div className="about-card">
          <img 
            src="/kepanitiaan.jpeg" 
            alt="Kepanitiaan" 
            className="about-img" 
          />
          <h3>Kepanitiaan</h3>
          <p>Aktif berpartisipasi dalam berbagai kepanitiaan baik dalam lingkup program studi maupun fakultas.</p>
        </div>

        <div className="about-card">
          <img 
            src="/MatthiasVonHerhardt.jpg" 
            alt="Favorite 2D" 
            className="about-img" 
          />
          <h3>Favorite 2D</h3>
          <p>Suka sekali dengan satu tokoh tidak nyata ini, he's the real of handsome man in my eyes.</p>
        </div>
      </div>
    </div>
  );
}