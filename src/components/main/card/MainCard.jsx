"use client";
import Loading from "@/utilities/loading/LoadingPage";
import React, { useEffect, useState } from "react";
import Maintenance from "@/utilities/error/Maintenance";
import { CardAnimeComplete, CardAnimeOngoing } from "@/components/main/card/CardAnime";
import { PaginationAnime } from "@/utilities/PaginationAnime";

export const MainCardOngoing = () => {
  const [page, setPage] = useState(1);
  const [api_ongoing, setAPIongoing] = useState([]);

  const fetchDataOngoing = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime/${page}`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIongoing(API);
  };
  useEffect(() => {
    fetchDataOngoing();
  }, [page]);

  if (api_ongoing.status === "fail") return <Maintenance />;


  return (
    
      <>
        <>
        {api_ongoing.data?.map((data) => {
          return (
            <CardAnimeOngoing
            title_anime={data.title}
            poster_anime={data.poster}
            episode_baru={data.current_episode}
            episode_rilis={data.newest_release_date}
            key={api_ongoing}
            />
            );
          })}
          </>
          
      </>

  );
};

export const MainCardOngoingPage = () => {
  const [page, setPage] = useState(1);
  const [api_ongoing, setAPIongoing] = useState([]);

  const fetchDataOngoing = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime/${page}`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIongoing(API);
  };
  useEffect(() => {
    fetchDataOngoing();
  }, [page]);

  if (api_ongoing.status === "fail") return <Maintenance />;


  return (
    <div>
    <div
    id="grid-ongoing-anime"
    className=" mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2 gap-5 overflow-hidden"
    >
    {api_ongoing.data?.map((data) => {
      return (
        <CardAnimeOngoing
        title_anime={data.title}
        poster_anime={data.poster}
        episode_baru={data.current_episode}
        episode_rilis={data.newest_release_date}
        key={api_ongoing}
        />
        );
      })}
  </div>
  <PaginationAnime api={api_ongoing} page={page} setPage={setPage} />
  
      </div>


  );
};

export const MainCardComplete = () => {
    const [api_complete, setAPIcomplete] = useState([]);
    
  const [page, setPage] = useState(1);

    const fetchDataComplete = async () => {
      const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime/${page}`;
      const API_FETCH = await fetch(API_BASE);
      const API = await API_FETCH.json();
      setAPIcomplete(API);
    };

    useEffect(() => {
      fetchDataComplete();
    },[page]);
  
    if (api_complete.status === "fail") return <Maintenance />;

    return (
      <div className="">
        <div
        id="grid-complete-anime-home"
        className="mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2 gap-5 overflow-hidden"
      >
        {api_complete.data?.map((data) => {
          return (
            <CardAnimeComplete
              title_anime={data.title}
              poster_anime={data.poster}
              episode_complete={data.episode_count}
              rating={data.rating}
              key={api_complete}
            />
          );
        })}
      </div>
      
      </div>
    );
  };
  

export const MainCardCompletePage = () => {
    const [api_complete, setAPIcomplete] = useState([]);
    
  const [page, setPage] = useState(1);

    const fetchDataComplete = async () => {
      const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime/${page}`;
      const API_FETCH = await fetch(API_BASE);
      const API = await API_FETCH.json();
      setAPIcomplete(API);
    };

    useEffect(() => {
      fetchDataComplete();
    },[page]);
  
    if (api_complete.status === "fail") return <Maintenance />;

    return (
      <div className="">
        <div
        id="grid-complete-anime"
        className="mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2 gap-5 overflow-hidden"
      >
        {api_complete.data?.map((data) => {
          return (
            <CardAnimeComplete
              title_anime={data.title}
              poster_anime={data.poster}
              episode_complete={data.episode_count}
              rating={data.rating}
              key={api_complete}
            />
          );
        })}
      </div>
      <PaginationAnime api={api_complete} page={page} setPage={setPage} />
      </div>
    );
  };
  