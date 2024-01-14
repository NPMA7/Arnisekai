import Link from "next/link";

export const Ongoing = ({api_ongoing, symbol, more}) => {
    return (
      <>
         <Link
          href={"#"}
          className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 s:grid-cols-2  w-11/12 ml-5 mr-10 gap-y-5"
        >
         {api_ongoing.data?.ongoing_anime.map((data) => {
            return (
              <section className="hover:text-gray-30 flex justify-center cursor-pointer">
                <h1 className="absolute pt-2 h-14 w-32 hover:h-36 text-center overflow-hidden">
                  {data.title}
                </h1>
                <div className="border-4 text-center rounded-md border-blue-400 ">
                  <img id="image-card-anime" src={data.poster} />
                </div>
                <h3 className="mt-36 text-gray-100 absolute max-xs:text-sm">
                  {data.newest_release_date}
                  </h3>
                <h4 className="mt-40 text-gray-100 absolute max-xs:text-sm">
                  {data.current_episode}
                </h4>
              </section>
            );
          })}
        </Link>
       
      </>
    );
  };

export const Complete = ({api_complete, symbol, more}) => {
    return (
      <>
         <Link
          href={"#"}
          className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 s:grid-cols-2  w-11/12 ml-5 mr-10 gap-y-5"
        >
         {api_complete.data?.complete_anime.map((data) => {
            return (
              <section className="hover:text-gray-30 flex justify-center cursor-pointer">
                <h1 className="absolute pt-2 h-14 w-32 hover:h-36 text-center overflow-hidden">
                  {data.title}
                </h1>
                <div className="border-4 text-center rounded-md border-blue-400 ">
                  <img id="image-card-anime" src={data.poster} />
                </div>
  
                <h3 className="mt-36 text-gray-100 absolute max-xs:text-sm">
                  {symbol}
                  {data.rating}
                </h3>
                <h4 className="mt-40 text-gray-100 absolute max-xs:text-sm">
                  {data.episode_count} {more}
                </h4>
              </section>
            );
          })}
        </Link>
       
      </>
    );
  };