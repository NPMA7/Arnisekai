"use client";
import Navbar from "@/components/header/Navbar";
import { CardAnime } from "@/components/main/Card";

const slugGenre = async ({ params }) => {
  const { slug } = params;
  const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/genres/${slug}`;
  const API_FETCH = await fetch(API_BASE);
  const api = await API_FETCH.json();

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
            api={api.data.anime}
            simbolRate={"💫"}
            episode={" Episode"}
          />
        </section>
      </main>
    </>
  );
};
export default slugGenre;
