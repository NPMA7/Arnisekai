import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { LittleSearchBar } from "@/components/header/SearchBar";
import { CardAnimeComplete, CardAnimeOngoing } from "@/components/main/card/CardAnime";

const LayoutAnimeHome = ({api_complete, api_ongoing}) => {
//   const ongoing = await fetch(`
//   ${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime
//   `);
//   const ongoing_anime = await ongoing.json();
//   // console.log(anime.data)

//   const complete = await fetch(`
//   ${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime
//   `);
//   const complete_anime = await complete.json();
//   // console.log(complete_anime.data)

//   if (ongoing_anime.status === "fail") return <Maintenance />;
//   if (complete_anime.status === "fail") return <Maintenance />;
//   else 

  return (
    <div className=" text-gray-300">
      <div>
        <NavbarAnime />
      </div>
      <div className="">
        <HighlightJadwalAnime />
      </div>
      <div className=" -top-20 fixed w-full py-2 z-10">
        <LittleSearchBar />
      </div>

      <div className="font-bold lg:pt-20 pt-60 sm:pt-52 md:pt-56 ">
        <div className="ml-10">
          <h1 className="text-xl">Ongoing Anime</h1>
        </div>
        <div
          id="grid-ongoing-anime-home"
          className=" mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2  gap-5 overflow-hidden"
        >
          {api_ongoing.data?.map((data) => {
            return (
              <CardAnimeOngoing
                title_anime={data.title}
                poster_anime={data.poster}
                episode_baru={data.current_episode}
                episode_rilis={data.newest_release_date}
                key={api_ongoing}
              />
            );
          })}
        </div>
        <div className="ml-10 pt-20 ">
          <h1 className="text-xl">Complete Anime</h1>
        </div>
        <div
          id="grid-complete-anime-home"
          className="mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2 gap-5 overflow-hidden"
        >
          {api_complete.data?.map((data) => {
            return (
              <CardAnimeComplete
                title_anime={data.title}
                poster_anime={data.poster}
                episode_complete={data.episode_count}
                rating={data.rating} key={api_complete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default  LayoutAnimeHome;
