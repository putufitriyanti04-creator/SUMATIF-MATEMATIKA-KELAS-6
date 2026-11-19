import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika - Lingkup Materi: Rasio
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 32 butir soal Matematika (Materi Rasio) Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyatakan rasio dua besaran dan menyederhanakannya ke bentuk paling sederhana.',
    indikatorSoal:
      'Disajikan gambar kumpulan buah apel dan pisang, peserta didik dapat menentukan rasio paling sederhana banyak apel terhadap pisang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio bagian terhadap keseluruhan dalam konteks kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan data jumlah siswa laki-laki dan perempuan dalam satu kelas, peserta didik dapat menentukan rasio paling sederhana siswa perempuan terhadap seluruh siswa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyederhanakan rasio dua besaran yang memiliki satuan ukuran panjang berbeda.',
    indikatorSoal:
      'Disajikan panjang dua pita dalam satuan cm dan meter, peserta didik dapat menyamakan satuan dan menentukan rasio paling sederhananya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep rasio senilai untuk menentukan nilai suatu besaran yang belum diketahui.',
    indikatorSoal:
      'Disajikan rasio dua jenis buku di perpustakaan dan jumlah salah satu jenis buku, peserta didik dapat menghitung jumlah jenis buku lainnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan dan menyederhanakan rasio dua kelompok benda berdasarkan ilustrasi visual.',
    indikatorSoal:
      'Disajikan gambar dua toples berisi kelereng biru dan merah beserta jumlahnya, peserta didik dapat menentukan rasio paling sederhana keduanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan permasalahan rasio yang diketahui jumlah kedua besarannya.',
    indikatorSoal:
      'Disajikan rasio uang tabungan dua orang siswa dan jumlah tabungan keduanya, peserta didik dapat menghitung besar tabungan salah satu siswa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan permasalahan rasio yang diketahui selisih kedua besarannya.',
    indikatorSoal:
      'Disajikan rasio umur dua anggota keluarga beserta selisih umurnya, peserta didik dapat menentukan umur salah satu anggota keluarga.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep rasio satuan (laju perubahan) dalam menentukan jarak tempuh kendaraan.',
    indikatorSoal:
      'Disajikan jarak tempuh sepeda motor dengan jumlah liter bensin tertentu, peserta didik dapat menentukan jarak tempuh untuk volume bensin lain.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan rasio harga satuan untuk menghitung biaya pembelian sejumlah barang.',
    indikatorSoal:
      'Disajikan harga paket sejumlah buku tulis, peserta didik dapat menentukan jumlah uang yang harus dibayar untuk kuantitas buku yang berbeda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan rasio kecepatan produksi terhadap waktu dalam menyelesaikan masalah sehari-hari.',
    indikatorSoal:
      'Disajikan banyak lembar kertas yang dicetak mesin fotokopi dalam waktu tertentu, peserta didik dapat menghitung hasil cetakan pada durasi waktu lainnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan jumlah keseluruhan campuran berdasarkan rasio komponen penyusunnya.',
    indikatorSoal:
      'Disajikan rasio campuran dua warna cat dan volume salah satu warna cat, peserta didik dapat menghitung volume total campuran cat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep rasio skala pada peta untuk menentukan jarak sebenarnya.',
    indikatorSoal:
      'Disajikan gambar peta yang memuat jarak dua kota dan keterangan skala, peserta didik dapat menghitung jarak sebenarnya dalam satuan kilometer.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan skala peta berdasarkan perbandingan jarak pada peta dan jarak sebenarnya.',
    indikatorSoal:
      'Disajikan jarak sebenarnya dua desa (km) dan jarak pada peta (cm), peserta didik dapat menentukan skala peta yang digunakan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung jarak pada denah/peta jika diketahui jarak sebenarnya dan skala.',
    indikatorSoal:
      'Disajikan jarak rumah ke sekolah dalam km dan skala denah, peserta didik dapat menghitung panjang jarak tersebut pada denah dalam cm.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dua rasio harga satuan untuk menentukan pilihan belanja yang lebih hemat.',
    indikatorSoal:
      'Disajikan dua penawaran harga dan berat beras dari dua toko berbeda, peserta didik dapat membandingkan harga per kg dan menentukan selisihnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menggabungkan dua rasio menjadi rasio tiga besaran untuk menyelesaikan masalah.',
    indikatorSoal:
      'Disajikan rasio A:B dan B:C beserta jumlah nilai A dan C, peserta didik dapat menganalisis rasio gabungan untuk menentukan nilai B.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perubahan rasio apabila terjadi penambahan kuantitas pada salah satu besaran.',
    indikatorSoal:
      'Disajikan rasio awal dua jenis ikan dan jumlah awal salah satunya, peserta didik dapat menentukan rasio terbaru setelah adanya penambahan jumlah ikan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyatakan rasio paling sederhana dari dua durasi waktu dengan satuan berbeda.',
    indikatorSoal:
      'Disajikan dua lama waktu belajar dalam satuan menit dan jam, peserta didik dapat mengonversi satuan dan menyederhanakan rasionya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan rasio ukuran sisi bangun datar dengan konsep keliling dan luas.',
    indikatorSoal:
      'Disajikan rasio panjang terhadap lebar persegi panjang dan ukuran kelilingnya, peserta didik dapat menganalisis dan menghitung luas persegi panjang tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan rasio senilai pada multi-komponen resep untuk jumlah produksi baru.',
    indikatorSoal:
      'Disajikan takaran telur dan tepung untuk sejumlah loyang kue, peserta didik dapat menganalisis kebutuhan bahan untuk jumlah loyang kue yang berbeda.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi pernyataan mengenai rasio bagian terhadap bagian dan keseluruhan pada resep minuman.',
    indikatorSoal:
      'Disajikan gambar resep minuman (bagian sirup dan bagian air), peserta didik dapat memilih semua pernyataan yang benar terkait rasio dan takaran.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai masing-masing bagian dan selisihnya berdasarkan rasio dan jumlah total.',
    indikatorSoal:
      'Disajikan rasio banyak jeruk dan mangga beserta jumlah seluruh buah, peserta didik dapat mengevaluasi dan memilih pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis rasio senilai antara jarak tempuh dan waktu perjalanan kendaraan.',
    indikatorSoal:
      'Disajikan data jarak tempuh mobil dalam 2 jam, peserta didik dapat mengidentifikasi seluruh pernyataan yang benar tentang kecepatan satuan, jarak, dan waktu.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan rasio bagian terhadap bagian dan bagian terhadap keseluruhan pada kumpulan benda.',
    indikatorSoal:
      'Disajikan data jumlah tiga warna kelereng, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada 3 pernyataan rasio antarwarna dan keseluruhan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi nilai masing-masing besaran dan jumlahnya dari rasio dan selisih yang diketahui.',
    indikatorSoal:
      'Disajikan rasio uang saku dua anak beserta selisihnya, peserta didik dapat menentukan kebenaran (Benar/Salah) besar uang masing-masing dan jumlah totalnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan skala denah untuk menghitung ukuran panjang, lebar, dan luas sebenarnya.',
    indikatorSoal:
      'Disajikan gambar denah lapangan sekolah beserta dimensi dan skalanya, peserta didik dapat menilai kebenaran (Benar/Salah) panjang, lebar, dan luas sebenarnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan rasio harga satuan dari dua tempat belanja dan menghitung total harga.',
    indikatorSoal:
      'Disajikan data pembelian gula pasir di dua toko berbeda, peserta didik dapat menentukan kebenaran (Benar/Salah) harga per kg, selisih harga, dan total bayar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan takaran tiap bahan dan berat total dari rasio tiga komponen resep.',
    indikatorSoal:
      'Disajikan rasio berat tiga bahan pembuat donat dan berat tepung terigu, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) berat gula, mentega, dan total adonan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis rasio umur saat ini dan perubahan rasio umur pada beberapa tahun mendatang.',
    indikatorSoal:
      'Disajikan rasio umur kakak dan adik beserta jumlah umurnya saat ini, peserta didik dapat menentukan kebenaran (Benar/Salah) umur sekarang, selisih, dan rasio 4 tahun lagi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan rasio laju penjualan per hari untuk memprediksi kuantitas maupun waktu.',
    indikatorSoal:
      'Disajikan jumlah penjualan buku selama 5 hari, peserta didik dapat memverifikasi nilai kebenaran (Benar/Salah) rata-rata harian, proyeksi 8 hari, dan durasi target penjualan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan permasalahan rasio tiga besaran apabila diketahui selisih dua besaran di antaranya.',
    indikatorSoal:
      'Disajikan rasio tabungan tiga siswa dan selisih tabungan dua siswa, peserta didik dapat menilai kebenaran (Benar/Salah) tabungan individu dan total ketiganya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis sisi, keliling, dan luas sebenarnya bangun persegi dari denah berskala.',
    indikatorSoal:
      'Disajikan panjang sisi taman persegi pada denah dan skalanya, peserta didik dapat menentukan kebenaran (Benar/Salah) sisi sebenarnya, keliling, dan luas taman.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan rasio.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('skala') || t.includes('denah') || t.includes('peta') || t.includes('bangun datar') || t.includes('persegi')) {
    return 'Geometri';
  }
  if (t.includes('satuan') && (t.includes('panjang') || t.includes('waktu') || t.includes('jarak') || t.includes('produksi') || t.includes('penjualan'))) {
    return 'Pengukuran';
  }
  if (t.includes('selisih') || t.includes('jumlah') || t.includes('umur') || t.includes('harga') || t.includes('tiga besaran') || t.includes('senilai')) {
    return 'Aljabar';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
