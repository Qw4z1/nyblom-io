import Link from "next/link";
import React, { FC } from "react";
import { useReads } from "../hooks/useReads";

export interface CardProps {
  title: string;
  subtitle: string;
  publishedDate: string;
  slug: string;
  reads: number;
}

const Card: FC<CardProps> = ({
  title,
  subtitle,
  publishedDate,
  slug,
  reads,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full mb-4 cursor-pointer">
        <div className="font-bold text-xl m-1">{title}</div>
        <p className=" text-base m-1">{subtitle}</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-black text-opacity-60 text-md italic m-1">
            First Published: {publishedDate}
          </p>
          {reads ? (
            <div className="text-md text-black text-opacity-60">
              Read {reads} times
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default Card;
