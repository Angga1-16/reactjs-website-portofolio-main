import { useParams, Link } from 'react-router-dom';
import { listTugas } from '../data/DataTugas';
import '../styles/Tugas.css';

function DetailTugas() {
  const { id } = useParams();
  const tugas = listTugas.find((t) => t.id === id);

  if (!tugas) {
    return (
      <div className="tugas-container tugas-detail">
        <h2>Tugas tidak ditemukan</h2>
        <Link to="/tugas" className="tugas-back-btn">Kembali ke Daftar Tugas</Link>
      </div>
    );
  }

  // Pisahkan bagian per nomor (khusus untuk Tugas 1)
  let bagian = [];
  if (id === '1') {
    bagian = tugas.deskripsi.trim().split(/\n[1-3]\./).filter(Boolean);
  }

  return (
    <div className="tugas-container tugas-detail">
      <h2>Detail Tugas ID: Tugas{id}</h2>
      {id === '1' && bagian.length > 0 ? (
        <ol>
          {bagian.map((isi, idx) => (
            <li key={idx}>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{isi.trim()}</pre>
            </li>
          ))}
        </ol>
      ) : (
        <pre style={{ whiteSpace: 'pre-wrap' }}>{tugas.deskripsi}</pre>
      )}
      <Link to="/tugas" className="tugas-back-btn">← Kembali</Link>
    </div>
  );
}

export default DetailTugas;