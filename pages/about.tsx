import type { NextPage } from "next";
import Link from "next/link";
import { Head } from "../components/head";

const About: NextPage = () => {
  return (
    <>
      <Head
        title={"About Viktor"}
        description={"Entrepreneur. Investor. Tech Advisor."}
      />
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">
        <h1>About Viktor</h1>
        <p>
          I like building things. Most of the time I live in startup land and
          it's one hell of a ride. During the past decade I've had the good
          fortune to work with brands such as{" "}
          <a href="https://www.bookbeat.se/">BookBeat</a>,{" "}
          <a href="https://doktor.se/">Doktor.se</a>,{" "}
          <a href="https://carthing.spotify.com/">Spotify Carthing</a> and{" "}
          <a href="https://www.majority.com/en/">MAJORITY</a>.
        </p>
        <p>
          I enjoy working in fast pace environment, and believe that a small
          team working tightly together can achieve great things. This is
          something I've seen over and over again.
        </p>
        <p>
          I believe in sharing what I know with anyone who is interested. For a
          long time I thought I would become a teacher. While that didn't
          formally happen, I regularly enjoy mentoring junior developers and
          supporting founders in companies I've invested in as much as I can.
        </p>
        <p>
          When I'm not knee deep in code I think about what makes a company
          successful. One outlet for this interest is my angel investments,
          where I not only provide capital to startups but also advice on how to
          build a successful tech startup.
        </p>
        <p>
          Check my <Link href="/portfolio/">Portfolio Page</Link> to see the
          companies I've invested in this far. I've recently rekindled my
          interest in writing. I don't publish my writing anywhere else, so
          check in on <Link href="/blog/">my blog page</Link> every so often to
          follow my writing.
        </p>
        <div>/Viktor</div>
      </div>
    </>
  );
};

export default About;
