"use client";
import React, { useEffect, useState } from "react";
import Maintenance from "@/utilities/error/Maintenance";
import { Complete, Ongoing } from "./HomeCard";
import { PaginationAnime } from "@/utilities/pagination/PaginationAnime";
import { CardAnime } from "./Card";

export const MainCardHome = () => {
  const [api, setAPIongoing] = useState([]);

  const [isClient, setIsClient] = useState(false);
  const fetchDataOngoing = async () => {
    const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/home`;
    const API_FETCH = await fetch(API_BASE);
    const API = await API_FETCH.json();
    setAPIongoing(API);
  };
  useEffect(() => {
    fetchDataOngoing();
    setIsClient(true);
  }, []);

  return (
    <>
      <section className="gap-10 lg:w-3/4 mt-5 font-bold lg:pt-24 pt-64">
        <h1 className="text-gray-300  lg:ml-16 ml-10 pb-5 lg:text-2xl text-xl">
          Ongoing Anime
        </h1>
        <div className="">
          {isClient ? (
            <Ongoing api_ongoing={api} key={api} />
          ) : (
            <h1 className="h-screen">Loading Data's</h1>
          )}
        </div>
      </section>
      <section className="gap-10 lg:w-3/4 mt-5 font-bold lg:pt-24 pt-64">
        <h1 className="text-gray-300 lg:ml-16 ml-10 mt-12 pb-5 lg:text-2xl text-xl">
          Complete Anime
        </h1>
        <Complete api_complete={api} symbol={"⭐"} more={"Episode"} key={api} />
      </section>
    </>
  );
};

export const MainCardOngoing = () => {
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
  }, [page]);

  if (api.status === "fail") return <Maintenance />;
  else
    return (
      <>
        <section className="gap-10 lg:w-3/4 mt-32 font-bold lg:pt-24 pt-64">
          <h1 className="lg:ml-16 ml-5 pb-5 lg:text-2xl text-xl">
            Ongoing Anime #{page}
          </h1>
          <div className="md:h-screen">
            {isClient ? (
              <CardAnime api={api} key={api} />
            ) : (
              <h1 className="h-screen">Loading Data's</h1>
            )}
          </div>
          <div className="md:pt-48 ">
            <PaginationAnime api={api} page={page} setPage={setPage} />
          </div>
        </section>
      </>
    );
};

export const MainCardComplete = () => {
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
  }, [page]);

  if (api.status === "fail") return <Maintenance />;
  else
    return (
      <>
        <section className="gap-10 lg:w-3/4 mt-32 font-bold lg:pt-24 pt-64">
          <h1 className="lg:ml-16 ml-5 pb-5 lg:text-2xl text-xl">
            Complete Anime #{page}
          </h1>
          <div className="md:h-screen">
            {isClient ? (
              <CardAnime api={api} symbol={"⭐"} more={"Episode"} key={api} />
            ) : (
              <h1 className="h-screen">Loading Data's</h1>
            )}
          </div>
          <div className="md:pt-48 ">
            <PaginationAnime api={api} page={page} setPage={setPage} />
          </div>
        </section>
      </>
    );
};
