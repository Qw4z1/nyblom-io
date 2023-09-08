"use client";

import { FC } from "react";

export interface CalLinkProps {
  dataCalLink: string;
  children?: React.ReactNode;
}

const CalLink: FC<CalLinkProps> = ({ dataCalLink, children }) => {
  return (
    <div
      className="underline decoration-yellow decoration-2 underline-offset-2 hover:no-underline hover:bg-yellow hover:cursor-pointer my-0 py-0 h-auto"
      data-cal-link={dataCalLink}
    >
      {children}
    </div>
  );
};

export default CalLink;
