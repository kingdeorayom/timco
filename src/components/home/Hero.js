import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="w-full h-full bg-center bg-cover"
      style={{ backgroundImage: "url('/mission.jpg')" }}
    >
      <div className="bg-slate-900 bg-opacity-75">
        <div className="px-5 md:px-10 pt-16 md:pt-28 lg:pt-36 pb-16 md:pb-28 lg:pb-36 space-y-8 md:space-y-16 max-w-screen-2xl mx-auto ">
          <div className="space-y-6 max-w-4xl text-center md:text-start text-primary-foreground">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION
                </h1>
                <p className="text-white md:text-xl">
                  Your single source for industrial machinery, controls, metal
                  fabrication, and engineering services. We provide expert
                  engineering, precision metal fabrication, and state-of-the-art
                  machinery and control systems, all under one roof.
                </p>
              </div>
              <div className="space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-4">
                <Link
                  href="/services"
                  className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-md md:rounded-full hover:opacity-90 transition-all duration-300 ease-in-out"
                >
                  See our services
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-white border text-white hover:bg-white hover:text-[#1d3456] font-semibold py-2 px-4 rounded-md md:rounded-full transition-all duration-300 ease-in-out"
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

export default Hero;
