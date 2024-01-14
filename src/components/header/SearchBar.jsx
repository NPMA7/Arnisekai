"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export const SearchBar = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleRef = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <form className="text-gray-300">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        Search
      </label>
      <section className="relative">
        <h1 className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </h1>
        <input
          type="search"
          className="md:text-lg text-sm block w-full p-5  ps-10  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 hover:bg-blue "
          placeholder="Search Anime Donghua"
          required
          ref={searchRef}
        />
        <button
          type="submit"
          className="text-white absolute focus:bg-black active:bg-black inset-y-2 end-2 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600  focus:ring-blue-500"
          onClick={handleRef}
        >
          Search
        </button>
      </section>
    </form>
  );
};


export const LittleSearchBar = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleRef = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <>
      <form className="text-gray-300 px-10 relative bg-gray-700 pt-2 pb-1">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only text-white"
        >
          Search
        </label>
        <section className="relative">
          <h1 className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-50"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </h1>
          <input
            type="search"
            className="md:text-lg text-sm block w-full p-2 py-3 ps-10  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 "
            placeholder="Search Anime Donghua"
            required
            ref={searchRef}
          />
        <button
          type="submit"
          className="text-white absolute focus:bg-black active:bg-black inset-y-2 end-2 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600  focus:ring-blue-500"
          onClick={handleRef}
        >
          Search
        </button>
        </section>
      </form>
    </>
  );
};
