"use client";
import Link from "next/link";

export const ViewBox = ({ api }) => {
  const generateStar = (rating) => {
    const filledStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(Math.max(0, 10 - Math.floor(rating)));
    return filledStars + emptyStars;
  };
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-gray-300">
        <article className="p-4 ">
          {api.map((anime) => (
            <section
              key={anime.data.title}
              className="w-full bg-gray-800 p-4 rounded-lg"
            >
              <div className="flex flex-col items-center justify-start">
                <img
                  src={anime.data.poster}
                  alt={anime.data.title}
                  width={200}
                  className="mt-2 rounded-lg"
                />
                <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
                  {anime.data.title}
                </h1>
                <div className="text-yellow-400">
                  <span className="text-xl">
                    {generateStar(anime.data.rating)}
                  </span>
                  <span className="text-lg mx-2">({anime.data.rating})</span>
                </div>
              </div>
              <div className="mt-4 px-3 text-justify">
                <span className="font-bold">Sinopsis:</span>
                <br />
                {anime.data.synopsis}
              </div>
              <div className="mt-4 px-3 space-y-2">
                <div>
                  <span className="font-bold">Japanese Title:</span> {anime.data.japanese_title}
                </div>
                <div>
                  <span className="font-bold">By:</span> {anime.data.produser}
                </div>
                <div>
                  <span className="font-bold">Posted on:</span> {anime.data.release_date}
                </div>
                <div>
                  <span className="font-bold">Status:</span> {anime.data.status}
                </div>
                <div>
                  <span className="font-bold">Studio:</span> {anime.data.studio}
                </div>
                <div>
                  <span className="font-bold">
                    Genre: 
                  </span>
                  {anime.data.genres.map((genre) => (
                    <span key={genre.slug}> {genre.name}</span>
                  ))}
                </div>
                <div>
                  <span className="font-bold">Episode:</span> {anime.data.episode_count}
                </div>
                <div>
                  <span className="font-bold">Duration:</span>  {anime.data.duration}
                </div>
              </div>
              <div className="mt-4 px-3 flex flex-wrap gap-2">
              {anime.data.genres.map((genre) => (
                <Link href={`genres/${genre.slug}`} key={genre.slug} className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded"> 
                  {genre.name}
                </Link>
                ))}
              </div>
            </section>
          ))}
          {api.map((anime) => (
            <section key={anime.data.title}>
              <details className="border-red bg-gray-800 p-4  mt-5 w-full rounded-lg">
                <summary className="font-bold text-lg">Batch</summary>
                {/* <span
                  key={anime.data.batch.slug}
                  className="mt-2 flex flex-col gap-2"
                >
                  <Link href={anime.data.batch.otakudesu_url}>
                    Episode 1 -12
                  </Link>
                </span> */}
              </details>
              <details className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 border-red bg-gray-800 p-4 mt-5 w-full rounded-lg">
                <summary className="font-bold text-lg">Episode Lists</summary>
                {anime.data.episode_lists.map((episode) => (
                  <span key={episode.slug} className="mt-2 my-5 ">
                    {/* <Link href={episode.otakudesu_url}>{episode.episode}</Link> */}
                  </span>
                ))}
              </details>
            </section>
          ))}
        </article>
      </main>
    </>
  );
};
