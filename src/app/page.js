"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/header/Header";
import Highlight from "@/components/main/Highlight";

const Home = () => {
  const [animeList, setAnimeList] = useState();
  const searchRef = useRef();

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime`
      );
      const data = await response.json();
      setAnimeList(data.data);
    };
    fetchAnime();
  }, []); 


  return (
    <>
      <Header />
      <main className="p-5 bg-gray-900 min-w-screen md:w-3/5">
      <sidebar id="highlight" className=" text-gray-300">
        <section
          id="anime-highlight"
          className="hidden md:grid grid-cols-5 absolute mt-80"
        >
          {animeList?.map(({ title, poster }) => (
            <Highlight key={title} title_anime={title} poster_anime={poster} />
          ))}
        </section>
        <section
          id="donghua-highlight"
          className="hidden md:block absolute md:top-96 md:mt-96 lg:right-10 right-1"
        >
          <img
            className="md:mt-60"
            src="https://i.ibb.co/xDccLXj/Remove-bg-ai-1703668423502.png"
            alt="Donghua Highlight"
          />
        </section>
      </sidebar>

        <section className="font-semibold text-gray-300 w-full">
          <h1 className="text-lg max-[640px]:text-xl sm:text-2xl md:text-4xl pt-16 lg:pt-20">
            <span className="text-white tracking-widest">ARNISEKAI</span> -
            Situs menonton anime dan donghua secara online & gratis
          </h1>

          <input
            type="text"
            placeholder="🔍 Cari Anime/Donghua"
            className={`p-2 w-full rounded bg-gray-800 max-sm:mt-3 my-10 text-gray-300 sm:inline-block md:inline-block lg:inline-block xl:inline-block
            }`}
            ref={searchRef}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                const keyword = searchRef.current.value;
                router.push(`/search/${keyword}`);
              }
            }}
          />

          <div className="text-sm max-[640px]:text-sm sm:text-lg md:text-xl">
            <h1 className="text-white">
              1. Apa itu <span className="tracking-wider">Arnisekai</span>?
            </h1>
            <p className="pl-6 mb-8">
              <span className="tracking-wider">Arnisekai</span> adalah situs
              gratis untuk menonton anime sekaligus donghua dan bahkan kamu
              dapat mengunduh anime atau donghua dengan sub atau dub dalam
              kualitas ultra HD tanpa registrasi atau pembayaran. Dengan tidak
              menampilkan iklan apa pun, kami berusaha membuatnya menjadi situs
              teraman untuk menonton anime dan donghua gratis.
            </p>
            <h2 className="text-white">
              2. Apakah <span className="tracking-wider">Arnisekai</span> aman?
            </h2>
            <p className="pl-6 mb-8">
              Ya, kami tidak meminta dan mengambil data diri anda. Situs kami
              hanya untuk menonton dan mengunduh anime dan donghua.
            </p>
            <h1 className="text-white">
              3. faktor apa yang menjadikan
              <span className="tracking-wider">Arnisekai</span>sebagai situs
              terbaik untuk menonton anime dan donghua?
            </h1>
            <p className="pl-6 mb-32">
              Sebelum membangun
              <span className="tracking-wider">Arnisekai</span>, kami telah
              memeriksa banyak situs anime gratis lainnya dan belajar dari
              pengalaman mereka. Kami hanya mempertahankan hal-hal yang baik
              untuk kemudian kami masukkan ke dalam situs
              <span className="tracking-wider">Arnisekai</span> kami. Mari kita
              lihat bagaimana kami sangat yakin bahwa kami adalah situs terbaik
              untuk streaming anime:
            </p>
            <h1 className="text-white">Keamanan:</h1>
            <p className="mb-8">
              Kami berusaha sebaik mungkin untuk tidak menampilkan iklan di 
              <span className="tracking-wider"> Arnisekai</span>.
            </p>
            <h1 className="text-white">Perpustakaan konten:</h1>
            <p className="mb-8">
              Fokus utama kami adalah anime dan donghua. Kamu dapat menemukan di
              sini judul-judul populer, klasik, serta judul-judul terbaru dari
              semua genre seperti aksi, drama, anak-anak, fantasi, horor,
              misteri, polisi, romansa, sekolah, komedi, musik, game, dan masih
              banyak lagi.
            </p>
            <h1 className="text-white">Kualitas/Resolusi:</h1>
            <p className="mb-8">
              Semua judul tersedia dalam resolusi yang sangat baik, dengan
              kualitas terbaik yang mungkin ada.
              <span className="tracking-wider">Arnisekai</span> juga dilengkapi
              dengan pengaturan kualitas, sehingga kamu bisa menikmati streaming
              anime tanpa masalah, tidak peduli seberapa cepat kecepatan
              internet kamu. Kamu bisa menonton anime pada resolusi 360p jika
              internet kamu lambat, atau memilih resolusi 720p atau bahkan 1080p
              jika koneksi internet kamu cepat.
            </p>
            <h1 className="text-white">Pengalaman Streaming:</h1>
            <p className="mb-8">
              Dibandingkan dengan situs streaming anime lainnya, kecepatan
              loading di <span className="tracking-wider">Arnisekai</span> lebih
              cepat. Selain itu, mengunduh anime juga sangat mudah seperti
              menonton streaming, sehingga kamu tidak akan mengalami masalah
              saat menyimpan video untuk ditonton secara offline nanti.
            </p>
            <h1 className="text-white">Update Konten:</h1>
            <p className="mb-8">
              Kami selalu memperbarui judul-judul anime terbaru dan memenuhi
              permintaan pengguna setiap hari, jadi jangan khawatir, kamu tidak
              akan kehabisan tontonan seru yang akan ditonton di
              <span className="tracking-wider">Arnisekai</span>.
            </p>
            <h1 className="text-white">Antarmuka Pengguna:</h1>
            <p className="mb-8">
              Antarmuka pengguna kami dirancang agar mudah digunakan oleh siapa
              saja, tidak peduli seberapa tua atau seberapa lama kamu sudah
              menggunakan internet. Kamu dapat dengan mudah memahami cara
              navigasi situs kami setelah melihat sekilas. Jika kamu ingin
              menonton judul anime tertentu, cukup cari melalui kotak pencarian.
              Jika kamu ingin mencari saran, kamu bisa menggunakan kategori yang
              tersedia di situs atau cukup gulir ke bawah untuk melihat
              judul-judul baru yang dirilis.
            </p>
            <h1 className="text-white">Kompatibilitas Perangkat:</h1>
            <p className="mb-8">
              <span className="tracking-wider">Arnisekai</span> bekerja dengan
              baik pada perangkat seluler maupun desktop. Namun, kami
              merekomendasikan penggunaan desktop agar pengalaman streaming
              menjadi lebih lancar. Layanan Pelanggan: Kami selalu siap membantu
              selama 24/7. Kamu dapat selalu menghubungi kami untuk mendapatkan
              bantuan, atau menanyakan sesuatu. Kami terkenal karena layanan
              pelanggan yang sangat baik, di mana kami cepat dalam memperbaiki
              tautan yang rusak atau mengunggah konten yang diminta. Jadi jika
              kamu sedang mencari situs streaming anime yang terpercaya dan
              aman, coba gunakan
              <span className="tracking-wider">Arnisekai</span>.
            </p>
            <h1 className="text-white text-3xl">Terima Kasih!</h1>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
