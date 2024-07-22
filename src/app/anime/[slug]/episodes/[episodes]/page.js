"use client";
import { StreamView } from "@/components/main/StreamView";
import React, { useState, useEffect } from "react";


const episodesAnime = async ({ params, episode }) => {
  const { slug } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/anime/${slug}/episodes/${episode}`
  );
  const animeData = await response.json();
  const animeList = animeData;
  console.log(animeList)
  return (
    <>
      {/* <StreamView api={animeList}  slugAPI={slug} />  */}
      <main className="min-h-screen pb-10 bg-gray-900 text-gray-300">
        {/* <Navbar /> */}
        <section className="p-4">
          <h1>ini halamn nonton</h1>
          {/* <ViewBox api={animeList} /> */}
          <iframe
            className=""
            // src="https://desustream.me/moedesu/index.php?id=OFJYdGNoZmEwaG1MUkRtK2t6NHJXdz09"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default episodesAnime;



