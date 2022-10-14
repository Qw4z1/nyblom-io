import Link from "next/link";
import React, { FC } from "react";

export interface CardProps {
  title: string;
  subtitle: string;
  publishedDate: string;
  slug: string;
}

const Card: FC<CardProps> = ({ title, subtitle, publishedDate, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full">
        <div className="font-bold text-xl m-1">{title}</div>
        <p className=" text-base m-1">{subtitle}</p>
        <p className="text-black text-opacity-60 text-md italic m-1">First Published: {publishedDate}</p>
      </div>
    </Link>
  );
};

export default Card;
