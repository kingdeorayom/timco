export default function HomePage() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 pb-4 sm:pt-16 sm:pb-8">
        <div className="grid xl:grid-cols-2 gap-10">
          <div className="space-y-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-timco-dark-blue">
              <span className="text-timco-red">TOPSURE</span> INDUSTRIAL
              MACHINERIES AND CONTROLS CORPORATION
              {/* TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION */}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Your single source for industrial machinery, controls, metal
              fabrication, and engineering services. We provide expert
              engineering, precision metal fabrication, and state-of-the-art
              machinery and control systems, all under one roof.
            </p>
            <div>
              <div className="space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-4">
                <a
                  href="/services"
                  className="bg-timco-dark-blue text-timco-white font-bold py-4 px-6 rounded-md hover:opacity-85 transition-all duration-300 ease-in-out text-center"
                >
                  See our services
                </a>
                <a
                  href="/about"
                  className="border-2 border-timco-slate font-bold text-timco-slate hover:bg-gray-100 py-4 px-6 rounded-md transition-all duration-300 ease-in-out text-center"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/mission.jpg"
              alt="Industrial Machinery"
              width={1920}
              height={1080}
              className="object-cover w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-timco-white px-5 pt-16 pb-4">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="space-y-4">
            <h3 className="text-center text-timco-red font-bold text-lg">
              For Commercial & Residential Services
            </h3>
            <h2 className="text-4xl font-bold text-center">
              High Quality Metal and Steel Fabrication Solutions
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-16">
            <div>
              <div>
                <img
                  src="/mission.jpg"
                  alt="Test"
                  width={1920}
                  height={1080}
                  className="object-fit rounded-2xl"
                />
              </div>
              <div className="py-5 space-y-4">
                <h2 className="text-3xl font-bold">Corporation</h2>
                <p className="text-timco-content">
                  <strong>TIMCO</strong> is a leading provider of comprehensive
                  industrial solutions. We specialize in the design,
                  engineering, fabrication, and implementation of cutting-edge
                  machinery, control systems, and metal structures.
                </p>
                {/* <p className="text-timco-content">
                With a commitment to innovation and quality, we serve a diverse
                range of industries, empowering our clients to optimize their
                operations, enhance productivity, and achieve their business
                objectives.
              </p> */}
                <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
                  <a
                    href="/clients"
                    className="text-timco-slate transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-dark-blue font-bold"
                  >
                    Learn more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-timco-slate group-hover:fill-timco-dark-blue h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/mission.jpg"
                  alt="Test"
                  width={1920}
                  height={1080}
                  className="object-fit rounded-2xl"
                />
              </div>
              <div className="py-5 space-y-4">
                <h2 className="text-3xl font-bold">
                  Metal and Steel Fabrication
                </h2>
                <p className="text-timco-content">
                  Our state-of-the-art metal and steel fabrication facilities
                  are equipped to handle projects of any scale and complexity.
                  From precision cutting and welding to complex assembly and
                  finishing, we employ advanced techniques and adhere to
                  stringent quality standards to deliver superior results.
                </p>
                {/* <p className="text-timco-content">
                Our experienced craftsmen work with a variety of materials,
                including steel, stainless steel, and aluminum, ensuring that
                your custom fabrication needs are met with precision and
                efficiency.
              </p> */}
                <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
                  <a
                    href="/clients"
                    className="text-timco-slate transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-dark-blue font-bold"
                  >
                    Learn more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-timco-slate group-hover:fill-timco-dark-blue h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/mission.jpg"
                  alt="Test"
                  width={1920}
                  height={1080}
                  className="object-fit rounded-2xl"
                />
              </div>
              <div className="py-5 space-y-4">
                <h2 className="text-3xl font-bold">Engineering Services</h2>
                <p className="text-timco-content">
                  <strong>TIMCO</strong>'s team of highly skilled engineers
                  provides a full spectrum of engineering services, including
                  design, analysis, consulting, and project management. We
                  leverage our expertise and industry best practices to develop
                  innovative solutions that address your unique challenges.
                </p>
                {/* <p className="text-timco-content">
                Whether you require process optimization, automation design, or
                structural analysis, our engineers are dedicated to delivering
                reliable, cost-effective, and sustainable results.
              </p> */}
                <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
                  <a
                    href="/clients"
                    className="text-timco-slate transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-dark-blue font-bold"
                  >
                    Learn more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-timco-slate group-hover:fill-timco-dark-blue h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-8 pb-8">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="space-y-4">
            <h3 className="text-center text-timco-red font-bold text-lg">
              What TIMCO offers
            </h3>
            <h2 className="text-4xl font-bold text-center">
              Machines and Equipment
            </h2>
          </div>

          {/* <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
          <li className="flex justify-center border-b-4 text-timco-dark-blue border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out font-bold">
            Lathe Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Shearing Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Drill Press
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Radial Drill
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Milling Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Hyrdraulic Bending Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue py-4 cursor-pointer transition-all duration-200 ease-in-out">
            TIG Welding Machine
          </li>
        </ul> */}

          {/* <ul className="flex space-x-4 text-center border-b border-gray-200 text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <li className="flex-shrink-0 px-4 py-4 border-b-4 text-timco-dark-blue border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out font-bold">
            Lathe Machine
          </li>
          <li className="flex-shrink-0 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
            Shearing Machine
          </li>
          <li className="flex-shrink-0 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
            Drill Press
          </li>
          <li className="flex-shrink-0 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
            Radial Drill
          </li>
          <li className="flex-shrink-0 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
            Milling Machine
          </li>
          <li className="flex-shrink-0 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
            Hydraulic Bending Machine
          </li>
          <li className="flex-shrink-0 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
            TIG Welding Machine
          </li>
        </ul> */}

          <ul className="flex text-center border-b border-gray-200 text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <li className="flex-1 px-4 py-4 border-b-4 text-timco-dark-blue border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out font-bold">
              Lathe Machine
            </li>
            <li className="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
              Shearing Machine
            </li>
            <li className="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
              Drill Press
            </li>
            <li className="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
              Radial Drill
            </li>
            <li className="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
              Milling Machine
            </li>
            <li className="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
              Hydraulic Bending Machine
            </li>
            <li className="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
              TIG Welding Machine
            </li>
          </ul>

          {/* Show on click */}
          <div className="max-w-screen-2xl px-5 pt-8 pb-8 mx-auto space-y-16">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
              <div>
                <img
                  src="/mission.jpg"
                  alt="Test"
                  width={1920}
                  height={1080}
                  className="object-cover h-96 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Lathe Machine</h2>
                <p className="text-gray-600">
                  TIMCO's precision lathe machines are engineered for
                  versatility and accuracy, handling a wide range of turning
                  operations with ease. From shaping intricate components to
                  performing heavy-duty cutting, our lathes deliver exceptional
                  performance and reliability. Built with robust construction
                  and advanced control systems, they ensure consistent results
                  and minimize downtime, making them a valuable asset in any
                  manufacturing environment.
                </p>
                {/* <div className="py-2">
                <a
                  href="/clients"
                  className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
                >
                  See our clients
                </a>
              </div> */}
                {/* <div className="py-2">
                <a
                  href="/clients"
                  className="hover:bg-timco-red bg-timco-white border-2 hover:border-timco-red border-timco-red hover:text-timco-white text-timco-red font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
                >
                  See our clients
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <a
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
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-5 pt-16 pb-16 mx-auto space-y-16">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-16">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/bsbs.png"
                  width={1500}
                  height={1500}
                  alt="Big Smile Bread Station"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/ccp.png"
                  width={1500}
                  height={1500}
                  alt="CCP"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/doxo.png"
                  width={1500}
                  height={1500}
                  alt="Doxo"
                  className="h-24 w-24"
                />
              </div>

              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/ekpi.png"
                  width={1500}
                  height={1500}
                  alt="EKPI"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/gardenia.png"
                  width={1500}
                  height={1500}
                  alt="Gardenia"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/hstc.png"
                  width={1500}
                  height={1500}
                  alt="Herma Shipping and Transport Corporation"
                  className="h-24 w-24"
                />
              </div>

              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/leslies.png"
                  width={1500}
                  height={1500}
                  alt="Leslie's"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/mpi.png"
                  width={1500}
                  height={1500}
                  alt="Mix Plant, Inc."
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/nutrimax.png"
                  width={1500}
                  height={1500}
                  alt="Nutrimax"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/pfbp.png"
                  width={1500}
                  height={1500}
                  alt="Philfoods Fresh-Baked Products, Inc."
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/pps.png"
                  width={1500}
                  height={1500}
                  alt="PPS"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/smdc.png"
                  width={1500}
                  height={1500}
                  alt="Snow Mountain Dairy Corporation"
                  className="h-24 w-24"
                />
              </div>
            </div>
            <p className="text-timco-content">
              At <strong>TIMCO</strong>, we are honored to work with a diverse
              range of clients who trust us for our expertise, reliability, and
              commitment to excellence. From small businesses to large-scale
              enterprises, our partnerships are built on a foundation of quality
              craftsmanship and outstanding service.
            </p>
            <p className="text-timco-content">
              Our clients come from various industries, including manufacturing,
              construction, and engineering, all benefiting from our
              cost-effective and innovative solutions. Explore our valued
              partners and see why companies continue to choose TIMCO as their
              trusted provider.
            </p>

            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center">
              <a
                href="/clients"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                See our clients{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-timco-red group-hover:fill-timco-slate h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto bg-timco-dark-blue grid lg:grid-cols-2">
          <div>
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit"
            />
          </div>
          <div className="space-y-8 px-10 py-20 text-timco-white">
            <h2 className="text-4xl xl:text-6xl font-bold">
              Interested in learning more about products and solutions from
              TIMCO?
            </h2>
            <p className="text-xl">
              We offer a wide range of industrial machinery and metal
              fabrication solutions tailored to meet your specific needs. From
              standard equipment to custom designs, we have the expertise and
              capabilities to deliver exceptional results.
            </p>
            <p className="text-xl">
              Contact us today to explore our comprehensive product offerings
              and discover how we can contribute to your success.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto xl:pt-16 pb-8 px-5 space-y-16">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
          <div className="flex items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Our Mission</h2>
              <p className="text-timco-content">
                TIMCO will exceed the customer’s expectations by providing
                reliable and cost-effective solutions through strong business
                associations, quality product solutions, dedicated employees,
                extraordinary service, and safe practices.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit rounded-2xl"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
          <div>
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit rounded-2xl"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Our Vision</h2>
              <p className="text-timco-content">
                To be the preferred supplier of metal and steel fabrication
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto bg-timco-dark-blue grid lg:grid-cols-2">
          <div>
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit"
            />
          </div>
          <div className="space-y-8 px-10 py-20 text-timco-white">
            <h2 className="text-4xl xl:text-6xl font-bold">
              Interested in learning more about products and solutions from
              TIMCO?
            </h2>
            <p className="text-xl">
              We offer a wide range of industrial machinery and metal
              fabrication solutions tailored to meet your specific needs. From
              standard equipment to custom designs, we have the expertise and
              capabilities to deliver exceptional results.
            </p>
            <p className="text-xl">
              Contact us today to explore our comprehensive product offerings
              and discover how we can contribute to your success.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto space-y-16 py-10 p-8 md:p-20 rounded-2xl">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
          <div>
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">
              Interested in learning more about products and solutions from
              TIMCO?
            </h2>
            <p className="text-timco-content">
              We offer a wide range of industrial machinery and metal
              fabrication solutions tailored to meet your specific needs. From
              standard equipment to custom designs, we have the expertise and
              capabilities to deliver exceptional results.
            </p>
            <p className="text-timco-content">
              Contact us today to explore our comprehensive product offerings
              and discover how we can contribute to your success.
            </p>
            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <a
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
