import SearchBar from "./SearchBar";

export const NavbarAnime = () => {

    return (
      <div className="  bg-gray-700 py-3 min-[456px]:fixed absolute w-full  md:top-20 sm:top-16 max-[640px]:top-16 z-10 ">
        <div>
           
        <ul  className="  grid lg:grid-cols-5  md:grid-cols-6 grid-cols-4 max-[455px]:grid-cols-3 gap-2 mx-5 max-[480px]:mx-2 mr-6 " >
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-1 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Home</a>
        </li>       
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-1  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Ongoing Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Complete Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-3 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Genre Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-5  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">List Anime</a>
        </li>
        <li className="flex-1">
        <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-2 lg:hidden  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Jadwal Tayang</a>
        </li>
        
      </ul>
     <div className="px-10 mt-2">
     <form>
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
          <input type="search" id="default-search" className="md:text-lg text-sm block w-full p-2  ps-10  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 " placeholder="Search Anime Donghua"  />
          <button
            type="submit"
            className="text-white absolute  inset-y-1 end-1 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm lg:px-10 px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
        </div>

      </div>
    
        </div>
    );
  };

  export const NavbarDonghua = () => {

    return (
        <ul className=" grid md:grid-cols-4 grid-cols-2 mt-2 gap-2  mx-5 mr-6" >
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Ongoing Donghua</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Complete Donghua</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Genre Donghua</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">List Donghua</a>
        </li>
        
      </ul>
    );
  };
  
  
  
  
  