"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const Search = () => {
    const [searchOpen, setSearch] = useState(false);
    const searchRef = useRef();
    const router = useRouter();
    return (
        <>
                <button
          onClick={() => setSearch(!searchOpen)}
          className="sm:hidden text-gray-300 hover:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-5.2-5.2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a4 4 0 10-8 0 4 4 0 008 0z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="🔍 Cari Anime/Donghua"
          className={`p-2 rounded bg-gray-800 max-sm:mt-3 text-gray-300 sm:inline-block md:inline-block lg:inline-block xl:inline-block ${
            searchOpen ? "flex" : "hidden"
          }`}
          ref={searchRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              const keyword = searchRef.current.value;
              router.push(`/anime/search/${keyword}`);
            }
          }}
        />

        </>
    )
}