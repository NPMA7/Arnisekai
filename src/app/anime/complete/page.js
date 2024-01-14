import { NavbarAnime } from "@/components/header/Navbar";
import HighlightJadwalAnime from "@/components/main/sidebar/HighlightJadwalAnime";
import { MainCardComplete } from "@/components/main/card/MainCard";

const CompleteAnime = () => {
  return (
    <section className=" text-gray-300">
      <NavbarAnime />
      <HighlightJadwalAnime />
      <MainCardComplete />
    </section>
  );
};

export default CompleteAnime;
