import Testimonial from "./Testimonial";
import { testimonials } from "./util";

const Testimonials = () => {
  return (
    <div className=" grid grid-cols-2 py-4 gap-4">
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
