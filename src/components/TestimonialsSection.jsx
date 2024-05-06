import { testimonials } from "../constants"

const TestimonialsSection = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            What People are saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonials, index) => (
                <div key={index} className="w-full sm:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{testimonials.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={testimonials.image} alt="{testimonials.user}" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TestimonialsSection