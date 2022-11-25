import Link from "next/link";
import { FC } from "react";

export interface NavBarLinkProps {
  link: string;
  text: string;
  onClick: () => void;
}

const NavBarLink: FC<NavBarLinkProps> = ({ link, text, onClick }) => {
  return (
    <Link
      className={`no-underline block font-bold`}
      href={link}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavBarLink;
