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
            className=" h-12 pt-1.5 sm:w-40 w-28 pl-1.5  lg:text-base text-sm  text-gray-100
          absolute overflow-hidden"
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
          <div id="details-anime-home"
            className="h-10 pt-56 text-gray-100
          absolute "
          >
            {episode_rilis}
          </div>
          <div id="details-anime-home"
            className="mt-1 w-28 pl-3 pt-60 text-gray-100
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
            className="h-12 pt-1.5 sm:w-40 w-28 pl-1.5  lg:text-base text-sm  text-gray-100
            absolute overflow-hidden"
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
          <div id="details-anime-home"
            className="pr-6 pt-52 text-gray-100
            absolute "
          >
            🌟{rating}
          </div>
          <div id="details-anime-home"
            className="mt-1 w-28 pl-2 pt-60 text-gray-100
          absolute "
          >
            {episode_complete} Episode
          </div>
        </div>
      </div>
    );
  };
  

  