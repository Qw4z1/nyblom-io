import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <nav className="w-full fixed px-2 sm:px-4 py-2.5 rounded bg-opacity-80 backdrop-blur z-20">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="bg-yellow prevent-default max-w-[45%] p-2 hover:p-2 hover:m-0 text-base sm:text-xl lg:text-2xl font-bold transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              NyblomIO
            </a>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-default"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isNavExpanded ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <Link href="/about">
                  <a className={`no-underline block font-extrabold`}>
                    /About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block no-underline">
                  <a className={`no-underline block font-extrabold`}>
                    /Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="block no-underline">
                  <a className={`no-underline block font-extrabold`}>
                    /Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/now" className="block no-underline">
                  <a className={`no-underline block font-extrabold`}>
                    /Now
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="min-h-screen container pt-32 md:pt-32 lg:pt-32">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
