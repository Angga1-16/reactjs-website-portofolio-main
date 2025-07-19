import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/KecerdasanMajemuk.css';

function KecerdasanMajemuk() {
  const [hasil, setHasil] = useState(null);
  const navigate = useNavigate();

  const pertanyaan = [
    "Apakah kamu suka menulis cerita, puisi, atau membuat pidato?",
    "Apakah kamu senang memecahkan teka-teki logika atau soal matematika?",
    "Apakah kamu suka menggambar, melukis, atau merancang sesuatu secara visual?",
    "Apakah kamu menikmati kegiatan fisik seperti olahraga, menari, atau membuat kerajinan tangan?",
    "Apakah kamu suka bernyanyi, memainkan alat musik, atau mendengarkan musik?",
    "Apakah kamu senang bekerja sama dalam kelompok atau mudah memahami orang lain?",
    "Apakah kamu suka merenung, memahami diri sendiri, atau memiliki tujuan hidup yang jelas?",
    "Apakah kamu tertarik pada alam, hewan, tumbuhan, atau fenomena alam?",
    "Apakah kamu sering berpikir tentang makna hidup, kematian, atau hal-hal filosofis?",
    "Apakah kamu memiliki ketertarikan pada kegiatan keagamaan atau spiritual?",
    "Apakah kamu peduli dengan nilai moral dan suka membela kebenaran?",
    "Apakah kamu senang membantu orang lain dan mudah bergaul di lingkungan sosial?",
    "Apakah kamu mampu mengendalikan emosi dan memahami perasaan sendiri?",
    "Apakah kamu mudah beradaptasi dengan lingkungan atau situasi baru?",
    "Apakah kamu kreatif dalam menemukan solusi atau ide-ide baru?"
  ];

  const kategori = [
    "Linguistik", "Logika Matematika", "Visual Spasial", "Kinestetik", "Musikal",
    "Interpersonal", "Intrapersonal", "Naturalis", "Eksistensial", "Spiritual",
    "Moral", "Sosial", "Emosional", "Adaptif", "Kreatif"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const skorPerKategori = {};

    for (let i = 1; i <= 15; i++) {
      const val = parseInt(data.get(`q${i}`));
      skorPerKategori[kategori[i - 1]] = isNaN(val) ? 0 : val;
    }

    const total = Object.values(skorPerKategori).reduce((a, b) => a + b, 0);
    const jumlahJawaban = Object.values(skorPerKategori).filter((v) => v > 0).length;

    if (jumlahJawaban !== 15) {
      alert("Semua pertanyaan harus kamu isi!");
      return;
    }

    const kategoriDominan = Object.entries(skorPerKategori).sort((a, b) => b[1] - a[1])[0];

    setHasil(`Skor kamu: ${total} dari 75. Kecerdasan dominan kamu adalah: ${kategoriDominan[0]} (${kategoriDominan[1]} poin).`);
  };

  return (
    <div className="container">
      <h1>Kuis Kecerdasan Majemuk</h1>
      <p>Jawab pertanyaan berikut untuk mengetahui kecerdasan majemuk kamu!</p>
      <form onSubmit={handleSubmit}>
        {pertanyaan.map((q, i) => (
          <div key={i} className="question-card">
            <label>{i + 1}. {q}</label>
            <select name={`q${i + 1}`} required>
              <option value="">-- Pilih Jawaban --</option>
              <option value="1">Tidak Sama Sekali</option>
              <option value="2">Jarang</option>
              <option value="3">Kadang-kadang</option>
              <option value="4">Sering</option>
              <option value="5">Sangat Sering</option>
            </select>
          </div>
        ))}

        <div className="button-group">
          <button type="submit" className="submit-btn">Lihat Hasil</button>
          <button type="button" onClick={() => navigate(-1)} className="back-btn">← Kembali</button>
        </div>
      </form>

      {hasil && (
        <div className="result-box">
          <strong>{hasil}</strong>
        </div>
      )}
    </div>
  );
}

export default KecerdasanMajemuk;
