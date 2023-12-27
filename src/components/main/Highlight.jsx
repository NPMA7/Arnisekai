const Highlight = ({ title_anime, poster_anime }) => {
  return (
    <div>
      <div  className="text-transparent">{title_anime}</div>
        <img id="img" src={poster_anime} width={50} height={100}></img>
   
      </div>
  
 
 );
};

export default Highlight;
