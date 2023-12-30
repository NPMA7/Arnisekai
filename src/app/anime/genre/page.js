import Maintenance from "@/components/error/Maintenance";


const GenreAnime = async () => {
  const response = await fetch(`
    ${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/complete
    `);
  const anime = await response.json();

  return (
    <div className="">
      <Maintenance/>
    </div>
  );
};

export default GenreAnime;
