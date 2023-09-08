import type { FC } from "react";
import { Testimonial } from "./util";

export type TestimonialProps = {
  testimonial: Testimonial;
};

const Testimonial: FC<TestimonialProps> = ({
  testimonial: { name, title, quote, short },
}) => {
  return (
    <div className="h-auto max-w-full bg-gray-50 rounded-lg">
      <div className="space-y-4 px-2">
        <blockquote>
          <p className="">“{short}”</p>
        </blockquote>
        <figcaption className="px-4">
          <div className="text-yellow">{name}</div>
          <div className="text-slate-700">{title}</div>
        </figcaption>
      </div>
    </div>
  );
};

export default Testimonial;
