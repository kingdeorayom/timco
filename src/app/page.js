import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="w-full h-full bg-center bg-cover"
        style={{ backgroundImage: "url('/mission.jpg')" }}
      >
        <div className="bg-slate-900 bg-opacity-75">
          <div className="px-5 md:px-10 pt-16 md:pt-28 lg:pt-36 pb-16 md:pb-28 lg:pb-36 space-y-8 md:space-y-16 max-w-screen-2xl mx-auto ">
            <div className="space-y-6 max-w-3xl text-center md:text-start text-primary-foreground">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORP
                  </h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia aut repellat atque error! Magni, excepturi enim
                    temporibus dolorum expedita, doloremque exercitationem
                    suscipit, provident ut perspiciatis iure ducimus eaque
                    ratione officia.
                  </p>
                </div>
                <div className="space-y-3 md:space-y-0 md:flex md:space-x-4">
                  <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
                    Check our services
                  </button>
                  <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
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
            <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
              Check our services
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-5 mx-auto">
        {/* <hr /> */}
        <div className="flex space-x-4 items-center justify-center">
          <Image
            src="/clients/gardenia.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/leslies.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/nutrimax.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/bsbs.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/ekpi.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/hstc.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
        </div>
      </section>

      <section className="bg-[#F8F9FA] px-5 py-16">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="space-y-4">
            <h3 className="text-center text-[#ff7920] font-bold">
              The Best A Grade Commercial & Residential Services
            </h3>
            <h2 className="text-3xl font-bold text-center">
              High Quality Metal Fabrication Solutions For Commercial &
              Residential Services
            </h2>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="space-y-4">
            <h3 className="text-center text-[#ff7920] font-bold">
              Featured Projects
            </h3>
            <h2 className="text-3xl font-bold text-center">Our Recent Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={`/projects/p${index + 1}.png`}
                  width={1500}
                  height={1500}
                  alt={index}
                  className="border-4 border-white shadow-xl h-72 w-72"
                />
              </div>
            ))}
          </div>
          <div className="group">
            <Link
              href="/projects"
              className="group-hover:text-[#ff7920] transition-all duration-300 ease-in-out flex items-center justify-center text-gray-500"
            >
              See all projects{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="group-hover:fill-[#ff7920] fill-gray-500 h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-5 py-10 mx-auto space-y-16">
        <div className="grid md:grid-cols-2">
          <div className="relative w-full h-[350px] flex items-center justify-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/mission-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
            <div className="relative z-10 text-center px-5 space-y-6">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="max-w-2xl mx-auto text-lg">
                TIMCO will exceed the customer’s expectations by providing
                reliable and cost-effective solutions through strong business
                associations, quality product solutions, dedicated employees,
                extraordinary service, and safe practices.
              </p>
            </div>
          </div>
          <div className="relative w-full h-[350px] flex items-center justify-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/mission.jpg')" }}
            />
          </div>
          <div className="relative w-full h-[350px] flex items-center justify-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/vision.jpg')" }}
            />
          </div>
          <div className="relative w-full h-[350px] flex items-center justify-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/vision-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
            <div className="relative z-10 text-center px-5 space-y-6">
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="max-w-2xl mx-auto text-lg">
                To be the preferred supplier of metal and steel fabrication
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="max-w-screen-2xl px-5 py-10 mx-auto space-y-16">
        <div className="flex space-x-3 items-center">
          <Image
            src={`/clients/gardenia.png`}
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src={`/clients/gardenia.png`}
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src={`/clients/gardenia.png`}
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src={`/clients/gardenia.png`}
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
        </div>
      </section> */}
    </>
  );
}
