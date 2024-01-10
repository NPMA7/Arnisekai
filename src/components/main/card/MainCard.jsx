"use client";
import React, { useEffect, useState } from "react";
import Maintenance from "@/utilities/error/Maintenance";
import {
  CardAnimeComplete,
  CardAnimeOngoing,
} from "@/components/main/card/CardAnime";
import { PaginationAnime } from "@/utilities/PaginationAnime";

export const MainCardOngoing = () => {
  const [api, setAPIongoing] = useState([]);

  const fetchDataOngoing = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIongoing(API);
  };
  useEffect(() => {
    fetchDataOngoing();
  });

  if (api.status === "fail") return <Maintenance />;

  return (
    <>
      <>
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
      </>
    </>
  );
};


export const MainCardComplete = () => {
  const [api, setAPIcomplete] = useState([]);

  const fetchDataComplete = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIcomplete(API);
  };

  useEffect(() => {
    fetchDataComplete();
  });

  if (api.status === "fail") return <Maintenance />;

  return (
    <>
      <>
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
      </>
    </>
  );
};


export const MainCardOngoingPage = () => {
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
    <div>
      <div
        className="grid lg:grid-cols-6 pr-10 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-5"
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
  );
};


export const MainCardCompletePage = () => {
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
    <div className="">
      <div
        id="grid-complete-anime"
        className=" mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2 gap-5 overflow-hidden"
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
    </div>
  );
};
