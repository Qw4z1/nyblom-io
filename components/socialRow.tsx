import React from "react";

import Twitter from "./icons/TwitterSvg";
import LinkedIn from "./icons/LinkedInSvg";
import Instagram from "./icons/InstagramSvg";
import Github from "./icons/GithubSvg";

const SocialRow = () => {
  return (
    <ul className="m-0 flex flex-row justify-between flex-wrap w-screen max-w-xs">
      <li className="w-14 h-14 hover:bg-default-yellow rounded-full">
        <a
          target="_blank"
          href="https://twitter.com/Qw4z1"
          rel="noopener noreferrer"
          aria-label="My Twitter profile"
        >
          <Twitter />
        </a>
      </li>
      <li className="w-14 h-14 hover:bg-default-yellow rounded-full">
        <a
          target="_blank"
          href="https://www.instagram.com/qw4z1/"
          rel="noopener noreferrer"
          aria-label="My Instagram page"
        >
          <Instagram />
        </a>
      </li>
      <li className="w-14 h-14 hover:bg-default-yellow rounded-full">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/viktornyblom/"
          rel="noopener noreferrer"
          aria-label="My LinkedIn profile"
        >
          <LinkedIn />
        </a>
      </li>
      <li className="w-14 h-14 hover:bg-default-yellow rounded-full">
        <a
          target="_blank"
          href="https://github.com/Qw4z1"
          rel="noopener noreferrer"
          aria-label="My Github page"
        >
          <Github />
        </a>
      </li>
    </ul>
  );
};

export default SocialRow;
