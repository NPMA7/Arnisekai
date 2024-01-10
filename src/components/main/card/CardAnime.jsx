export const CardAnimeOngoing = ({
  title_anime,
  poster_anime,
  episode_baru,
  episode_rilis,

}) => {
  return (
    <div className="">
      <div className="hover:text-gray-30 flex justify-center cursor-pointer">
        <div
          className="absolute pt-2 h-14 w-40 text-center overflow-hidden"
        >
          {title_anime}
        </div>

        <div className="border-4 rounded-md border-blue-400 ">
          <img
            id="image-card-anime"
            src={poster_anime}
          />
        </div>
        <div
          className="hover:text-blue-400 mt-52 text-gray-100  
        absolute text-sm"
        >
          {episode_rilis}
        </div>
        <div
          className="hover:text-blue-400 mt-56 text-gray-100
        absolute text-sm"
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
      <div className="hover:text-gray-30 flex justify-center cursor-pointer">
        <div
          className="absolute pt-2 h-14 w-40 text-center overflow-hidden"
        >
          {title_anime}
        </div>

        <div className="border-4 rounded-md border-blue-400 ">
          <img
            id="image-card-anime"
            src={poster_anime}
          />
        </div>
        <div
          className="hover:text-blue-400 mt-52 text-gray-100 
        absolute text-sm"
        >
          ⭐{rating}
        </div>
        <div
          className="hover:text-blue-400 mt-56 text-gray-100
        absolute text-sm"
        >
          {episode_complete} Episode
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};


