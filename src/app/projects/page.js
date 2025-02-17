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
          </div>
        </div>
      </section>
    </div>
  );
}
