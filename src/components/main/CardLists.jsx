const CardList = ({ title_anime, poster_anime }) => {
  return (
    <div className="">
      {/* post 1 */}
      <div className="bg-blue-500  ">
        <div className="bg-red-500 w-60 h-16 z-1
        absolute z-1 overflow-hidden">{title_anime}</div>
        <img id="ongoing-home-image" src={poster_anime} width={100} height={100}/>
      </div>
    </div>
  );
};

export default CardList;
