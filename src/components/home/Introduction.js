import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
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
                industrial solutions. We specialize in the design, engineering,
                fabrication, and implementation of cutting-edge machinery,
                control systems, and metal structures.
              </p>
              {/* <p className="text-timco-content">
                With a commitment to innovation and quality, we serve a diverse
                range of industries, empowering our clients to optimize their
                operations, enhance productivity, and achieve their business
                objectives.
              </p> */}
              <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
                <Link
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
                </Link>
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
                Our state-of-the-art metal and steel fabrication facilities are
                equipped to handle projects of any scale and complexity. From
                precision cutting and welding to complex assembly and finishing,
                we employ advanced techniques and adhere to stringent quality
                standards to deliver superior results.
              </p>
              {/* <p className="text-timco-content">
                Our experienced craftsmen work with a variety of materials,
                including steel, stainless steel, and aluminum, ensuring that
                your custom fabrication needs are met with precision and
                efficiency.
              </p> */}
              <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
                <Link
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
                </Link>
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
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
