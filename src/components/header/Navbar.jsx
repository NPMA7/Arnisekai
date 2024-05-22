//BERESSSSSS

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearch] = useState(false);
  const searchRef = useRef();
  const router = useRouter();

  return (
    <>
      <header className="text-gray-300 px-5 flex items-center justify-between flex-wrap bg-gray-700 p-2 fixed top-0 w-full z-10">
        <section className="flex items-center flex-shrink-0 text-blue-600 space-x-3">
          <Link href={"/"}>
            <svg
              className="fill-current h-8 w-8 mr-1"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20.1c1.6-6.5 5.7-9.7 12.1-9.7 9.7 0 10.9 7.3 15.8 8.5 3.2.8 6.1-.4 8.5-3.6-1.6 6.5-5.7 9.7-12.1 9.7-9.7 0-10.9-7.3-15.8-8.5-3.2-.8-6.1.4-8.5 3.6zM0 34.5c1.6-6.5 5.7-9.7 12.1-9.7 9.7 0 10.9 7.3 15.8 8.5 3.2.8 6.1-.4 8.5-3.6-1.6 6.5-5.7 9.7-12.1 9.7-9.7 0-10.9-7.3-15.8-8.5-3.2-.8-6.1.4-8.5 3.6z" />
            </svg>
          </Link>
          <Link
            href={"/"}
            className="hidden sm:flex font-bold text-xl md:text-2xl tracking-widest"
          >
            Arnisekai
          </Link>
        </section>
        <section className="flex gap-3 items-center text-white">
          <Link
            href={"/anime"}
            className={`font-bold text-xs md:text-sm tracking-widest flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-50 w-24 h-10  items-center rounded-md justify-center`}
            aria-current="page">
              Anime
          </Link>
          <Link
            href={"/donghua"}
            className={`font-bold text-xs md:text-sm tracking-widest flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-50 w-24 h-10  items-center rounded-md justify-center`}
          >
              Donghua
          </Link>
        </section>

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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-300 hover:text-white"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>
      <nav className=" p-2 pt-16 md:pt-20">
        <ul
          className={`sm:flex flex-wrap justify-center sm:justify-evenly space-x-0 sm:space-x-2 md:space-x-3 text-xs md:text-sm ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="mb-2 w-full sm:w-auto">
            <Link href="/anime" className="text-gray-300 hover:text-white">
              <div className="bg-gray-800 hover:bg-green-800 w-full xl:w-60 lg:w-44 md:w-32 sm:w-28 h-10 flex items-center justify-center rounded-md">
                Home
              </div>
            </Link>
          </li>
          <li className="mb-2 w-full sm:w-auto">
            <Link
              href={`/anime/ongoing`}
              className="text-gray-300 hover:text-white"
            >
              <div className="bg-gray-800 hover:bg-green-800 w-full xl:w-60 lg:w-44 md:w-32 sm:w-28 h-10 flex items-center justify-center rounded-md">
                Ongoing Anime
              </div>
            </Link>
          </li>
          <li className="mb-2 w-full sm:w-auto">
            <Link
              href={`/anime/complete`}
              className="text-gray-300 hover:text-white"
            >
              <div className="bg-gray-800 hover:bg-green-800 w-full xl:w-60 lg:w-44 md:w-32 sm:w-28 h-10 flex items-center justify-center rounded-md">
                Complete Anime
              </div>
            </Link>
          </li>
          <li className="mb-2 w-full sm:w-auto">
            <Link
              href={`/anime/genres`}
              className="text-gray-300 hover:text-white"
            >
              <div className="bg-gray-800 hover:bg-green-800 w-full xl:w-60 lg:w-44 md:w-32 sm:w-28 h-10 flex items-center justify-center rounded-md">
                Genre Anime
              </div>
            </Link>
          </li>
          <li className="mb-2 w-full sm:w-auto">
            <Link href={`/anime/list`} className="text-gray-300 hover:text-white">
              <div className="bg-gray-800 hover:bg-green-800 w-full xl:w-60 lg:w-44 md:w-32 sm:w-28 h-10 flex items-center justify-center rounded-md">
                List Anime
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
