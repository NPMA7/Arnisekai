"use client";

import React, { useEffect, useState } from "react";
import { NavbarAnime } from "@/components/header/Navbar";
import { CardAnimeComplete, CardAnimeOngoing } from "@/components/main/card/CardAnime";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";

export const LayoutAnimeComplete = ({api, page}) => {


  return (
    <div className="">
      <div className=" text-gray-300">
        <div>
          <NavbarAnime />
        </div>
        <div className="">
          <HighlightJadwalAnime />
        </div>
        <div className="font-bold lg:pt-20 pt-60 sm:pt-52 md:pt-56 ">
          <div className="ml-10 pb-5">
            <h1 className="text-xl">Ongoing Anime #{page}</h1>
          </div>
          <div
            id=""
            className="  lg:w-3/4 gap-y-16 mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2  gap-5 overflow-hidden"
          >
            {api.data?.map((data) => {
              return (
                <CardAnimeComplete
                title_anime={data.title}
                poster_anime={data.poster}
                episode_complete={data.episode_count}
                rating={data.rating} key={api}
              />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAnimeComplete;
