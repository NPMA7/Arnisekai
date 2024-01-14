import Link from "next/link";

const Header = () => {
  return (
    <nav className=" text-gray-300 flex items-center justify-between flex-wrap bg-gray-700 p-3 fixed top-0 w-full z-10">
      {/* bg-blue-200 */}
      <section className="flex items-center flex-shrink-0 text-blue-600 md:mx-6 sm:mx-6 mx-0 max-[200px]:hidden  ">
        <Link href={"/"}>
          <svg
            className="fill-current h-9 w-9 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
        </Link>
        <Link
          href={"/"}
          className="max-xs:hidden font-bold sm:text-3xl text-sm xs:text-3xl  tracking-widest"
        >
          Arnisekai
        </Link>
      </section>
      <section className="flex md:gap-16 sm:gap-7 gap-4 items-center flex-shrink-1 text-blue-white sm:mr-6 md:mt-0">
        <Link
          href={"/anime"}
          className="flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-400 md:w-48 sm:w-28 max-[640px]:w-28 max-[380px]:w-24  h-12 md:h-16 items-center rounded-md justify-center"
        >
          <h1 className="font-bold text-base tracking-widest ">Anime</h1>
        </Link>
        <Link
          href={"/donghua"}
          className="flex border border-black hover:text-blue-600 bg-blue-600 hover:bg-blue-400 md:w-48 sm:w-28 max-[640px]:w-28 max-[380px]:w-24  h-12 md:h-16 items-center rounded-md justify-center"
        >
          <h1 className="font-bold text-base tracking-widest ">Donghua</h1>
        </Link>
      </section>
    </nav>
  );
};

export default Header;
