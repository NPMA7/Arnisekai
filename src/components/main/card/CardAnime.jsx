export const CardAnimeOngoing = ({
  title_anime,
  poster_anime,
  episode_baru,
  episode_rilis,

}) => {
  
  return (
    <div className="">
      
      <div className="hover:text-gray-30 flex justify-center cursor-pointer lg:pl-0">
        <div
          className=" md:h-13 h-12 pt-1.5 sm:w-40 w-32 flex text-center lg:text-base text-sm  text-white
        absolute overflow-hidden max-[340px]:w-24"
        >
          {title_anime}
        </div>

        <div className="border-4 rounded-md border-blue-400 ">
          <img
            id="ongoing-home-image"
            src={poster_anime}
            width={100}
            height={100}
          />
        </div>
        <div
          className="h-10 pt-52 text-gray-100 max-[600px]:pt-40  
        absolute "
        >
          {episode_rilis}
        </div>
        <div
          className="mt-1 w-28 pl-4 pt-56 text-gray-100 max-[600px]:pt-44  
        absolute "
        >
          {episode_baru}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export const CardAnimeComplete = ({

  title_anime,
  poster_anime,
  episode_complete,
  rating,
}) => {
  return (
    <div className="">
      <div className="hover:text-gray-30 flex justify-center cursor-pointer ">
        <div
          className=" md:h-13 h-12 pt-1.5 sm:w-40 w-32 flex text-center lg:text-base text-sm  text-gray-100
          absolute overflow-hidden max-[340px]:w-24"
        >
          {title_anime}
        </div>

        <div className="border-4 rounded-md border-blue-400 ">
          <img
            id="complete-home-image"
            src={poster_anime}
            width={100}
            height={100}
          />
        </div>
        <div
          className="pr-4 pt-52 text-gray-100 max-[600px]:pt-40 
          absolute "
        >
          🌟{rating}
        </div>
        <div
          className="mt-1 w-28 pl-3 pt-56 text-gray-100 max-[600px]:pt-44 
        absolute "
        >
          {episode_complete} Episode
        </div>
      </div>
    </div>
  );
};


