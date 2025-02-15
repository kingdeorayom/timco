import Image from "next/image";
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/50t-multi-point-bar-spreader.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/dust-collector.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/50t-multi-point-bar-spreader.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/50t-multi-point-bar-spreader.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/50t-multi-point-bar-spreader.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/50t-multi-point-bar-spreader.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={`/projects/done/50t-multi-point-bar-spreader.jpg`}
              width={1500}
              height={1500}
              alt="50T Multi-point Bar Spreader"
              className="h-72 w-96 rounded-2xl object-cover"
            />
            <h4 className="font-semibold text-xl">
              50T Multi-point Bar Spreader.jpg
            </h4>
          </div>
        </div> */}
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
