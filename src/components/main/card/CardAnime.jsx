export const CardAnimeOngoing = ({
  title_anime,
  poster_anime,
  episode_baru,
  episode_rilis,
}) => {
  return (
    <div className="">
      <div className="ml-4">
        <div
          className="mt-40 text-gray-100  
        absolute max-xs:text-sm"
        >
          {episode_rilis}
        </div>
        <div
          className="mt-44  text-gray-100
        absolute max-xs:text-sm"
        >
          {episode_baru}
        </div>
      </div>
      <div className="hover:text-gray-30 flex justify-center cursor-pointer">
        <div className="absolute pt-2 h-14 w-32 hover:h-36 text-center overflow-hidden">
          {title_anime}
        </div>
        <div className="border-4 text-center rounded-md border-blue-400 ">
          <img id="image-card-anime" src={poster_anime} />
        </div>
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
      <div className="pl-4">
      <div
          className="mt-52 max-xs:mt-40 text-gray-100 
        absolute max-xs:text-sm"
        >
          ⭐{rating}
        </div>
        <div
          className="mt-56 max-xs:mt-44 text-gray-100
        absolute max-xs:text-sm"
        >
          {episode_complete} Episode
        </div>
      </div>
      <div className="hover:text-gray-30 flex justify-center cursor-pointer">
        <div className="absolute pt-2 h-14 w-32 hover:h-36 text-center overflow-hidden">
          {title_anime}
        </div>
        
        <div className="border-4 rounded-md border-blue-400 ">
          <img id="image-card-anime" src={poster_anime} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
