import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { LittleSearchBar } from "@/components/header/SearchBar";
import {
  MainCardComplete,
  MainCardOngoing,
} from "@/components/main/card/MainCard";


const AnimeHome = () => {

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
      <div className="font-bold lg:pt-24 pt-64 ">
        <div className="ml-10">
          <h1 className="lg:text-2xl text-xl">Ongoing Anime</h1>
        </div>
        <div
          id="box-card-anime"
          className="flex flex-wrap gap-8 lg:w-3/4 pl-10 pr-2 py-10"
        >
          <MainCardOngoing />
        </div>
        <div className="ml-10 pt-10">
          <h1 className="lg:text-2xl text-xl">Complete Anime</h1>
        </div>
        <div
          id="box-card-anime"
          className="flex flex-wrap gap-8 lg:w-3/4 pl-10 pr-2 py-10 max-sm:overflow-hidden"
        >
          <MainCardComplete />
        </div>
      </div>
    </div>
  );
};

export default AnimeHome;
