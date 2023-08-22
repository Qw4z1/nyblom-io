import { FC } from "react";

export interface CalLinkProps {
  dataCalLink: string;
  children?: React.ReactNode;
}

const CalLink: FC<CalLinkProps> = ({ dataCalLink, children }) => {
  return (
    <p
      className="underline decoration-yellow decoration-2 underline-offset-2 hover:no-underline hover:bg-yellow hover:cursor-pointer"
      data-cal-link={dataCalLink}
    >
      {children}
    </p>
  );
};

export default CalLink;
