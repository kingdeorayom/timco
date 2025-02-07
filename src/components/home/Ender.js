import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ender = () => {
  return (
    <>
      <section className="max-w-screen-2xl px-5 pt-16 pb-8 mx-auto space-y-16">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-gray-600">
              At <strong>TIMCO</strong>, we are honored to work with a diverse
              range of clients who trust us for our expertise, reliability, and
              commitment to excellence. From small businesses to large-scale
              enterprises, our partnerships are built on a foundation of quality
              craftsmanship and outstanding service.
            </p>
            <p className="text-gray-600">
              Our clients come from various industries, including manufacturing,
              construction, and engineering, all benefiting from our
              cost-effective and innovative solutions. Explore our valued
              partners and see why companies continue to choose TIMCO as their
              trusted provider.
            </p>
            <div>
              <Link
                href="/clients"
                className="bg-[#ff7920] hover:bg-white border border-[#ff7920] hover:border-[#ff7920] text-white hover:text-[#1d3456] font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                See our clients
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit"
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-5 pt-16 pb-8 mx-auto space-y-16">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
          <div>
            <Image
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-gray-600">
              At <strong>TIMCO</strong>, we are honored to work with a diverse
              range of clients who trust us for our expertise, reliability, and
              commitment to excellence. From small businesses to large-scale
              enterprises, our partnerships are built on a foundation of quality
              craftsmanship and outstanding service.
            </p>
            <p className="text-gray-600">
              Our clients come from various industries, including manufacturing,
              construction, and engineering, all benefiting from our
              cost-effective and innovative solutions. Explore our valued
              partners and see why companies continue to choose TIMCO as their
              trusted provider.
            </p>
            <div>
              <Link
                href="/clients"
                className="bg-[#ff7920] hover:bg-white border border-[#ff7920] hover:border-[#ff7920] text-white hover:text-[#1d3456] font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                See our clients
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ender;
