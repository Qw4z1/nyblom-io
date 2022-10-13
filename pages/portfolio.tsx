import type { NextPage } from "next";
import { Head } from "../components/head";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title={"Portfolio"} description={"List of startup investments"} />
      <div>
        <h1>Portfolio</h1>
        <p className="text-xl">
          Each of the companies below has chosen to take my money. <br /> For
          that I am forever grateful.
        </p>
        <ul className="space-y-2">
          <li>
            &#8226;{" "}
            <a href="https://doktor.se/" className="font-bold">
              Doktor.se
            </a>{" "}
            - Talk to a doktor from anywhere.{" "}
          </li>
          <li>
            &#8226;{" "}
            <a href="https://rgnt-motorcycles.com/" className="font-bold">
              RGNT Motorcycles
            </a>{" "}
            - Electric motorcycles.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://ljusgarda.se/" className="font-bold">
              Ljusgårda
            </a>{" "}
            - Modern farming.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://www.bzzt.se/" className="font-bold">
              Bzzt
            </a>{" "}
            - Electric pod taxi.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://www.miltrain.se/" className="font-bold">
              Miltrain
            </a>{" "}
            - Get better results on your training journey.
          </li>
          <li>
            &#8226;{" "}
            <a href="http://molistreaming.com/" className="font-bold">
              Moli Streaming
            </a>{" "}
            - Next generation social network.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://detecht.se/" className="font-bold">
              Detecht
            </a>{" "}
            - The lifesaving motorcycle app.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://babyjourney.se/" className="font-bold">
              Baby Journey
            </a>{" "}
            - The modern app for pregnant and parents of young children.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://www.doneservices.se/" className="font-bold">
              Done
            </a>{" "}
            - The easy way to find a handyman.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://shinner.app/" className="font-bold">
              Shinner
            </a>{" "}
            - Explore thousands of skateboard spots worldwide.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://microshifts.app/" className="font-bold">
              Microshifts
            </a>{" "}
            - Helps you do more of what matters most.
          </li>
          <li>
            &#8226;{" "}
            <a href="https://www.lectrium.io/" className="font-bold">
              Lechtrium
            </a>{" "}
            - Smooth home charging installation for EV-owners.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
