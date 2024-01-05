import Maintenance from "@/utilities/error/Maintenance";


const ListAnime = async () => {
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

export default ListAnime;
