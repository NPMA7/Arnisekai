"use client"
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="text-gray-300 flex items-center justify-between flex-wrap bg-gray-700 p-2 px-5 fixed top-0 w-full z-10">
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
            className="hidden sm:flex font-bold text-xl md:text-2xl lg:text-3xl tracking-widest"
          >
            Arnisekai
          </Link>
        </section>
        <section className="flex gap-3 items-center text-white">
          <Link
            href={"/anime"}
            className={`font-bold text-xs md:text-sm tracking-widest flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-400 w-24 h-10 lg:w-40 lg:h-14 items-center rounded-md justify-center`}
            aria-current="page">
              Anime
          </Link>
          <Link
            href={"/donghua"}
            className={`font-bold text-xs md:text-sm tracking-widest flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-400 w-24 h-10 lg:w-40 lg:h-14 items-center rounded-md justify-center`}
          >
              Donghua
          </Link>
        </section>

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
    </>
  );
};

export default Header;
