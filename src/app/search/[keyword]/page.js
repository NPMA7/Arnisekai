"use client";
import React, { useEffect, useState } from "react";
import { NavbarAnime } from "@/components/header/Navbar";
import { CardAnime } from "@/components/main/card/Card";

const Searchpage = async ({ params }) => {
  const { keyword } = params;

  const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/search/${keyword}`;
  const API_FETCH = await fetch(API_BASE);
  const api = await API_FETCH.json();

  return (
    <section className=" h-screen text-gray-300">
      <NavbarAnime />
      { params ? 
      <h1 className="ml-10 mt-52 py-20 text-3xl">Hasil Pencarian #{keyword}</h1>
    : null
    }
      <CardAnime api={api} />
    </section>
  );
};
export default Searchpage;
