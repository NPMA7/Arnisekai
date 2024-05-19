"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ViewBox } from "@/components/main/ViewBox";
import Navbar from "@/components/header/Navbar";

const slugAnime = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/anime/${slug}`
  );
  const animeList = [await response.json()];

  return (
    <>
      <main className="min-h-screen pb-10 bg-gray-900 text-gray-300">
        <Navbar />
        <section className="p-4">
          <ViewBox api={animeList} />
        </section>
      </main>
    </>
  );
};

export default slugAnime;
