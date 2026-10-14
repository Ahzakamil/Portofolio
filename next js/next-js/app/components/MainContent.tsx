
  "use client";
  import Link from "next/link"; // 1. Impor Link dari Next.js
  import { TypingAnimation } from "@/components/ui/typing-animation";
  import { useState } from "react";

  const MainContent = () => {

    return (
      // Gunakan gap-4 untuk mengatur spasi vertikal antar-elemen secara otomatis
    
      <div>
      <div className="flex flex-col px-7 items-start max-w-[45rem] gap-1 ">
        {/* Subtitle */}
        <p className="text-[1.3rem] text-grey-600">
          
          sistem peminjam buku
        </p>

        {/* Judul Utama (berikan leading-tight agar teks 2 baris tidak bertumpuk) */}
        <TypingAnimation className="text-[3.1rem] font-montserrat font-bold leading-tight animate-looping">
          Data peminjaman perpustakaan,rapi dalam satu layar.
        </TypingAnimation>

        {/* Deskripsi */}
        <p className="text-[1.15rem] leading-relaxed text-gray-600">
          Catat siapa meminjam buku apa, kapan harus kembali, dan mana yang terlambat — tanpa buku besar dan tanpa lembar kerja yang berserakan.
        </p>


  <div className=" my-10 p-2 flex gap-2">      {/* 2. Styling ditaruh langsung di tag <Link> agar seluruh tombol aktif diklik */}
        <Link href="/login" className="text-center bg-blue-700 text-white px-4 py-3 rounded-xl font-medium border border-black hover:bg-blue-500 transition-colors">
          Mulai sekarang
        </Link>

        <Link href="/login" className="bg-white  px-4 py-3 rounded-xl font-medium border border-black text-black">
        sudah punya akun
        </Link>
        </div>
             
  </div>
  {/* Grid Card (text-left agar isi card tetap rata kiri) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4 text-left max-w-280 m-auto py-[20rem]">
          
          {/* Card 1 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-900">Catat peminjaman</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tambah peminjaman baru lengkap dengan kartu anggota dan tanggal jatuh tempo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-900">Pantau keterlambatan</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Buku yang melewati jatuh tempo langsung terlihat beserta denda berjalan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-900">Kelola katalog</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Semua koleksi tersusun rapi per kategori dan siap dicari dalam sekejap.
      
            </p>
          </div>

        </div>
      
      </div>
    );
  };

  export default MainContent;