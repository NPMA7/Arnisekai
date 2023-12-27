const Navbar = () => {

    return (
      <div className="bg-gray-700 py-3 fixed w-full z-10 md:top-20 top-16  ">
        <ul id="navbar"  class=" grid md:grid-cols-4  grid-cols-5  gap-2 mx-5 mr-6" >
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Ongoing Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Complete Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white" href="#">Genre Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  px-5 bg-blue-500 hover:bg-blue-700 text-white" href="#">List Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2 px-3 md:hidden  bg-blue-500 hover:bg-blue-700 text-white" href="#">Jadwal Liris</a>
        </li>
        
      </ul></div>
    );
  };
  
  
  export default Navbar;
  
  