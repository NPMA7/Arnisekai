import CardList from "@/components/main/CardLists";

const AnimeHome = async () => {
  
  const response = await fetch(`
  ${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime
  `);
const anime = await response.json();
return (
  <div className="">
    <div className="">
      Anime
      {
       anime.data.map(data => {
        return (<CardList title_anime={data.title} />)
       })    
         

        }
    </div>

  </div>
);
};

export default AnimeHome;
