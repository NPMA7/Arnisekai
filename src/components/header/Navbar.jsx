import { LittleSearchBar } from "./SearchBar";


export const NavbarAnime = () => {

    return (
      <div className="">
        <div className="max-[455px]:top-32 bg-gray-700 py-3 min-[456px]:fixed absolute w-full  md:top-20 sm:top-16 top-16 max-[455px]:z-9 min-[456px]:z-10 sm:z-10">
           
        <ul  className="  grid lg:grid-cols-5 grid-cols-6 max-[455px]:grid-cols-3 gap-2 mx-5 max-[480px]:mx-2 mr-6 " >
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-1 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="/anime">Home</a>
        </li>       
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-1  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="/anime/ongoing">Ongoing Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="/anime/complete">Complete Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-3 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="/anime/genre">Genre Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-5  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="/anime/list">List Anime</a>
        </li>
        <li className="flex-1">
        <a className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-2 lg:hidden  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="/anime/jadwal">Jadwal Tayang</a>
        </li>
       
      </ul>
      <div className=" max-[455px]:hidden  ">
        <LittleSearchBar />
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
  
  
  
  
  