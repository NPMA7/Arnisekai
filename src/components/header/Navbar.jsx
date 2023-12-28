export const NavbarAnime = () => {

    return (
      <div className="  bg-gray-700 py-3   fixed w-full z-10 md:top-20 sm:top-16 max-[640px]:top-16 max-[340px]:top-16 ">
        <ul  className=" grid lg:grid-cols-4  md:grid-cols-5 grid-cols-5  gap-2  max-[640px]:gap-1 mx-5 max-[340px]:mx-2 mr-6" >
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Ongoing Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Complete Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Genre Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2 max-[340px]:px-2  px-5 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">List Anime</a>
        </li>
        <li className="flex-1">
          <a className="text-center block border border-blue-500 rounded py-2 px-2 lg:hidden  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden" href="#">Jadwal Tayang</a>
        </li>
        
      </ul></div>
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
  
  
  
  
  