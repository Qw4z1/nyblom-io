import type { NextPage } from "next";
import Link from "next/link";
import { Head } from "../components/Head";
import SocialRow from "../components/SocialRow";

const Home: NextPage = () => {

  return (
    <>
      <Head title="NyblomIO" description="Personal blog of Viktor Nyblom." />
      <div className="max-w-2xl flex flex-col justify-start items-start m-auto">
        <h1>Hi!</h1>
        <div className="my-8">
        <p className="text-lg md:text-2xl">
          Welcome to the personal blog of{" "}
          <Link href="/about">Viktor Nyblom</Link>.
          <br />
          Stockholm based entrepreneur, investor and startup advisor.
        </p>
        <p className="text-lg md:text-2xl">
          I do many different things during the course of a year. But if you
          want to know what I&apos;m doing right now, checkout my{" "}
          <Link href="/now/">Now Page</Link>.
        </p>
        <p className="text-lg md:text-2xl">
          This website is hosted on Vercel and the source code is available on <a href="https://github.com/Qw4z1/nyblom-io">GitHub</a>. PRs are welcome!
        </p>
        </div>
        <SocialRow />
      </div>
    </>
  );
};

export default Home;
