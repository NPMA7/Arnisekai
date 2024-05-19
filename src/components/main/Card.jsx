"use client";

import Link from "next/link";

export const CardAnime = ({ api, simbolRate, episode }) => {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-gray-300">
        <section className="p-4 ">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {api?.map((anime) => (
                <Link href={`/anime/${anime.slug}`} key={anime.title} className="bg-gray-800 hover:bg-green-800 p-4 rounded-lg">
                  <img
                    src={anime.poster}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h2 className="mt-2 h-12 overflow-hidden text-md font-semibold">
                    {anime.title}
                    {anime.episode}
                  </h2>
                  <p className="text-sm">{anime.newest_release_date}</p>
                  <p className="text-sm">{anime.current_episode}</p>
                  <p className="text-sm">
                    {simbolRate}
                    {anime.rating}
                  </p>
                  <p className="text-sm">
                    {anime.episode_count}
                    {anime.status}
                    {episode}
                  </p>
                </Link>
              ))}
            </div>
        </section>
      </main>
    </>
  );
};
