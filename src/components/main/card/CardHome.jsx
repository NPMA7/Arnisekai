export const CardAnimeOngoing = ({
    title_ongoing,
    poster_ongoing,
    episode_baru,
    episode_rilis,
  
  }) => {
    return (
      <div className="">
        <div className="hover:text-gray-30 flex justify-center cursor-pointer lg:pl-0">
          <div
            className=" md:h-14 h-12 pt-1.5 sm:w-40 w-32 flex text-center lg:text-base text-sm  text-white
          absolute overflow-hidden max-[340px]:w-24"
          >
            {title_ongoing}
          </div>
  
          <div className="border-4 rounded-md border-blue-400 ">
            <img
              id="ongoing-home-image"
              src={poster_ongoing}
              width={100}
              height={100}
            />
          </div>
          <div
            className="h-10 text-gray-100 min-[500px]:pt-52 min-[456px]:pt-48
          absolute "
          >
            {episode_rilis}
          </div>
          <div
            className="mt-1 w-28 pl-4  text-gray-100 min-[500px]:pt-56  min-[456px]:pt-52
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

    title_complete,
    poster_complete,
    episode_complete,
    rating,
  }) => {
    return (
      <div className="">
        <div className="hover:text-gray-30 flex justify-center cursor-pointer ">
          <div
            className=" md:h-14 h-13 pt-1.5 sm:w-40 w-32 flex text-center lg:text-base text-sm  text-gray-100
            absolute overflow-hidden max-[340px]:w-24"
          >
            {title_complete}
          </div>
  
          <div className="border-4 rounded-md border-blue-400 ">
            <img
              id="complete-home-image"
              src={poster_complete}
              width={100}
              height={100}
            />
          </div>
          <div
            className="pr-4 text-gray-100 min-[500px]:pt-52  min-[456px]:pt-48 
            absolute "
          >
            🌟{rating}
          </div>
          <div
            className="mt-1 w-28 pl-3 text-gray-100 min-[500px]:pt-56 min-[456px]:pt-52
          absolute "
          >
            {episode_complete} Episode
          </div>
        </div>
      </div>
    );
  };
  

  