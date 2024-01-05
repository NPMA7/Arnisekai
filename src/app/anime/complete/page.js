"use client";

import React, { useEffect, useState } from "react";
import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import Maintenance from "@/utilities/error/Maintenance";
import { MainCardCompletePage } from "@/components/main/card/MainCard";

const CompleteAnime = () => {

    return (
      <div className=" text-gray-300">
        <div>
          <NavbarAnime />
        </div>
        <div className="">
          <HighlightJadwalAnime />
        </div>
        <div  className="font-bold lg:pt-20 pt-60 sm:pt-52 md:pt-56 ">
          <div className="ml-10 pb-5">
            <h1 className="text-xl">Complete Anime</h1>
          </div>
       <MainCardCompletePage/>
        </div>
      </div>
    );
};

export default CompleteAnime;
