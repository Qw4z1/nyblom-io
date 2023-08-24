import React from "react";

import Twitter from "./icons/TwitterSvg";
import LinkedIn from "./icons/LinkedInSvg";
import Instagram from "./icons/InstagramSvg";
import Github from "./icons/GithubSvg";
import Mastodon from "./icons/MastodonSvg";
import Cal from "./icons/CalSvg";

const SocialRow = () => {
  return (
    <ul className="m-0 flex flex-row justify-around md:justify-start flex-wrap w-full space-x-4">
      <li className="w-14 h-14 hover:bg-yellow rounded-full">
        <a
          href="https://mastodon.nu/@qw4z1"
          aria-label="My Mastodon profile"
          rel="me"
        >
          <Mastodon />
        </a>
      </li>{" "}
      <li className="w-14 h-14 hover:bg-yellow rounded-full">
        <a
          target="_blank"
          href="https://twitter.com/Qw4z1"
          rel="noopener noreferrer"
          aria-label="My Twitter profile"
        >
          <Twitter />
        </a>
      </li>
      <li className="w-14 h-14 hover:bg-yellow rounded-full">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/viktornyblom/"
          rel="noopener noreferrer"
          aria-label="My LinkedIn profile"
        >
          <LinkedIn />
        </a>
      </li>
      <li className="w-14 h-14 hover:bg-yellow rounded-full">
        <a
          target="_blank"
          href="https://github.com/Qw4z1"
          rel="noopener noreferrer"
          aria-label="My Github page"
        >
          <Github />
        </a>
      </li>
      <li className="w-14 h-14 hover:bg-yellow rounded-full">
        <a
          target="_blank"
          href="https://cal.com/nyblomio"
          rel="noopener noreferrer"
          aria-label="My Cal.com booking page"
        >
          <Cal />
        </a>
      </li>
    </ul>
  );
};

export default SocialRow;
