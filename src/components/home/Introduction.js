import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className="bg-[#F8F9FA] px-5 py-16">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        <div className="space-y-4">
          <h3 className="text-center text-timco-red font-bold text-lg">
            For Commercial & Residential Services
          </h3>
          <h2 className="text-4xl font-bold text-center">
            High Quality Metal and Steel Fabrication Solutions
          </h2>
        </div>
        <div className="bg-white hover:shadow-lg rounded-2xl grid lg:grid-cols-3 gap-8 lg:gap-0 duration-300 ease-in-out transition-all">
          <div>
            <div>
              <Image
                src="/mission.jpg"
                alt="Test"
                width={1920}
                height={1080}
                className="object-fit rounded-tl-2xl"
              />
            </div>
            <div className="p-10 space-y-4">
              <h2 className="text-2xl font-bold">Corporation</h2>
              <p className="text-gray-600">
                <strong>TIMCO</strong> is a leading provider of comprehensive
                industrial solutions. We specialize in the design, engineering,
                fabrication, and implementation of cutting-edge machinery,
                control systems, and metal structures.
              </p>
              <p className="text-gray-600">
                With a commitment to innovation and quality, we serve a diverse
                range of industries, empowering our clients to optimize their
                operations, enhance productivity, and achieve their business
                objectives.
              </p>
              <div className="py-5">
                <Link
                  href="#"
                  className="hover:bg-timco-red bg-white border hover:border-timco-red border-timco-slate hover:text-white text-timco-slate font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/mission.jpg"
                alt="Test"
                width={1920}
                height={1080}
                className="object-fit"
              />
            </div>
            <div className="p-10 space-y-4 border-r border-l">
              <h2 className="text-2xl font-bold">
                Metal and Steel Fabrication
              </h2>
              <p className="text-gray-600">
                Our state-of-the-art metal and steel fabrication facilities are
                equipped to handle projects of any scale and complexity. From
                precision cutting and welding to complex assembly and finishing,
                we employ advanced techniques and adhere to stringent quality
                standards to deliver superior results.
              </p>
              <p className="text-gray-600">
                Our experienced craftsmen work with a variety of materials,
                including steel, stainless steel, and aluminum, ensuring that
                your custom fabrication needs are met with precision and
                efficiency.
              </p>
              <div className="py-5">
                <Link
                  href="#"
                  className="hover:bg-timco-red bg-white border hover:border-timco-red border-timco-slate hover:text-white text-timco-slate font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/mission.jpg"
                alt="Test"
                width={1920}
                height={1080}
                className="object-fit rounded-tr-2xl"
              />
            </div>
            <div className="p-10 space-y-4">
              <h2 className="text-2xl font-bold">Engineering Services</h2>
              <p className="text-gray-600">
                <strong>TIMCO</strong>'s team of highly skilled engineers
                provides a full spectrum of engineering services, including
                design, analysis, consulting, and project management. We
                leverage our expertise and industry best practices to develop
                innovative solutions that address your unique challenges.
              </p>
              <p className="text-gray-600">
                Whether you require process optimization, automation design, or
                structural analysis, our engineers are dedicated to delivering
                reliable, cost-effective, and sustainable results.
              </p>
              <div className="py-5">
                <Link
                  href="#"
                  className="hover:bg-timco-red bg-white border hover:border-timco-red border-timco-slate hover:text-white text-timco-slate font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
                >
                  Learn more
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
