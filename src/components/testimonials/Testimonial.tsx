import type { FC } from "react";
import { Testimonial } from "./util";
import Link from "next/link";

export type TestimonialProps = {
  testimonial: Testimonial;
};

const Testimonial: FC<TestimonialProps> = ({
  testimonial: { name, title, quote, short, link },
}) => {
  return (
    <div className="h-auto max-w-full bg-gray-100 rounded-lg">
      <div className="px-2 pt-2 pb-4">
        <blockquote className="m-0">
          <p>“{short}”</p>
        </blockquote>
        <figcaption className="px-4">
          <Link href={link}>{name}</Link>
          <div className="text-slate-700">{title}</div>
        </figcaption>
      </div>
    </div>
  );
};

export default Testimonial;
