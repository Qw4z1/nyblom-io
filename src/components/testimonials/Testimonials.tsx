import { FC } from "react";
import Testimonial from "./Testimonial";
import {
  clarityCallTestimonials,
  iTestimonial,
  naasTestimonials,
} from "./util";

export type TestimonialsProps = {
  tKey: string;
};

const Testimonials: FC<TestimonialsProps> = ({ tKey }) => {
  let t: iTestimonial[];
  if (tKey === "claritycall") {
    t = clarityCallTestimonials;
  } else if (tKey === "naas") {
    t = naasTestimonials;
  } else {
    t = [];
  }
  return (
    <div className="grid gap-4 mt-4">
      <h2>Don&apos;t take my word for it</h2>
      {t.map((testimonial) => (
        <Testimonial key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
