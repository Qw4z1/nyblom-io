import Testimonial from "./Testimonial";
import { testimonials } from "./util";

const Testimonials = () => {
  return (
    <div className="grid gap-4 mt-4">
      <h2>Don&apos;t take my word for it</h2>
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
