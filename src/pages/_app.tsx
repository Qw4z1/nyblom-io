import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";
import NavBarLink from "../components/navbar/NavBarLink";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/footer";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navLinkClickHandler = () => {
    setIsNavExpanded(false);
  };

  return (
    <div className={montserrat.className}>
      <nav className="w-full fixed px-2 sm:px-4 py-2.5 rounded bg-white z-20">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link
            href="/"
            className="bg-yellow prevent-default max-w-[45%] p-2 hover:p-2 hover:m-0 text-base sm:text-xl lg:text-2xl font-bold transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
          >
            NyblomIO
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
              <li className="mt-3 md:mt-0">
                <NavBarLink
                  text="/CTO Coaching"
                  link="/cto-coaching"
                  onClick={navLinkClickHandler}
                />
              </li>
              <li className="mt-3 md:mt-0">
                <NavBarLink
                  text="/Blog"
                  link="/blog"
                  onClick={navLinkClickHandler}
                />
              </li>
              <li className="mt-3 md:mt-0">
                <NavBarLink
                  text="/Newsletter"
                  link="/newsletter"
                  onClick={navLinkClickHandler}
                />
              </li>
              <li className="mt-3 md:mt-0">
                <NavBarLink
                  text="/About"
                  link="/about"
                  onClick={navLinkClickHandler}
                />
              </li>
              <li className="mt-3 md:mt-0">
                <NavBarLink
                  text="/Now"
                  link="/now"
                  onClick={navLinkClickHandler}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="min-h-screen container pt-32 md:pt-32 lg:pt-32 ">
        <Component {...pageProps} />
        <Analytics />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <Script
          src="https://js.sparkloop.app/team_de5b5fb5c5a9.js"
          strategy="afterInteractive"
          data-sparkloop
        />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
