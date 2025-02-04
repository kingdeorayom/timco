import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section className="max-w-screen-xl px-5 py-12 mx-auto space-y-16">
      <h1 className="text-5xl font-bold">
        Excellence in Engineering & Innovation
      </h1>
      <p>
        At TIMCO, we take pride in delivering high-quality engineering solutions
        that exceed client expectations. With decades of expertise in the metal
        industry, our projects span across various sectors, showcasing our
        commitment to precision, durability, and innovation. From industrial
        manufacturing to custom-engineered solutions, each project reflects our
        dedication to reliability, cost-efficiency, and superior craftsmanship.
        Explore our portfolio and see how TIMCO continues to shape industries
        with cutting-edge solutions and exceptional service.
      </p>

      <div className="bg-[#1D3546] h-6 md:h-9" />
      <h2 className="text-3xl font-bold">Our Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 30 }).map((_, index) => (
          <Image
            key={index}
            src={`/projects/p${index + 1}.png`}
            width={1500}
            height={1500}
            alt={index}
            className="border-4 border-white shadow-xl"
          />
        ))}
      </div>
    </section>
  );
}
