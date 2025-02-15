import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 pb-4 sm:pt-16 sm:pb-8">
      <div className="grid xl:grid-cols-2 gap-10">
        {/* Left Side (Text Content) */}
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
              <Link
                href="/services"
                className="bg-timco-dark-blue text-timco-white font-bold py-4 px-6 rounded-md hover:opacity-85 transition-all duration-300 ease-in-out text-center"
              >
                See our services
              </Link>
              <Link
                href="/about"
                className="border-2 border-timco-slate font-bold text-timco-slate hover:bg-gray-100 py-4 px-6 rounded-md transition-all duration-300 ease-in-out text-center"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div>
          <Image
            src="/mission.jpg"
            alt="Industrial Machinery"
            width={1920}
            height={1080}
            className="object-cover w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
