import Link from "next/link";
import React, { FC } from "react";

export interface CardProps {
  title: string;
  subtitle: string;
  publishedDate: string;
  slug: string;
  isNew?: boolean;
}

const Card: FC<CardProps> = ({
  title,
  subtitle,
  publishedDate,
  slug,
  isNew
}) => {
  return (
    <Link className="no-underline" href={`/blog/${slug}`}>
      <div className="w-full p-2 mb-4 cursor-pointer border-transparent border-4 border-spacing-4 hover:border-yellow">
        {isNew && <div className="font-medium text-lg mt-1">New on the blog!</div>}
        <div className="font-bold text-xl mt-1 mb-1">{title}</div>
        <p className=" text-base mt-1 mb-1">{subtitle}</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-black text-opacity-60 text-md italic mt-1 mb-1">
            First Published: {publishedDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
