"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";


const genreAnime = () => {
  const [animeList, setAnimeList] = useState([]);


  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/genres`
      );
      const data = await response.json();
      setAnimeList(data.data);
    };
    fetchAnime();
  }, []);

  return (
    <>
      <main className="min-h-screen pb-10 bg-gray-900 text-gray-300">
        <Navbar />
        <section className="p-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-300 text-lg font-bold">Genre Anime</p>
            <Link
              href={"#"}
              className="bg-gray-800 px-4 py-2 rounded text-gray-300"
            >
              Jadwal Tayang Anime
            </Link>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {animeList?.map((anime) => (
              <Link href={`genres/${anime.slug}`} className="h-16 text-md bg-gray-800 p-5 hover:bg-gray-600 rounded-lg font-semibold">
                {anime.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default genreAnime;
