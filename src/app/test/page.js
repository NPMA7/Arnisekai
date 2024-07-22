"use client";
import React, { useState, useEffect } from "react";
const Test =() => {
    const [animeList, setAnimeList] = useState({ data: { ongoing_anime: [], complete_anime: [] } });

    useEffect(() => {
      const fetchAnimeList = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}`
        );
        const data = await response.json();
        setAnimeList(data);
      };
  
      fetchAnimeList();
    }, []);
    
    console.log(animeList)
return (
    <div className="">
         ini
    </div>
)
}
export default Test
