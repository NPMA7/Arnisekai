import CardList from "@/components/main/CardLists";
import Navbar from "@/components/header/navbar/NavbarAnime";

const AnimeHome = async () => {
  const response = await fetch(`
  ${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime
  `);
  const anime = await response.json();
  // console.log(anime.data)
  return (
    <div className="pt-40 text-gray-300">
        <div className="">
          <Navbar />
        </div>
      <div className="">
        <div className="px-7">
          <h1 className="">Ongoing Anime</h1>
        </div>
        <div
          id="grid-ongoing-anime-home"
          className=" lg:mx-80  sm:mx-20 mx-5 bg-blue-500 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-5 overflow-hidden"
        >
          {anime.data.map((data) => {
            return (
              <CardList title_anime={data.title} poster_anime={data.poster} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimeHome;
