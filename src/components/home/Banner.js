import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="py-16">
      <div className="mx-auto bg-timco-dark-blue grid lg:grid-cols-2">
        <div>
          <Image
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-fit"
          />
        </div>
        <div className="space-y-8 px-10 py-20 text-white">
          <h2 className="text-4xl xl:text-6xl font-bold">
            Interested in learning more about products and solutions from TIMCO?
          </h2>
          <p className="text-xl">
            We offer a wide range of industrial machinery and metal fabrication
            solutions tailored to meet your specific needs. From standard
            equipment to custom designs, we have the expertise and capabilities
            to deliver exceptional results.
          </p>
          <p className="text-xl">
            Contact us today to explore our comprehensive product offerings and
            discover how we can contribute to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
