import Link from "next/link";

const Footer = () => {
  return (

      <footer className="bg-gray-700 mx-auto min-screen-xl p-6 py-6 lg:py-8">
        <main className="md:flex md:justify-between">
          <section className="mb-6 flex items-center flex-shrink-0 text-blue-600">
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
          <section className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <section>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Resources
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <Link href={"/anime"} className="hover:underline">
                    Anime
                  </Link>
                </li>
                <li>
                  <Link href={"/donghua"} className="hover:underline">
                    Donghua
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={"#"} className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="hover:underline ">
                    Github
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={"#"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </section>
          </section>
        </main>

        <main className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
          <section className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-white">
              © {new Date().getFullYear()}
              <Link href={"/"} className="hover:underline">
                <span className="tracking-widest"> Arnisekai</span>
              </Link>
              . All Rights Reserved.
            </span>
          </section>
        </main>
      </footer>
  );
};

export default Footer;
