"use client";
import React, { useEffect, useState } from "react";
import Maintenance from "@/utilities/error/Maintenance";
import {
  CardAnimeComplete,
  CardAnimeOngoing,
} from "@/components/main/card/CardAnime";
import { PaginationAnime } from "@/utilities/PaginationAnime";

export const MainCardOngoing = () => {
  const [page, setPage] = useState(1);
  const [api, setAPIongoing] = useState([]);

  const fetchDataOngoing = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime/${page}`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIongoing(API);
  };
  useEffect(() => {
    fetchDataOngoing();
  }, [page]);

  if (api.status === "fail") return <Maintenance />;

  return (
    <>
       <div
        className="flex flex-shrink flex-wrap justify-center gap-5"
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
    </>
  );
};


export const MainCardComplete = () => {
  const [api, setAPIcomplete] = useState([]);

  const [page, setPage] = useState(1);

  const fetchDataComplete = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime/${page}`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIcomplete(API);
  };

  useEffect(() => {
    fetchDataComplete();
  }, [page]);

  if (api.status === "fail") return <Maintenance />;

  return (
    <>
       <div
        className="grid lg:grid-cols-6 pr-10 md:grid-cols-5 sm:grid-cols-4 max-sm:grid-cols-3 max-xs:grid-cols-2  max-s:grid-cols-1 gap-5"
      >
        {api.data?.map((data) => {
          return (
            <CardAnimeComplete
              title_anime={data.title}
              poster_anime={data.poster}
              episode_complete={data.episode_count}
              rating={data.rating}
              key={api}
            />
          );
        })}
      </div>
      <PaginationAnime api={api} page={page} setPage={setPage} />
    </>
  );
};
