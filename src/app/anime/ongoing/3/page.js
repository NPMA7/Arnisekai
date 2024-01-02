import Maintenance from "@/components/error/Maintenance";
import { NavbarAnime } from "@/components/header/Navbar";
import { CardAnime} from "@/components/main/card/CardAnime";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";

const OngoingAnime = async () => {
  const api_ongoing = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime/3`;

  const ongoing = await fetch(api_ongoing);
  const ongoing_anime = await ongoing.json();
  // console.log(ongoing_anime.pagination)

  if (ongoing_anime.status === "fail") return <Maintenance />;
  else
    return (
      <div className=" text-gray-300">
        <div>
          <NavbarAnime />
        </div>
        <div className="">
          <HighlightJadwalAnime />
        </div>
        <div className="font-bold lg:pt-20 pt-60 sm:pt-52 md:pt-56 ">
          <div className="ml-10 pb-5">
            <h1 className="text-xl">Ongoing Anime</h1>
          </div>
          <div
            id=""
            className="pb-96  lg:w-3/4 gap-y-16 mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2  gap-4 overflow-hidden"
          >
            {ongoing_anime.data.map((data) => {
              return (
                <CardAnime
                title_anime={data.title}
                poster_anime={data.poster}
                episode_baru={data.current_episode}
                episode_rilis={data.newest_release_date}
              />
              );
            })}
          </div>
          <div className="pt-40">
            <div className=" ml-10 pt-20 flex justify-center gap-10 cursor-pointer text-center">
              <a href="2">
                <h1 className="text-xl hover:bg-blue-200  py-1 px-3 hover:text-black">
                  {ongoing_anime.pagination.previous_page}
                </h1>
              </a>
              <a href="3">
                <h1 className="text-xl bg-blue-700 hover:bg-blue-200 py-1 px-3 hover:text-black">
                  {ongoing_anime.pagination.current_page}
                </h1>
              </a>
              <a href="3">
                <h1 className="text-xl hover:bg-blue-200 py-1 px-3 hover:text-black">
                  {ongoing_anime.pagination.last_visible_page}
                </h1>
              </a>
              <a href="../2">
                <h1 className="text-xl hover:bg-blue-200  py-1 px-3 hover:text-black">
                  {ongoing_anime.pagination.has_next_page}
                </h1>
              </a>
              <a href="../2">
                <h1 className="text-xl hover:bg-blue-200  py-1 px-3 hover:text-black">
                  {ongoing_anime.pagination.has_previous_page}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OngoingAnime;
