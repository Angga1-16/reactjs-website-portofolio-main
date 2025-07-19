export const listTugas = [
  {
    id: '1',
    judul: 'Tugas 1',
    deskripsi: `
Pelajari Logika First Order dan Contoh Kasusnya
Pengertian: Logika First Order (First Order Logic/FOL) adalah sistem logika yang menggunakan predikat, kuantor, dan variabel untuk menyatakan fakta tentang objek di dunia nyata.

Ciri-ciri utama:
- Memiliki kuantor universal (∀) dan eksistensial (∃)
- Menyatakan sifat objek dengan predikat (misalnya: Manusia(x))
- Digunakan dalam AI, basis data, sistem pakar, dll

Contoh kasus:
- ∀x (Demam(x) ∧ Batuk(x) → Flu(x)) → Semua yang demam dan batuk menderita flu
- ∀x (Anggota(x) → ∃y (Meminjam(x, y))) → Setiap anggota perpustakaan meminjam setidaknya satu buku

2. Menuliskan Ekspresi dalam Logika First Order
Pernyataan yang diberikan:
- Semua mahasiswa informatika suka kecerdasan buatan
- Setiap yang paham pemrograman suka kecerdasan buatan
- Kesimpulan: Semua mahasiswa ilmu komputer paham pemrograman

Notasi:
M(x): x adalah mahasiswa informatika
C(x): x suka kecerdasan buatan
P(x): x paham pemrograman
K(x): x adalah mahasiswa ilmu komputer

Terjemahan dalam FOL:
- ∀x (M(x) → C(x))
- ∀x (P(x) → C(x))
- Kesimpulan: ∀x (K(x) → P(x))

Evaluasi Kesimpulan: Tidak valid. Kita hanya tahu bahwa dua kelompok berbeda (mahasiswa informatika dan yang paham pemrograman) menyukai hal yang sama, yaitu kecerdasan buatan. Tidak ada hubungan logis yang membuktikan bahwa mahasiswa ilmu komputer paham pemrograman hanya dari dua premis di atas.

3. Konversi Kalimat ke Logika First Order dan Pembuktian
Pernyataan yang diberikan:
- Setiap apel atau pear adalah buah
- Setiap buah memiliki warna kuning atau hijau atau merah
- Tidak ada pear berwarna merah
- Setiap buah manis tidak berwarna hijau

Notasi:
A(x): x adalah apel
R(x): x adalah pear
B(x): x adalah buah
W(x,y): x berwarna y
S(x): x manis

Terjemahan dalam FOL:
- ∀x ((A(x) ∨ R(x)) → B(x))
- ∀x (B(x) → (W(x,kuning) ∨ W(x,hijau) ∨ W(x,merah)))
- ∀x (R(x) → ¬W(x,merah))
- ∀x ((B(x) ∧ S(x)) → ¬W(x,hijau))

Pernyataan yang ingin dibuktikan: Jika pear tidak kuning maka pear tidak manis
Dalam logika: ∀x (R(x) ∧ ¬W(x,kuning) → ¬S(x))

Pembuktian langkah demi langkah:
- Asumsikan x adalah pear dan tidak kuning → R(x) ∧ ¬W(x,kuning)
- Dari (1): pear adalah buah → B(x)
- Dari (2): karena buah harus berwarna kuning, hijau, atau merah, dan pear tidak boleh merah (3), dan tidak kuning → maka W(x,hijau)
- Dari (4): jika buah berwarna hijau → tidak manis → W(x,hijau) → ¬S(x)
- Karena pear berwarna hijau → pear tidak manis

Kesimpulan: ✅ Pernyataan "Jika pear tidak kuning maka pear tidak manis" adalah BENAR dan terbukti logis dari premis yang ada.
`
  },
  {
    id: '2',
    judul: 'Tugas 2',
    deskripsi: `
Silakan isi deskripsi Tugas 2 di sini.
`
  },
  {
    id: '3',
    judul: 'Sistem Pakar',
    deskripsi: `
Silakan isi deskripsi Tugas 3 di sini.
`
  }
];