"use client";

import React, { useEffect, useState } from "react";
import LayoutAnimeOngoing from "@/layout/anime/Ongoing";
import LayoutAnimeComplete from "@/layout/anime/Complete";
import LayoutAnimeHome from "@/layout/anime/Home";
import { PaginationAnime } from "@/utilities/PaginationAnime";

export const AnimeAPIongoing = () => {
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
    <div className="text-blue-600">
      <LayoutAnimeOngoing page={page} api={api} />
      <PaginationAnime api={api} page={page} setPage={setPage} />
    </div>
  );
};

export const AnimeAPIcomplete = () => {
    const [page, setPage] = useState(1);
    const [api, setAPI] = useState([]);
  
    const fetchData = async () => {
      const API_BASE= `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime/${page}`;
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
    <div className="text-blue-600">
      <LayoutAnimeComplete page={page} api={api} />
      <PaginationAnime api={api} page={page} setPage={setPage} />
    </div>
  );
};

export const AnimeAPIhome = () => {
    const [api_complete, setAPIcomplete] = useState(1);
    const [api_ongoing, setAPIongoing] = useState(1);
  
    const fetchDataComplete = async () => {
      const API_BASE= `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime`;
      const API_FETCH = await fetch(API_BASE);
      const API = await API_FETCH.json();
      setAPIcomplete(API);
    };

    const fetchDataOngoing = async () => {
      const API_BASE= `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime`;
      const API_FETCH = await fetch(API_BASE);
      const API = await API_FETCH.json();
      setAPIongoing(API);
    };

    useEffect(() => {
      fetchDataOngoing();
    }, [api_ongoing]);

    useEffect(() => {
      fetchDataComplete();
    }, [api_complete]);

    if (api_ongoing.status === "fail") return <Maintenance />;
    else 
    if (api_complete.status === "fail") return <Maintenance />;
    else 

  return (
    <div className="text-blue-600">
      <LayoutAnimeHome api_complete={api_complete} api_ongoing={api_ongoing}/>
    </div>
  );
};

