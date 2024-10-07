import React from "react";

import Twitter from "./icons/TwitterSvg";
import LinkedIn from "./icons/LinkedInSvg";
import Github from "./icons/GithubSvg";

const SocialRow = () => {
  return (
    <ul className="m-0 flex flex-row justify-center flex-wrap w-full space-x-4">
      <li className="w-10 h-10 hover:bg-yellow rounded-full">
        <a
          target="_blank"
          href="https://twitter.com/viktor_nyblom"
          rel="noopener noreferrer"
          aria-label="My Twitter profile"
        >
          <Twitter />
        </a>
      </li>
      <li className="w-10 h-10 hover:bg-yellow rounded-full">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/viktornyblom/"
          rel="noopener noreferrer"
          aria-label="My LinkedIn profile"
        >
          <LinkedIn />
        </a>
      </li>
      <li className="w-10 h-10 hover:bg-yellow rounded-full">
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
