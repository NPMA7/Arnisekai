"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";
import { CardAnime } from "@/components/main/Card";

const homeAnime = () => {
  const [animeList, setAnimeList] = useState({ data: { ongoing_anime: [], complete_anime: [] } });

  useEffect(() => {
    const fetchAnimeList = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/home`
      );
      const data = await response.json();
      setAnimeList(data);
    };

    fetchAnimeList();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-gray-300">
        <Navbar />
        <section className="p-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-300 text-lg font-bold">Ongoing Anime</p>
            <Link
              href={"#"}
              className="bg-gray-800 px-4 py-2 rounded text-gray-300"
            >
              Jadwal Tayang Anime
            </Link>
          </div>
          <CardAnime api={animeList.data.ongoing_anime} />
          <div className="flex justify-between items-center mt-6 mb-4">
            <p className="text-gray-300 text-lg font-bold">Complete Anime</p>
            <Link
              href={"complete"}
              className="bg-gray-800 px-4 py-2 rounded text-gray-300"
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <CardAnime
            api={animeList.data.complete_anime}
            simbolRate={"💫"}
            episode={" Episode"}
          />
        </section>
      </main>
    </>
  );
};

export default homeAnime;