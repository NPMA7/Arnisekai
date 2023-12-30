export const SearchBar = () => {

    return (
        <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          </div>
          <input type="search" id="default-search" className="md:text-lg text-sm block w-full p-5  ps-10  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 hover:bg-blue " placeholder="Search Anime Donghua"  />
          <button
            type="submit"
            className="text-white absolute  inset-y-2 end-2 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600  focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>
    );
  };
  
  
  export const LittleSearchBar = () => {
    return (
      
      <div className="px-10 relative max-[455px]:top-36  bg-gray-700 pt-2 pb-1">
     <form >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only text-white"
        >
          Search
        </label>
        <div className="relative  ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          </div>
          <input type="search" id="default-search" className="md:text-lg text-sm block w-full p-2 py-3 ps-10  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 " placeholder="Search Anime Donghua"  />
          <button
            type="submit"
            className="text-white absolute  inset-y-1 end-1 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm lg:px-10 px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
        </div>
    )
  }