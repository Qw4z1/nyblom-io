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
      <div className="w-full max-w-sm rounded overflow-hidden shadow-lg">
        <div className="font-bold text-xl m-2">{title}</div>
        <p className="text-gray-700 text-base m-2">{subtitle}</p>
        <div className="font-bold text-xl m-2">First Published: {publishedDate}</div>
      </div>
    </Link>
  );
};

export default Card;
