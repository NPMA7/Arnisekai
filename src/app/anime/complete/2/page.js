import Maintenance from "@/components/error/Maintenance";
import { NavbarAnime } from "@/components/header/Navbar";
import { CardAnime } from "@/components/main/card/CardAnime";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";

const CompleteAnime = async () => {
  const api_complete = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete-anime/2`;

  const complete = await fetch(api_complete);
  const complete_anime = await complete.json();
  // console.log(ongoing_anime.pagination)

  if (complete_anime.status === "fail") return <Maintenance />;
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
            <h1 className="text-xl">Complete Anime</h1>
          </div>
          <div
            id=""
            className="  lg:w-3/4 gap-y-16 mx-2 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 max-[451px]:grid-cols-2  gap-4 overflow-hidden"
          >
            {complete_anime.data.map((data) => {
              return (
                <CardAnime
                title_anime={data.title}
                poster_anime={data.poster}
                episode_rilis={data.rating}
                episode_baru={data.episode_count}
              />
              );
            })}
          </div>
          <div className="">
            <div className=" ml-10 pt-20 flex justify-center gap-10 cursor-pointer text-center">
              <a href="../complete">
                <h1 className="text-xl hover:bg-blue-200  py-1 px-3 hover:text-black">
                  {complete_anime.pagination.previous_page}
                </h1>
              </a>
              <a href="2">
                <h1 className="text-xl bg-blue-700 hover:bg-blue-200 py-1 px-3 hover:text-black">
                  {complete_anime.pagination.current_page}
                </h1>
              </a>
              <a href="3">
                <h1 className="text-xl hover:bg-blue-200  py-1 px-3 hover:text-black">
                  {complete_anime.pagination.next_page}
                </h1>
              </a>
              <a href="53">
                <h1 className="text-xl hover:bg-blue-200 py-1 px-3 hover:text-black">
                  {complete_anime.pagination.last_visible_page}
                </h1>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    );
};

export default CompleteAnime;
