'use client'
import React, { useState } from 'react';

const stats = [
  { label: 'Total Katalog Buku', value: '1,240', desc: 'Buku terdaftar' },
  { label: 'Sedang Dipinjam', value: '45', desc: 'Buku di anggota' },
  { label: 'Total Anggota', value: '320', desc: 'Siswa & Guru' },
  { label: 'Tunggakan', value: '3', desc: 'Perlu ditindak' },
];

const recentBorrowings = [
  { id: 1, name: 'Budi Santoso', book: 'Laskar Pelangi', date: '05 Okt 2026', status: 'Dipinjam' },
  { id: 2, name: 'Siti Rahma', book: 'Bumi Manusia', date: '04 Okt 2026', status: 'Dipinjam' },
  { id: 3, name: 'Ahmad Dani', book: 'Filosofi Teras', date: '03 Okt 2026', status: 'Dikembalikan' },
];

export default function MainDashboard() {
  // false = default tema gelap (karena kondisi ternary Anda white ? 'putih' : 'hitam')
  // Jika ingin default-nya putih, ganti ke true.
  const [white, setBlack] = useState(false);

  return (
    // PERBAIKAN 1: Hapus bg-white statis di depan agar warna background utamanya bisa berubah total
    <div className={`flex min-h-screen transition-colors duration-300 ${white ? 'bg-gray-50 text-gray-900' : 'bg-zinc-950 text-zinc-100'}`}>
      
      {/* 1. Sidebar */}
      {/* PERBAIKAN 2: Buat background aside mengikuti state tema */}
      <aside className={`w-64 border-r p-5 flex flex-col shrink-0 transition-colors duration-300 ${white ? 'bg-white border-gray-200' : 'bg-zinc-900 border-zinc-800'}`}>
        <div className="mb-5">
          <h1 className={`font-poppins font-bold text-xl capitalize ${white ? 'text-gray-800' : 'text-white'}`}>
            daftar beranda
          </h1>
        </div>

        <nav>
          <ul className="flex flex-col gap-1 font-poppins text-sm font-medium">
            <li className={`px-2 py-2.5 rounded-lg transition-colors cursor-pointer capitalize ${white ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-zinc-300 hover:bg-zinc-800 hover:text-blue-400'}`}>
              peminjaman
            </li>
            <li className={`px-2 py-2.5 rounded-lg transition-colors cursor-pointer capitalize ${white ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-zinc-300 hover:bg-zinc-800 hover:text-blue-400'}`}>
              pengambilan
            </li>
            <li className={`px-2 py-2.5 rounded-lg transition-colors cursor-pointer capitalize ${white ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-zinc-300 hover:bg-zinc-800 hover:text-blue-400'}`}>
              anggota
            </li>
            <li className={`px-2 py-2.5 rounded-lg transition-colors cursor-pointer capitalize ${white ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-zinc-300 hover:bg-zinc-800 hover:text-blue-400'}`}>
              katalog buku
            </li>
            {/* Tombol pemicu toggle yang sudah Anda perbaiki */}
            <li 
              className={`px-2 py-2.5 rounded-lg font-bold transition-all cursor-pointer capitalize ${white ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`} 
              onClick={() => setBlack(!white)}
            >
              {white ? "Mode Gelap " : "Mode Terang "}
            </li>
          </ul>
        </nav>
      </aside>

      {/* 2. Area Konten Utama */}
      {/* PERBAIKAN 3: Hapus bg-white statis dari tag main agar area konten tidak memutih terus */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header Judul */}
        <div>
          <h1 className={`text-2xl font-bold ${white ? 'text-gray-800' : 'text-white'}`}>Beranda Dashboard</h1>
          <p className="text-sm text-gray-500">Ringkasan aktivitas perpustakaan digital hari ini.</p>
        </div>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border shadow-sm space-y-1 transition-colors ${white ? 'bg-white border-gray-100' : 'bg-zinc-900 border-zinc-800'}`}>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.label}</p>
              <p className={`text-2xl font-bold ${white ? 'text-gray-900' : 'text-white'}`}>{item.value}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tombol Akses Cepat */}
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm transition">
            + Pinjam Buku
          </button>
          <button className={`px-4 py-2 border font-medium text-sm rounded-lg shadow-sm transition ${white ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50' : 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800'}`}>
            + Pengambilan / Kembali
          </button>
          <button className={`px-4 py-2 border font-medium text-sm rounded-lg shadow-sm transition ${white ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50' : 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800'}`}>
            + Tambah Anggota
          </button>
        </div>

        {/* Tabel Aktivitas Terbaru */}
        <div className={`rounded-xl border shadow-sm p-5 space-y-4 transition-colors ${white ? 'bg-white border-gray-100' : 'bg-zinc-900 border-zinc-800'}`}>
          <h2 className={`text-lg font-bold ${white ? 'text-gray-800' : 'text-white'}`}>Peminjaman Terbaru</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className={`text-xs uppercase border-b ${white ? 'bg-gray-50 text-gray-400 border-gray-100' : 'bg-zinc-800 text-zinc-400 border-zinc-800'}`}>
                <tr>
                  <th className="py-3 px-4">Nama Anggota</th>
                  <th className="py-3 px-4">Judul Buku</th>
                  <th className="py-3 px-4">Tanggal Pinjam</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${white ? 'divide-gray-100' : 'divide-zinc-800'}`}>
                {recentBorrowings.map((row) => (
                  <tr key={row.id} className={white ? 'hover:bg-gray-50/50' : 'hover:bg-zinc-800/50'}>
                    <td className={`py-3 px-4 font-medium ${white ? 'text-gray-800' : 'text-zinc-200'}`}>{row.name}</td>
                    <td className={white ? 'text-gray-600' : 'text-zinc-400'}>{row.book}</td>
                    <td className={white ? 'text-gray-600' : 'text-zinc-400'}>{row.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                          row.status === 'Dipinjam'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
