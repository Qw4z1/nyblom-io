import type { NextPage } from "next";
import { Head } from "../components/head";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head
        title={"Portfolio"}
        description={"List of startup investments"}
      />
      <div className="py-4 max-w-2xl flex flex-col justify-start items-start m-auto">
        <h1>Portfolio</h1>
        <p>
          Each of the companies below has chosen to take my money. For that I am
          forever grateful. It is truly an honor to be a part of their journey.
        </p>
        <ul>
          <li>
            &#8226; <a href="https://doktor.se/">Doktor.se</a> - Talk to a
            doktor from anywhere.{" "}
          </li>
          <li>
            &#8226; <a href="https://rgnt-motorcycles.com/">RGNT Motorcycles</a>{" "}
            - Electric motorcycles.
          </li>
          <li>
            &#8226; <a href="https://ljusgarda.se/">Ljusgårda</a> - Modern
            farming.
          </li>
          <li>
            &#8226; <a href="https://www.bzzt.se/">Bzzt</a> - Electric pod taxi.
          </li>
          <li>
            &#8226; <a href="https://www.miltrain.se/">Miltrain</a> - Get better
            results on your training journey.
          </li>
          <li>
            &#8226; <a href="http://molistreaming.com/">Moli Streaming</a> -
            Next generation social network.
          </li>
          <li>
            &#8226; <a href="https://detecht.se/">Detecht</a> - The lifesaving
            motorcycle app.
          </li>
          <li>
            &#8226; <a href="https://babyjourney.se/">Baby Journey</a> - The
            modern app for pregnant and parents of young children.
          </li>
          <li>
            &#8226; <a href="https://www.doneservices.se/">Done</a> - The easy
            way to find a handyman.
          </li>
          <li>
            &#8226; <a href="https://shinner.app/">Shinner</a> - Explore
            thousands of skateboard spots worldwide.
          </li>
          <li>
            &#8226; <a href="https://microshifts.app/">Microshifts</a> - Helps
            you do more of what matters most.
          </li>
          <li>
            &#8226; <a href="https://www.lectrium.io/">Lechtrium</a> - Smooth
            home charging installation for EV-owners.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
