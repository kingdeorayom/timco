import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ender = () => {
  return (
    <section className="max-w-screen-2xl mx-auto space-y-16 py-10 p-8 md:p-20 rounded-2xl">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <Image
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-fit rounded-2xl"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">
            Interested in learning more about products and solutions from TIMCO?
          </h2>
          <p className="text-timco-content">
            We offer a wide range of industrial machinery and metal fabrication
            solutions tailored to meet your specific needs. From standard
            equipment to custom designs, we have the expertise and capabilities
            to deliver exceptional results.
          </p>
          <p className="text-timco-content">
            Contact us today to explore our comprehensive product offerings and
            discover how we can contribute to your success.
          </p>
          <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <Link
              href="/services"
              className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
            >
              Check our services{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-timco-red group-hover:fill-timco-slate h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ender;
