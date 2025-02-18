import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="px-5 py-16">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        <div className="space-y-4">
          <h3 className="text-center text-timco-red font-bold text-lg">
            Featured Projects
          </h3>
          <h2 className="text-4xl font-bold text-center">Our Works</h2>
        </div>

        <div className="p-5">
          <div className="columns-2 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/50t-multi-point-bar-spreader.jpg"
              alt=""
            />
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/fabrication-15t-ram-rod.jpg"
              alt=""
            />
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/fabrication-inner-outer-cap-conveyor.jpg"
              alt=""
            />

            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/fabrication-roller-conveyor.jpg"
              alt=""
            />
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/fabrication-installation-overhead-water-tank.jpg"
              alt=""
            />
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/molasses-palm-oil-tank.jpg"
              alt=""
            />

            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/dust-collector.jpg"
              alt=""
            />
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/stainless-steel-filter-cage.jpg"
              alt=""
            />
            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/4k-stainless-steel-silo.jpg"
              alt=""
            />

            <img
              className="h-auto max-w-full rounded-lg"
              src="/projects/done/6ka-6kb-stainless-steel-silo.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <Link
            href="/projects"
            className="text-timco-red transition-all duration-300 ease-in-out flex items-center justify-center group-hover:text-timco-slate font-bold"
          >
            See all projects{" "}
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
    </section>
  );
};

export default Projects;
