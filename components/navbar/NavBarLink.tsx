import Link from "next/link";
import { FC } from "react";

export interface NavBarLinkProps {
  link: string;
  text: string;
  onClick: () => void;
}

const NavBarLink: FC<NavBarLinkProps> = ({ link, text, onClick }) => {
  return (
    <Link href={link}>
      <a className={`no-underline block font-bold`} onClick={onClick}>
        {text}
      </a>
    </Link>
  );
};

export default NavBarLink;
