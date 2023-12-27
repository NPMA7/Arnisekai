const Navbar = () => {

    return (
        <ul class=" grid md:grid-cols-4 grid-cols-2 mt-2 gap-2  mx-5 mr-6" >
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Ongoing Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Complete Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">Genre Anime</a>
        </li>
        <li class="flex-1">
          <a class="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white" href="#">List Anime</a>
        </li>
        
      </ul>
    );
  };
  
  
  export default Navbar;
  
  