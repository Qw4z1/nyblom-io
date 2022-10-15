import type { NextPage } from "next";
import Link from "next/link";
import { Head } from "../components/head";
import SocialRow from "../components/socialRow";

const Home: NextPage = () => {
  return (
    <div>
      <Head title="NyblomIO" description="Personal blog of Viktor Nyblom." />

      <div className="px-8 flex flex-col justify-center space-y-8">
        <h1>Hi!</h1>
        <p className="text-2xl">
          Welcome to the personal blog of{" "}
          <Link href="/about">Viktor Nyblom</Link>.
          <br />
          Stockholm based entrepreneur, investor and startup advisor.
        </p>
        <p className="text-2xl">
          I do many different things during the course of a year. But if you
          want to know what I&apos;m doing right now, checkout my{" "}
          <Link href="/now/">Now Page</Link>.
        </p>
        <SocialRow />
      </div>
    </div>
  );
};

export default Home;
