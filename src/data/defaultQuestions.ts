import { Question } from '../types';
import imgBuahKeranjang from '../assets/images/rasio_buah_keranjang_1795060352129.jpg';
import imgKelerengToples from '../assets/images/rasio_kelereng_toples_1795060353535.jpg';
import imgPetaKota from '../assets/images/rasio_peta_kota_1795060354941.jpg';
import imgResepMinuman from '../assets/images/rasio_resep_minuman_1795060354907.jpg';
import imgDenahLapangan from '../assets/images/rasio_denah_lapangan_1795060353977.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================================
  // A. PILIHAN GANDA (20 SOAL: ID 1 - 20)
  // ==========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Rasio Sederhana Dua Kumpulan Benda',
    difficulty: 'Mudah',
    imageUrl: imgBuahKeranjang,
    imageAlt: 'Ilustrasi 4 buah apel merah dan 6 buah pisang kuning',
    text: 'Perhatikan gambar kelompok buah di atas. Rasio paling sederhana dari banyak buah apel terhadap banyak buah pisang adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '4 : 6' },
      { id: 'D', text: '2 : 5' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak buah apel = 4 buah dan banyak buah pisang = 6 buah.\nRasio awal = 4 : 6.\nSederhanakan dengan membagi kedua bilangan dengan FPB-nya (2):\n(4 ÷ 2) : (6 ÷ 2) = 2 : 3.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Rasio Bagian terhadap Keseluruhan',
    difficulty: 'Mudah',
    text: 'Di dalam sebuah kelas terdapat 14 siswa laki-laki dan 21 siswa perempuan. Berapakah rasio paling sederhana dari banyak siswa perempuan terhadap jumlah seluruh siswa di kelas tersebut?',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '2 : 5' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '5 : 3' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah seluruh siswa = 14 + 21 = 35 siswa.\nRasio siswa perempuan terhadap seluruh siswa = 21 : 35.\nBagi kedua bilangan dengan 7:\n(21 ÷ 7) : (35 ÷ 7) = 3 : 5.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Penyederhanaan Rasio Satuan Panjang',
    difficulty: 'Mudah',
    text: 'Panjang sebuah pita merah adalah 75 cm, sedangkan panjang pita biru adalah 1,5 meter. Bentuk rasio paling sederhana dari panjang pita merah terhadap panjang pita biru adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '1 : 3' },
      { id: 'C', text: '2 : 3' },
      { id: 'D', text: '5 : 1' },
    ],
    correctAnswer: 'A',
    explanation:
      'Samakan satuan terlebih dahulu ke sentimeter (cm):\nPanjang pita merah = 75 cm.\nPanjang pita biru = 1,5 m = 1,5 × 100 cm = 150 cm.\nRasio = 75 : 150 = (75 ÷ 75) : (150 ÷ 75) = 1 : 2.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Menentukan Nilai dari Rasio Senilai',
    difficulty: 'Mudah',
    text: 'Rasio banyak buku cerita terhadap buku pelajaran di rak perpustakaan adalah 3 : 5. Jika banyak buku cerita ada 18 buah, maka banyak buku pelajaran di rak tersebut adalah...',
    options: [
      { id: 'A', text: '24 buah' },
      { id: 'B', text: '28 buah' },
      { id: 'C', text: '30 buah' },
      { id: 'D', text: '36 buah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio buku cerita : buku pelajaran = 3 : 5.\nNilai 1 bagian rasio = 18 ÷ 3 = 6 buah.\nBanyak buku pelajaran = 5 × 6 = 30 buah.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Rasio Dua Kumpulan Benda',
    difficulty: 'Mudah',
    imageUrl: imgKelerengToples,
    imageAlt: 'Ilustrasi Toples Biru berisi 15 kelereng biru dan Toples Merah berisi 25 kelereng merah',
    text: 'Perhatikan gambar dua toples kelereng di atas. Toples Biru berisi 15 kelereng biru dan Toples Merah berisi 25 kelereng merah. Berapakah rasio paling sederhana dari banyak kelereng biru terhadap kelereng merah?',
    options: [
      { id: 'A', text: '3 : 4' },
      { id: 'B', text: '3 : 5' },
      { id: 'C', text: '5 : 3' },
      { id: 'D', text: '3 : 8' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak kelereng biru = 15 butir, kelereng merah = 25 butir.\nRasio = 15 : 25.\nSederhanakan dengan membagi kedua bilangan dengan 5:\n(15 ÷ 5) : (25 ÷ 5) = 3 : 5.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Rasio dan Jumlah Dua Besaran',
    difficulty: 'Sedang',
    text: 'Rasio uang tabungan Dayu dan Santi adalah 4 : 7. Jika jumlah uang tabungan mereka berdua adalah Rp220.000,00, berapakah uang tabungan Santi?',
    options: [
      { id: 'A', text: 'Rp80.000,00' },
      { id: 'B', text: 'Rp120.000,00' },
      { id: 'C', text: 'Rp140.000,00' },
      { id: 'D', text: 'Rp160.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah bagian rasio = 4 + 7 = 11 bagian.\nNilai 1 bagian = Rp220.000,00 ÷ 11 = Rp20.000,00.\nUang tabungan Santi = 7 × Rp20.000,00 = Rp140.000,00.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rasio dan Selisih Dua Besaran',
    difficulty: 'Sedang',
    text: 'Rasio umur Ayah dan umur Made adalah 8 : 3. Jika selisih umur Ayah dan Made adalah 25 tahun, berapakah umur Made saat ini?',
    options: [
      { id: 'A', text: '12 tahun' },
      { id: 'B', text: '15 tahun' },
      { id: 'C', text: '18 tahun' },
      { id: 'D', text: '20 tahun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Selisih bagian rasio = 8 - 3 = 5 bagian.\nNilai 1 bagian = 25 tahun ÷ 5 = 5 tahun.\nUmur Made = 3 × 5 tahun = 15 tahun.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Rasio Satuan (Jarak per Liter)',
    difficulty: 'Sedang',
    text: 'Sebuah sepeda motor menempuh jarak 120 km dengan menghabiskan 3 liter bensin. Jika motor tersebut diisi 5 liter bensin, berapakah jarak maksimal yang dapat ditempuh dengan kecepatan yang sama?',
    options: [
      { id: 'A', text: '160 km' },
      { id: 'B', text: '180 km' },
      { id: 'C', text: '200 km' },
      { id: 'D', text: '240 km' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio satuan jarak per liter = 120 km ÷ 3 liter = 40 km/liter.\nUntuk 5 liter bensin, jarak tempuh = 5 × 40 km = 200 km.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Rasio Harga Satuan',
    difficulty: 'Sedang',
    text: 'Di sebuah toko alat tulis, harga 4 buah buku tulis adalah Rp18.000,00. Jika Rani ingin membeli 7 buah buku tulis yang sama, berapakah uang yang harus ia bayarkan?',
    options: [
      { id: 'A', text: 'Rp27.000,00' },
      { id: 'B', text: 'Rp30.500,00' },
      { id: 'C', text: 'Rp31.500,00' },
      { id: 'D', text: 'Rp32.500,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Harga 1 buku tulis (rasio satuan) = Rp18.000,00 ÷ 4 = Rp4.500,00.\nHarga 7 buku tulis = 7 × Rp4.500,00 = Rp31.500,00.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Rasio Waktu dan Produksi',
    difficulty: 'Sedang',
    text: 'Sebuah mesin fotokopi mampu mencetak 180 lembar kertas dalam waktu 3 menit. Banyak lembar kertas yang dapat dicetak oleh mesin tersebut selama 10 menit adalah...',
    options: [
      { id: 'A', text: '480 lembar' },
      { id: 'B', text: '540 lembar' },
      { id: 'C', text: '600 lembar' },
      { id: 'D', text: '720 lembar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kecepatan cetak per menit = 180 lembar ÷ 3 menit = 60 lembar/menit.\nDalam 10 menit = 10 × 60 lembar = 600 lembar.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Rasio Campuran Cat',
    difficulty: 'Sedang',
    text: 'Untuk mengecat dinding kelas, Pak Tukang mencampurkan cat warna putih dan cat warna biru dengan rasio 5 : 2. Jika cat biru yang digunakan sebanyak 6 liter, berapa liter seluruh campuran cat (putih dan biru) yang dihasilkan?',
    options: [
      { id: 'A', text: '15 liter' },
      { id: 'B', text: '18 liter' },
      { id: 'C', text: '21 liter' },
      { id: 'D', text: '24 liter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bagian cat biru = 2 bagian = 6 liter, sehingga 1 bagian = 6 ÷ 2 = 3 liter.\nTotal bagian campuran = 5 + 2 = 7 bagian.\nTotal campuran cat = 7 × 3 liter = 21 liter.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Rasio Skala pada Peta',
    difficulty: 'Mudah',
    imageUrl: imgPetaKota,
    imageAlt: 'Diagram peta jarak Kota P ke Kota Q sepanjang 4 cm dengan Skala 1 : 250.000',
    text: 'Perhatikan gambar peta di atas. Jarak antara Kota P dan Kota Q pada peta adalah 4 cm dengan skala 1 : 250.000. Berapakah jarak sebenarnya antara Kota P dan Kota Q?',
    options: [
      { id: 'A', text: '1 km' },
      { id: 'B', text: '10 km' },
      { id: 'C', text: '25 km' },
      { id: 'D', text: '100 km' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jarak sebenarnya = Jarak pada peta × Penyebut skala\n= 4 cm × 250.000 = 1.000.000 cm.\nUbah cm ke km (dibagi 100.000):\n1.000.000 ÷ 100.000 = 10 km.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Menentukan Skala Peta',
    difficulty: 'Sedang',
    text: 'Jarak sebenarnya antara dua desa di Kabupaten Jembrana adalah 12 km. Pada sebuah peta, jarak kedua desa tersebut digambar sepanjang 3 cm. Skala yang digunakan pada peta tersebut adalah...',
    options: [
      { id: 'A', text: '1 : 40.000' },
      { id: 'B', text: '1 : 300.000' },
      { id: 'C', text: '1 : 400.000' },
      { id: 'D', text: '1 : 4.000.000' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah jarak sebenarnya ke cm: 12 km = 12 × 100.000 cm = 1.200.000 cm.\nSkala = Jarak pada peta : Jarak sebenarnya = 3 : 1.200.000.\nBagi kedua bilangan dengan 3 -> 1 : 400.000.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Menghitung Jarak pada Denah',
    difficulty: 'Sedang',
    text: 'Jarak sebenarnya dari rumah Putu ke sekolah adalah 2,4 km. Jika Putu menggambar denah perjalanan ke sekolah dengan skala 1 : 30.000, berapa sentimeter jarak rumah ke sekolah pada denah tersebut?',
    options: [
      { id: 'A', text: '6 cm' },
      { id: 'B', text: '8 cm' },
      { id: 'C', text: '12 cm' },
      { id: 'D', text: '16 cm' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ubah jarak sebenarnya ke cm: 2,4 km = 2,4 × 100.000 cm = 240.000 cm.\nJarak pada denah = Jarak sebenarnya ÷ Penyebut skala = 240.000 ÷ 30.000 = 8 cm.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Perbandingan Rasio Satuan (Harga Terbaik)',
    difficulty: 'Sedang',
    text: 'Toko A menjual 5 kg beras seharga Rp65.000,00, sedangkan Toko B menjual 8 kg beras jenis yang sama seharga Rp100.000,00. Pernyataan manakah yang tepat mengenai harga beras per kilogram?',
    options: [
      { id: 'A', text: 'Harga beras di Toko A lebih murah Rp500,00/kg dibanding Toko B' },
      { id: 'B', text: 'Harga beras di Toko B lebih murah Rp500,00/kg dibanding Toko A' },
      { id: 'C', text: 'Harga beras di kedua toko sama persis' },
      { id: 'D', text: 'Harga beras di Toko B adalah Rp13.500,00/kg' },
    ],
    correctAnswer: 'B',
    explanation:
      'Harga satuan di Toko A = Rp65.000,00 ÷ 5 kg = Rp13.000,00/kg.\nHarga satuan di Toko B = Rp100.000,00 ÷ 8 kg = Rp12.500,00/kg.\nSelisih = Rp13.000,00 - Rp12.500,00 = Rp500,00/kg, sehingga Toko B lebih murah Rp500,00/kg dibanding Toko A.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Rasio Tiga Besaran Bertingkat',
    difficulty: 'Sukar',
    text: 'Rasio kelereng Andi dan Budi adalah 2 : 3, sedangkan rasio kelereng Budi dan Candra adalah 4 : 5. Jika jumlah kelereng Andi dan Candra adalah 46 butir, berapakah banyak kelereng Budi?',
    options: [
      { id: 'A', text: '16 butir' },
      { id: 'B', text: '20 butir' },
      { id: 'C', text: '24 butir' },
      { id: 'D', text: '30 butir' },
    ],
    correctAnswer: 'C',
    explanation:
      'Samakan angka perbandingan Budi (KPK dari 3 dan 4 adalah 12):\nAndi : Budi = (2 × 4) : (3 × 4) = 8 : 12.\nBudi : Candra = (4 × 3) : (5 × 3) = 12 : 15.\nMaka Andi : Budi : Candra = 8 : 12 : 15.\nJumlah bagian Andi + Candra = 8 + 15 = 23 bagian = 46 butir -> 1 bagian = 2 butir.\nBanyak kelereng Budi = 12 × 2 = 24 butir.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Perubahan Rasio Setelah Penambahan',
    difficulty: 'Sedang',
    text: 'Di sebuah akuarium, rasio banyak ikan mas koki terhadap ikan cupang adalah 3 : 4. Banyak ikan cupang mula-mula ada 20 ekor. Jika ke dalam akuarium ditambahkan lagi 5 ekor ikan mas koki, berapakah rasio paling sederhana ikan mas koki terhadap ikan cupang sekarang?',
    options: [
      { id: 'A', text: '1 : 1' },
      { id: 'B', text: '3 : 5' },
      { id: 'C', text: '4 : 5' },
      { id: 'D', text: '5 : 4' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak ikan mas koki mula-mula = (3/4) × 20 ekor = 15 ekor.\nSetelah ditambah 5 ekor, ikan mas koki menjadi = 15 + 5 = 20 ekor.\nRasio sekarang = 20 : 20 = 1 : 1.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Penyederhanaan Rasio Satuan Waktu',
    difficulty: 'Sedang',
    text: 'Lama waktu belajar matematika Edo di sekolah adalah 90 menit, sedangkan lama waktu belajar IPA adalah 2 jam. Rasio paling sederhana antara waktu belajar matematika dan waktu belajar IPA adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 4' },
      { id: 'C', text: '4 : 3' },
      { id: 'D', text: '9 : 2' },
    ],
    correctAnswer: 'B',
    explanation:
      'Samakan satuan waktu ke menit:\nMatematika = 90 menit.\nIPA = 2 jam = 2 × 60 menit = 120 menit.\nRasio = 90 : 120 = (90 ÷ 30) : (120 ÷ 30) = 3 : 4.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Rasio Ukuran Bangun Datar (Keliling & Luas)',
    difficulty: 'Sukar',
    text: 'Rasio panjang dan lebar sebuah kebun berbentuk persegi panjang adalah 5 : 3. Jika keliling kebun tersebut adalah 64 meter, maka luas kebun tersebut adalah...',
    options: [
      { id: 'A', text: '120 m²' },
      { id: 'B', text: '180 m²' },
      { id: 'C', text: '240 m²' },
      { id: 'D', text: '320 m²' },
    ],
    correctAnswer: 'C',
    explanation:
      'Keliling = 2 × (panjang + lebar) = 64 m -> panjang + lebar = 32 m.\nJumlah bagian = 5 + 3 = 8 bagian -> 1 bagian = 32 ÷ 8 = 4 meter.\nPanjang = 5 × 4 = 20 m, Lebar = 3 × 4 = 12 m.\nLuas kebun = 20 m × 12 m = 240 m².',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Rasio Senilai pada Resep Bahan',
    difficulty: 'Sukar',
    text: 'Untuk membuat 12 loyang kue bolu diperlukan 18 butir telur dan 3 kg tepung terigu. Jika Ibu mendapat pesanan sebanyak 20 loyang kue bolu yang sama, berapa butir telur dan berapa kilogram tepung terigu yang diperlukan?',
    options: [
      { id: 'A', text: '24 butir telur dan 4 kg tepung' },
      { id: 'B', text: '27 butir telur dan 4,5 kg tepung' },
      { id: 'C', text: '30 butir telur dan 5 kg tepung' },
      { id: 'D', text: '36 butir telur dan 6 kg tepung' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk 4 loyang kue (dibagi 3): diperlukan 6 butir telur dan 1 kg tepung.\nKarena pesanan 20 loyang = 5 × 4 loyang:\nTelur yang diperlukan = 5 × 6 = 30 butir.\nTepung yang diperlukan = 5 × 1 = 5 kg.',
  },

  // ==========================================================
  // B. PILIHAN GANDA KOMPLEKS (3 SOAL: ID 21 - 23)
  // Masing-masing tepat 3 pilihan jawaban (A, B, C), lebih dari 1 benar
  // ==========================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Rasio Campuran Minuman',
    difficulty: 'Sedang',
    imageUrl: imgResepMinuman,
    imageAlt: 'Ilustrasi takaran minuman 2 bagian sirup dan 5 bagian air',
    text: 'Perhatikan gambar takaran pembuatan minuman segar di atas! Untuk membuat 1 teko minuman, digunakan 2 bagian sirup dan 5 bagian air. Jika 1 bagian takaran setara dengan 100 ml, pilihlah SEMUA pernyataan yang BENAR! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Rasio volume sirup terhadap volume air adalah 2 : 5' },
      { id: 'B', text: 'Jika ingin membuat minuman dengan 600 ml sirup, maka air yang dibutuhkan adalah 1.500 ml' },
      { id: 'C', text: 'Rasio volume sirup terhadap volume seluruh campuran minuman adalah 2 : 5' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '- A Benar: Sirup = 200 ml dan air = 500 ml, rasionya 200 : 500 = 2 : 5.\n- B Benar: 600 ml sirup = 3 × 200 ml, maka air = 3 × 500 ml = 1.500 ml.\n- C Salah: Seluruh campuran = 2 + 5 = 7 bagian, sehingga rasio sirup terhadap seluruh minuman adalah 2 : 7.',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Rasio Bagian dan Jumlah Buah',
    difficulty: 'Sedang',
    text: 'Di sebuah keranjang buah, rasio banyak buah jeruk terhadap buah mangga adalah 3 : 4. Jika jumlah seluruh buah jeruk dan mangga di dalam keranjang adalah 56 buah, manakah dari pernyataan-pernyataan berikut yang BENAR? (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Banyak buah jeruk di dalam keranjang adalah 24 buah' },
      { id: 'B', text: 'Banyak buah mangga di dalam keranjang adalah 32 buah' },
      { id: 'C', text: 'Selisih banyak buah mangga dan jeruk adalah 12 buah' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Total bagian = 3 + 4 = 7 bagian -> 1 bagian = 56 ÷ 7 = 8 buah.\n- A Benar: Banyak jeruk = 3 × 8 = 24 buah.\n- B Benar: Banyak mangga = 4 × 8 = 32 buah.\n- C Salah: Selisih mangga dan jeruk = 32 - 24 = 8 buah (bukan 12 buah).',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Rasio Jarak dan Waktu Tempuh',
    difficulty: 'Sukar',
    text: 'Sebuah mobil menempuh jarak 160 km dalam waktu 2 jam dengan kecepatan tetap. Manakah dari pernyataan-pernyataan berikut yang BENAR mengenai rasio jarak dan waktu tempuh mobil tersebut? (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Kecepatan rata-rata mobil tersebut adalah 80 km setiap 1 jam' },
      { id: 'B', text: 'Dalam waktu 5 jam, mobil tersebut dapat menempuh jarak 400 km' },
      { id: 'C', text: 'Untuk menempuh jarak 240 km, mobil tersebut memerlukan waktu 3 jam' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '- A Benar: Rasio satuan = 160 km ÷ 2 jam = 80 km/jam.\n- B Benar: Jarak 5 jam = 5 × 80 km = 400 km.\n- C Benar: Waktu untuk 240 km = 240 ÷ 80 = 3 jam.\nKetiga pernyataan bernilai benar.',
  },

  // ==========================================================
  // C. PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: ID 24 - 32)
  // Setiap soal memiliki 3 deskripsi pernyataan Benar / Salah
  // ==========================================================
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Rasio Bagian terhadap Bagian dan Keseluruhan',
    difficulty: 'Mudah',
    text: 'Kotak mainan milik Bayu berisi 12 kelereng hijau, 18 kelereng biru, dan 10 kelereng kuning. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Rasio paling sederhana dari banyak kelereng hijau terhadap kelereng biru adalah 2 : 3.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio paling sederhana dari banyak kelereng kuning terhadap seluruh kelereng adalah 1 : 4.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio paling sederhana banyak kelereng biru terhadap kelereng kuning adalah 5 : 3.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Total seluruh kelereng = 12 + 18 + 10 = 40 butir.\n1. Hijau : Biru = 12 : 18 = 2 : 3 (BENAR).\n2. Kuning : Total = 10 : 40 = 1 : 4 (BENAR).\n3. Biru : Kuning = 18 : 10 = 9 : 5 (SALAH, tertulis 5 : 3).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Rasio Uang Saku (Selisih dan Jumlah)',
    difficulty: 'Sedang',
    text: 'Rasio uang saku Raka terhadap uang saku Dinda setiap minggu adalah 5 : 3. Diketahui uang saku Raka Rp12.000,00 lebih banyak daripada uang saku Dinda. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Besar uang saku Raka dalam seminggu adalah Rp30.000,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Besar uang saku Dinda dalam seminggu adalah Rp18.000,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah uang saku Raka dan Dinda dalam seminggu adalah Rp54.000,00.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Selisih bagian = 5 - 3 = 2 bagian = Rp12.000,00 -> 1 bagian = Rp6.000,00.\n1. Uang saku Raka = 5 × Rp6.000,00 = Rp30.000,00 (BENAR).\n2. Uang saku Dinda = 3 × Rp6.000,00 = Rp18.000,00 (BENAR).\n3. Jumlah uang saku = Rp30.000,00 + Rp18.000,00 = Rp48.000,00 (SALAH, tertulis Rp54.000,00).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Skala Denah dan Ukuran Sebenarnya',
    difficulty: 'Sedang',
    imageUrl: imgDenahLapangan,
    imageAlt: 'Diagram denah lapangan persegi panjang berukuran 10 cm x 6 cm dengan Skala 1 : 500',
    text: 'Perhatikan gambar denah lapangan sekolah di atas! Denah berbentuk persegi panjang tersebut memiliki panjang 10 cm dan lebar 6 cm dengan skala 1 : 500. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Panjang sebenarnya dari lapangan sekolah tersebut adalah 50 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Lebar sebenarnya dari lapangan sekolah tersebut adalah 30 meter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas sebenarnya dari lapangan sekolah tersebut adalah 1.500 meter persegi (m²).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Panjang sebenarnya = 10 cm × 500 = 5.000 cm = 50 m (BENAR).\n2. Lebar sebenarnya = 6 cm × 500 = 3.000 cm = 30 m (BENAR).\n3. Luas sebenarnya = 50 m × 30 m = 1.500 m² (BENAR).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Rasio Harga Satuan dan Perbandingan Belanja',
    difficulty: 'Sedang',
    text: 'Ibu membeli 6 kg gula pasir di Toko Makmur dengan membayar Rp96.000,00. Pada hari yang sama, Bibi membeli 4 kg gula pasir merek yang sama di Toko Sejahtera dengan membayar Rp60.000,00. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Harga 1 kg gula pasir di Toko Makmur adalah Rp16.000,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Harga 1 kg gula pasir di Toko Sejahtera lebih murah Rp1.000,00 dibandingkan di Toko Makmur.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika membeli 5 kg gula pasir di Toko Makmur, uang yang harus dibayar adalah Rp75.000,00.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Harga satuan Toko Makmur = Rp96.000,00 ÷ 6 = Rp16.000,00/kg (BENAR).\n2. Harga satuan Toko Sejahtera = Rp60.000,00 ÷ 4 = Rp15.000,00/kg. Selisihnya Rp1.000,00 lebih murah (BENAR).\n3. Harga 5 kg di Toko Makmur = 5 × Rp16.000,00 = Rp80.000,00 (SALAH, tertulis Rp75.000,00).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Rasio Komposisi Bahan Adonan',
    difficulty: 'Sedang',
    text: 'Untuk membuat adonan donat, seorang pembuat kue menggunakan tepung terigu, gula halus, dan mentega dengan rasio berat 10 : 2 : 3. Dalam satu kali pembuatan adonan, ia menggunakan 500 gram tepung terigu. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Berat gula halus yang dibutuhkan dalam satu kali adonan adalah 100 gram.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Berat mentega yang dibutuhkan dalam satu kali adonan adalah 150 gram.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Total berat seluruh bahan (tepung terigu, gula halus, dan mentega) adalah 800 gram.',
        correctAnswer: false,
      },
    ],
    explanation:
      '10 bagian = 500 gram -> 1 bagian = 50 gram.\n1. Gula halus = 2 × 50 = 100 gram (BENAR).\n2. Mentega = 3 × 50 = 150 gram (BENAR).\n3. Total berat seluruh bahan = 500 + 100 + 150 = 750 gram (SALAH, tertulis 800 gram).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Rasio Umur Sekarang dan Akan Datang',
    difficulty: 'Sukar',
    text: 'Saat ini rasio umur Kakak dan Adik adalah 5 : 2. Jika jumlah umur mereka berdua saat ini adalah 28 tahun, tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Umur Kakak saat ini adalah 20 tahun dan umur Adik adalah 8 tahun.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih umur Kakak dan Adik adalah 12 tahun.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Empat tahun yang akan datang, rasio umur Kakak dan Adik adalah 2 : 1.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Jumlah bagian = 5 + 2 = 7 bagian = 28 tahun -> 1 bagian = 4 tahun.\n1. Kakak = 5 × 4 = 20 tahun, Adik = 2 × 4 = 8 tahun (BENAR).\n2. Selisih umur = 20 - 8 = 12 tahun (BENAR).\n3. Empat tahun lagi: Kakak = 24 tahun, Adik = 12 tahun -> rasio = 24 : 12 = 2 : 1 (BENAR).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Rasio Laju Penjualan Harian',
    difficulty: 'Sedang',
    text: 'Sebuah koperasi sekolah mencatat penjualan buku tulis setiap harinya selalu tetap. Dalam 5 hari sekolah (Senin–Jumat), koperasi berhasil menjual 175 buku tulis. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Rata-rata penjualan buku tulis di koperasi tersebut adalah 35 buku per hari.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam waktu 8 hari sekolah, koperasi dapat menjual sebanyak 280 buku tulis.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Untuk menjual 140 buku tulis, koperasi membutuhkan waktu selama 5 hari.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Penjualan per hari = 175 ÷ 5 = 35 buku/hari (BENAR).\n2. Penjualan 8 hari = 8 × 35 = 280 buku (BENAR).\n3. Waktu untuk 140 buku = 140 ÷ 35 = 4 hari (SALAH, tertulis 5 hari).',
  },
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Rasio Tiga Besaran (Tabungan)',
    difficulty: 'Sukar',
    text: 'Uang tabungan milik Lisa, Mona, dan Nina memiliki rasio 3 : 4 : 5. Jika selisih uang tabungan Nina dan Lisa adalah Rp40.000,00, tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Besar uang tabungan Mona adalah Rp80.000,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Besar uang tabungan Nina adalah Rp100.000,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah total uang tabungan Lisa, Mona, dan Nina adalah Rp240.000,00.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Selisih bagian Nina dan Lisa = 5 - 3 = 2 bagian = Rp40.000,00 -> 1 bagian = Rp20.000,00.\n1. Tabungan Mona = 4 × Rp20.000,00 = Rp80.000,00 (BENAR).\n2. Tabungan Nina = 5 × Rp20.000,00 = Rp100.000,00 (BENAR).\n3. Total tabungan = (3 + 4 + 5) × Rp20.000,00 = 12 × Rp20.000,00 = Rp240.000,00 (BENAR).',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Skala Denah Persegi (Keliling dan Luas)',
    difficulty: 'Sukar',
    text: 'Sebuah taman kota berbentuk persegi digambar pada denah dengan panjang sisi 6 cm. Denah taman tersebut menggunakan skala 1 : 200. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Panjang sisi sebenarnya dari taman kota tersebut adalah 12 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Keliling sebenarnya dari taman kota tersebut adalah 48 meter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas sebenarnya dari taman kota tersebut adalah 120 meter persegi (m²).',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Panjang sisi sebenarnya = 6 cm × 200 = 1.200 cm = 12 meter (BENAR).\n2. Keliling sebenarnya = 4 × 12 m = 48 meter (BENAR).\n3. Luas sebenarnya = 12 m × 12 m = 144 m² (SALAH, tertulis 120 m²).',
  },
];
