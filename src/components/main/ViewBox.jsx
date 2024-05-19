"use client";

export const ViewBox = ({ api }) => {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-gray-300">
        <section className="p-4 ">
          <div className="flex gap-4">
            {api.map((anime) => (
              <div
                key={anime.data.title}
                className="bg-gray-800 p-4 rounded-lg"
              >
                <div class="flex flex-col items-center justify-start">
                  <img src={anime.data.poster} />
                  <h1 class="text-4xl font-bold py-5">{anime.data.title}</h1>
                  <div class="text-yellow-400">
                    <span class="text-2xl">
                      &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734;
                    </span>
                    <span class="text-lg mx-2">({anime.data.rating})</span>
                  </div>
                </div>
                <div class="mt-4">
                  <span class="font-bold">Sinopsis:</span>
                  <br />
                  {anime.data.synopsis}
                </div>
                <div class="mt-4 space-y-2">
                  <div>
                    <span class="font-bold">Japanese Title:</span>{" "}
                    {anime.data.japanese_title}
                  </div>
                  <div>
                    <span class="font-bold">By:</span> {anime.data.produser}
                  </div>
                  <div>
                    <span class="font-bold">Posted on:</span>{" "}
                    {anime.data.release_date}
                  </div>
                  <div>
                    <span class="font-bold">Status:</span> {anime.data.status}
                  </div>
                  <div>
                    <span class="font-bold">Studio:</span> {anime.data.studio}
                  </div>
                  <div>
                    <span class="font-bold">Genre:</span>{" "}
                    {anime.data.genres.name}
                  </div>
                  <div>
                    <span class="font-bold">Episode:</span>{" "}
                    {anime.data.episode_count}
                  </div>
                  <div>
                    <span class="font-bold">Duration:</span>{" "}
                    {anime.data.duration}
                  </div>
                </div>
                <div class="mt-4 ">
                  <span class="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    #Action
                  </span>
                  <span class="mx-2 inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    #crime
                  </span>
                  <span class="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    #drama
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
