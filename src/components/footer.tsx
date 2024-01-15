import React, { FC } from "react";
import SocialRow from "./SocialRow";
import { RssIcon } from "./icons/RssSvg";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row w-full flex-auto justify-between container border-t p-4">
        <div className="flex flex-col">
          <p className="italic text-md">© 2023 Viktor Nyblom</p>
        </div>
        <div className="flex flex-row justify-center align-middle">
          <SocialRow />
            <a
              className="w-14 h-10 p-0 m-0 hover:bg-yellow rounded-full hover:p-0 hover:-m-0"
              target="_blank"
              href="https://www.nyblom.io/rss.xml"
              rel="noopener noreferrer"
              aria-label="RSS Feed"
            >
              <RssIcon />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
