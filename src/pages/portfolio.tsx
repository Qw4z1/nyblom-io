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
            <a href="https://ljusgarda.se/" className="font-bold">
              Ljusgårda
            </a>{" "}
            - Modern farming.
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
            <a href="https://lectrium.com" className="font-bold">
              Lectrium
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
          <li>
            <a href="https://quartr.com/" className="font-bold">
              Quartr
            </a>{" "}
            - Investor relations, but convenient.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
