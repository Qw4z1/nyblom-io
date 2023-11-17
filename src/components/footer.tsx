import Link from "next/link";
import React, { FC } from "react";
import Eye from "./icons/Eye";
import SocialRow from "./SocialRow";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row w-full flex-auto justify-between container border-t p-4">
        <div className="flex flex-col">
          <p className="italic text-md">
            © 2023 Viktor Nyblom
          </p>
        </div>
        <div className="flex flex-col">
          <SocialRow />
        </div>
      </div>
    </div>
  );
};

export default Footer;
