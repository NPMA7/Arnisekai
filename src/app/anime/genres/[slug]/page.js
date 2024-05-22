"use client";
import Navbar from "@/components/header/Navbar";
import { CardAnime } from "@/components/main/Card";
import { useState, useEffect } from "react";
const slugGenre = ({ params }) => {
  const { slug } = params;
  const [animeList, setAnimeList] = useState({ data: { anime: [] } }); // Menginisialisasi animeList sebagai objek dengan properti data berupa objek dengan properti anime berupa array kosong

  useEffect(() => {
    const fetchAnimeList = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/genres/${slug}`
      );
      const data = await response.json();
      setAnimeList(data);
    };

    fetchAnimeList();
  }, []);

  return (
    <>
      <main className="min-h-screen pb-10 bg-gray-900 text-gray-300">
        <Navbar />
        <section className="p-4">
          <div className="flex justify-between items-center mb-4">
            {params ? (
              <p className="text-gray-300 text-lg font-bold">
                Hasil Pencarian #{slug}
              </p>
            ) : null}
          </div>
          <CardAnime
            api={animeList.data.anime}
            simbolRate={"💫"}
            episode={" Episode"}
          />
        </section>
      </main>
    </>
  );
};
export default slugGenre;
