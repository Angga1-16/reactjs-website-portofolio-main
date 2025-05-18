import { Link } from 'react-router-dom';
import { listTugas } from '../data/DataTugas';
import '../styles/Tugas.css';

function Tugas() {
  return (
    <div className="tugas-container">
      <h2>Daftar Tugas</h2>
      <ul className="tugas-list">
        {listTugas.map((tugas) => (
          <li key={tugas.id}>
            <Link to={`/detail-tugas/${tugas.id}`}>{tugas.judul}</Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="tugas-home-btn">Kembali ke Home</Link>
    </div>
  );
}

export default Tugas;