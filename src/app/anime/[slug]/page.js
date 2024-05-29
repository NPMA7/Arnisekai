import { ViewBox } from "@/components/main/ViewBox";

const slugAnime = async ({ params }) => {
  const { slug } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/anime/${slug}`
  );
  const animeData = await response.json();
  const animeList = [animeData];

  return (
    <main className="min-h-screen pb-10 bg-gray-900 text-gray-300">
      {/* <Navbar /> */}
      <section className="p-4">
        <ViewBox api={animeList} slugAPI={slug} />
      </section>
    </main>
  );
};

export default slugAnime;
