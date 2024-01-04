"use client";

import React, { useEffect, useState } from "react";
import Maintenance from "@/components/error/Maintenance";
import { NavbarAnime } from "@/components/header/Navbar";
import { CardAnimeOngoing } from "@/components/main/card/CardAnime";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { PaginationAnime } from "@/utilities/PaginationAnime";

const OngoingAnime = () => {

  const [page, setPage] = useState(1);
  const [api, setAPI] = useState([]);

  const fetchData = async () => {
    const API_BASE= `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime/${page}`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPI(API);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  if (api.status === "fail") return <Maintenance />;
  else 

    return (
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
                <CardAnimeOngoing
                title_anime={data.title}
                poster_anime={data.poster}
                episode_baru={data.current_episode}
                episode_rilis={data.newest_release_date}
                key={api}
                />
              );
            })}
          </div>
          <PaginationAnime api={api} page={page} setPage={setPage} />
        </div>
      </div>
    );
};

export default OngoingAnime;
