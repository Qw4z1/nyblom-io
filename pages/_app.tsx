import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const Navbar = () => {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="w-full fixed z-20 top-0 left-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-blur p-4 md:p-5 lg:py-6 lg:px-10">
        <nav className="flex justify-between">
          <Link href="/">
            <a className="bg-default-yellow prevent-default max-w-[45%] p-2 -m-2 text-base sm:text-xl lg:text-2xl font-semibold transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              NyblomIO
            </a>
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-10 text-gray-600 dark:text-gray-400 transition-colors">
            <Link href="/about">/About</Link>
            <Link href="/blog">/Blog</Link>
            <Link href="/portfolio">/Portfolio</Link>
            <Link href="/now">/Now</Link>
          </div>
        </nav>
      </header>
      <main className="min-h-screen container pt-32 md:pt-32 lg:pt-32">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
