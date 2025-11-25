import React, { FC } from "react";
import SocialRow from "./SocialRow";
import { RssIcon } from "./icons/RssSvg";
import InlineNewsletterForm from "./InlineNewsletterForm";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row w-full flex-auto justify-between container border-t p-12">
        <div className="flex flex-col">
          <p className="italic text-md">© 2024 Viktor Nyblom</p>
        </div>
        <div className="flex flex-row justify-center align-middle">
          <SocialRow />
        </div>
      </div>
    </div>
  );
};

export default Footer;
