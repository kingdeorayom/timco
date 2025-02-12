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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            exercitationem pariatur nulla obcaecati reprehenderit, labore iure
            architecto voluptatibus nemo officia dignissimos commodi molestiae,
            eveniet neque hic voluptate sunt consequuntur! Dolore?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
