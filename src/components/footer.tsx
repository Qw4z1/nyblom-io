import React, { FC } from "react";
import { LINKEDIN_URL } from "../helpers/constants";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row w-full flex-auto justify-between container border-t p-12">
        <div className="flex flex-col">
          <p className="italic text-md">© 2026 Viktor Nyblom</p>
        </div>
        <div className="flex flex-col">
          <p className="text-md">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
