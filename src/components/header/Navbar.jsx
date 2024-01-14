import Link from "next/link";
import { LittleSearchBar } from "./SearchBar";

export const NavbarAnime = () => {
  return (
    <>
      <nav className="bg-gray-700 py-3 md:fixed absolute w-full md:top-20 sm:top-16 top-16 md:z-10 z-9 ">
        <ul className="  grid lg:grid-cols-5 md:grid-cols-6 xs:grid-cols-3 grid-cols-3 gap-2 mx-5 max-xs:mx-2 mr-6 ">
          <li className="flex-1">
            <Link
              className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-1 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden"
              href={"/anime"}
            >
              Home
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-1  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden"
              href={"/anime/ongoing"}
            >
              Ongoing Anime
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="text-center block border border-blue-500 rounded h-9 pt-1.5  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden"
              href={"/anime/complete"}
            >
              Complete Anime
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-3 bg-blue-500 hover:bg-blue-700 text-white overflow-hidden"
              href={"/anime/genre"}
            >
              Genre Anime
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-5  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden"
              href={"/anime/list"}
            >
              List Anime
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="text-center block border border-blue-500 rounded h-9 pt-1.5 px-2 lg:hidden  bg-blue-500 hover:bg-blue-700 text-white overflow-hidden"
              href={"/anime/jadwal"}
            >
              Jadwal Tayang
            </Link>
          </li>
        </ul>
        <section className="max-xs:t-36">
          <LittleSearchBar/>
        </section>
      </nav>
    </>
  );
};

export const NavbarDonghua = () => {
  return (
    <ul className=" grid md:grid-cols-4 grid-cols-2 mt-2 gap-2  mx-5 mr-6">
      <li className="flex-1">
        <Link
          className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white"
          href={"#"}
        >
          Ongoing Donghua
        </Link>
      </li>
      <li className="flex-1">
        <Link
          className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white"
          href={"#"}
        >
          Complete Donghua
        </Link>
      </li>
      <li className="flex-1">
        <Link
          className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white"
          href={"#"}
        >
          Genre Donghua
        </Link>
      </li>
      <li className="flex-1">
        <Link
          className="text-center block border border-blue-500 rounded py-2  bg-blue-500 hover:bg-blue-700 text-white"
          href={"#"}
        >
          List Donghua
        </Link>
      </li>
    </ul>
  );
};
