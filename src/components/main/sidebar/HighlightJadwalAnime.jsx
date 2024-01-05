"use client";
import Loading from "@/utilities/loading/LoadingPage";
import React, { useEffect, useState } from "react";

const HighlightJadwalAnime = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 1400)
  }, [])
  if (loading) {
      return <Loading/>
  }
  return (
    <div className="hidden lg:block pt-40" >
      <div
        id="highlight-jadwal-anime"
        className="absolute font-semibold mt-24 dark:bg-gray-700 rounded-xl text-gray-400"
      >
        <h1 className="py-10 text-xl text-center">Jadwal Tayang Anime</h1>
        <div className="grid grid-cols-2">
          <div className="h-52 px-10">
            <h1 className="text-center text-lg">Senin</h1>
            <h2>bAlA </h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
          <div className="h-52 px-10">
            <h1 className="text-center  text-lg">Selasa</h1>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
          <div className="h-52 px-10">
            <h1 className="text-center  text-lg">Rabu</h1>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
          <div className="h-52 px-10">
            <h1 className="text-center text-lg">Kamis</h1>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
          <div className="h-52 px-10">
            <h1 className="text-center text-lg">Jumat</h1>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
          <div className="h-52 px-10">
            <h1 className="text-center text-lg">Sabtu</h1>

            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
          <div className="h-52 px-10">
            <h1 className="text-center  text-lg">Minggu</h1>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
            <h2>bAlA BAlA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HighlightJadwalAnime;
