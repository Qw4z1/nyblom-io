import type { NextPage } from "next";
import { Head } from "../components/Head";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title={"Portfolio"} description={"Viktor's list of startup investments"} />
      <div>
        <h1>Portfolio</h1>
        <p className="text-l">
          Each of the companies below has chosen to take my money. For that I am
          forever grateful. My initial checksize range sits around 300k sek
          (~$30k), where the largest has been 500k and the smallest 17k.
        </p>
        <p className="text-l">I&apos;ve been active since April 2019.</p>
        <h2>Active</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="https://doktor.se/" className="font-bold">
              Doktor.se
            </a>{" "}
            - Talk to a doktor from anywhere.{" "}
          </li>
          <li>
            <a href="https://rgnt-motorcycles.com/" className="font-bold">
              RGNT Motorcycles
            </a>{" "}
            - Electric motorcycles.
          </li>
          <li>
            <a href="https://ljusgarda.se/" className="font-bold">
              Ljusgårda
            </a>{" "}
            - Modern farming.
          </li>
          <li>
            <a href="https://www.bzzt.se/" className="font-bold">
              Bzzt
            </a>{" "}
            - Electric pod taxi.
          </li>
          <li>
            <a href="https://www.miltrain.se/" className="font-bold">
              Miltrain
            </a>{" "}
            - Get better results on your training journey.
          </li>

          <li>
            <a href="https://detecht.se/" className="font-bold">
              Detecht
            </a>{" "}
            - The lifesaving motorcycle app.
          </li>
          <li>
            <a href="https://babyjourney.se/" className="font-bold">
              Baby Journey
            </a>{" "}
            - The modern app for pregnant and parents of young children.
          </li>
          <li>
            <a href="https://www.doneservices.se/" className="font-bold">
              Done
            </a>{" "}
            - The easy way to find a handyman.
          </li>
          <li>
            <a href="https://shinner.app/" className="font-bold">
              Shinner
            </a>{" "}
            - Explore thousands of skateboard spots worldwide.
          </li>
          <li>
            <a href="https://microshifts.app/" className="font-bold">
              Microshifts
            </a>{" "}
            - Helps you do more of what matters most.
          </li>
          <li>
            <a href="https://www.lectrium.io/" className="font-bold">
              Lechtrium
            </a>{" "}
            - Smooth home charging installation for EV-owners.
          </li>
          <li>
            <a href="https://offsiter.com/" className="font-bold">
              Offsiter
            </a>{" "}
            - Find and book team building activities, company retreats, &
            corporate wellness experiences.
          </li>
        </ul>
        <h2>Past</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="http://molistreaming.com/" className="font-bold">
              Moli Streaming
            </a>{" "}
            - Next generation social network.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
