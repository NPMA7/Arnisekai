import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { MainCardOngoing } from "@/components/main/card/MainCard";

const OngoingAnime = () => {
  return (
    <section className=" text-gray-300">
      <NavbarAnime />
      <HighlightJadwalAnime />
      <MainCardOngoing />
    </section>
  );
};

export default OngoingAnime;
