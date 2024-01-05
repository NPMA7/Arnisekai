import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { MainCardOngoingPage } from "@/components/main/card/MainCard";
import { LittleSearchBar } from "@/components/header/SearchBar";

const OngoingAnime = () => {
  
  return (
    <div className=" text-gray-300">
      <div>
        <NavbarAnime />
      </div>
      <div className=" -top-20 fixed w-full py-2 z-10">
        <LittleSearchBar />
      </div>
      <div className="">
        <HighlightJadwalAnime />
      </div>
      <div className="font-bold lg:pt-20 pt-60 sm:pt-52 md:pt-56 ">
        <div className="ml-10 pb-5">
          <h1 className="text-xl">Ongoing Anime </h1>
        </div>
        <MainCardOngoingPage/>
      </div>
    </div>
  );
};

export default OngoingAnime;
