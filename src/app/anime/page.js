import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { MainCardHome, MainCardOngoing } from "@/components/main/card/MainCard";

const AnimeHome = () => {
  return (
    <>
      <NavbarAnime />
      <HighlightJadwalAnime />
      <MainCardHome />
    </>
  );
};

export default AnimeHome;
