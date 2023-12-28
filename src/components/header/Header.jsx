const Header = () => {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-3 fixed w-full z-10 "> 
    {/* bg-blue-200 */}
    <div className="flex items-center flex-shrink-0 text-blue-600 md:mx-6 sm:mx-6 mx-0">
      <a href="/"><svg className="fill-current h-9 w-9 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      </a>
      <a href="/" className="font-bold md:text-3xl text-2xl tracking-widest">Arnisekai</a>
      
    </div>
    <div className="flex  max-[340px]:gap-2 md:gap-16 sm:gap-7 gap-6 items-center flex-shrink-0 text-blue-white sm:mr-6 mr-0 md:mt-0">
      <a href="/anime" className="flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-400 md:w-48 sm:w-28 max-[640px]:w-28 max-[340px]:w-24  h-12 md:h-16 items-center rounded-md justify-center">
      <div className="font-bold text-base tracking-widest ">Anime</div>
      </a>
      
      <a href="/donghua" className="flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-400 md:w-48 sm:w-28 max-[640px]:w-28 max-[340px]:w-24 h-12 md:h-16 items-center rounded-md justify-center">
      <div  className="font-bold text-base tracking-widest ">Donghua</div>
      </a>
    </div>

  </nav>
  );
};


export default Header;

