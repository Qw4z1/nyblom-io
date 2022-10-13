import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white fixed px-2 sm:px-4 py-2.5 rounded bg-opacity-80 backdrop-blur z-20">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="bg-default-yellow prevent-default max-w-[45%] p-2 text-base sm:text-xl lg:text-2xl font-semibold transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              NyblomIO
            </a>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            onClick={() => {
              console.log(`lciic + ${isNavExpanded}`);
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
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/about" className="block">
                  /About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block">
                  /Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="block">
                  /Portfolio
                </Link>
              </li>
              <li>
                <Link href="/now" className="block">
                  /Now
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
