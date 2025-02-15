export default function ProjectsPage() {
  return (
    <div className="max-w-screen-2xl px-5 py-12 mx-auto space-y-16">
      <section className="max-w-screen-xl mx-auto space-y-12 text-center">
        <div className="space-y-4">
          <h3 className="text-timco-red font-bold text-lg">Project Gallery</h3>
          <h1 className="text-4xl md:text-7xl font-bold text-timco-dark-blue">
            Excellence in Engineering and Innovation
          </h1>
        </div>
        <p className="text-xl text-balance">
          At TIMCO, we take pride in delivering high-quality engineering
          solutions that exceed client expectations. With decades of expertise
          in the metal industry, our projects span across various sectors,
          showcasing our commitment to precision, durability, and innovation.
          From industrial manufacturing to custom-engineered solutions, each
          project reflects our dedication to reliability, cost-efficiency, and
          superior craftsmanship. Explore our portfolio and see how TIMCO
          continues to shape industries with cutting-edge solutions and
          exceptional service.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
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

        {/* <div className="py-8">
          <img
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-fit rounded-2xl"
          />
        </div> */}
      </section>
    </div>
  );
}
