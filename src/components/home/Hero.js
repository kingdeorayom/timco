import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-screen-2xl px-7 pt-16 pb-8 mx-auto">
      <div className="grid xl:grid-cols-2 gap-16">
        <div className="space-y-10">
          <h1 className="text-5xl lg:text-6xl font-semibold text-timco-dark-blue">
            TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION
            {/* Topsure Industrial Machineries and Controls Corporation */}
          </h1>
          <p className="md:text-xl">
            Your single source for industrial machinery, controls, metal
            fabrication, and engineering services. We provide expert
            engineering, precision metal fabrication, and state-of-the-art
            machinery and control systems, all under one roof.
          </p>
          <div>
            <div className="space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-4">
              <Link
                href="/services"
                className="bg-timco-dark-blue text-white font-bold py-4 px-4 rounded-md md:rounded-md hover:opacity-85 transition-all duration-300 ease-in-out"
              >
                See our services
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-timco-slate border-2 font-bold text-timco-slate hover:bg-[#f5f5f5] hover:text-timco-slate py-4 px-4 rounded-md md:rounded-md transition-all duration-300 ease-in-out"
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
              className="object-fit rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
    // <section
    //   className="w-full h-full bg-center bg-cover"
    //   style={{ backgroundImage: "url('/mission.jpg')" }}
    // >
    //   <div className="bg-slate-900 bg-opacity-75">
    //     <div className="px-5 md:px-10 pt-16 md:pt-28 lg:pt-28 pb-16 md:pb-28 lg:pb-28 space-y-8 md:space-y-16 max-w-screen-2xl mx-auto ">
    //       <div className="space-y-6 max-w-4xl text-center md:text-start text-primary-foreground">
    //         <div className="space-y-10">
    //           <div className="space-y-6">
    //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
    //               TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION
    //             </h1>
    //             <p className="text-white md:text-xl">
    //               Your single source for industrial machinery, controls, metal
    //               fabrication, and engineering services. We provide expert
    //               engineering, precision metal fabrication, and state-of-the-art
    //               machinery and control systems, all under one roof.
    //             </p>
    //           </div>
    //           {/* <div className="space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-4">
    //             <Link
    //               href="/services"
    //               className="bg-timco-blue text-white font-bold py-2 px-4 rounded-md md:rounded-full hover:opacity-90 transition-all duration-300 ease-in-out"
    //               // className="bg-timco-blue hover:bg-white border hover:border-timco-dark-blue text-white hover:text-timco-slate font-bold px-4 rounded-full transition-all duration-300 ease-in-out flex items-center h-10"
    //             >
    //               See our services
    //             </Link>
    //             <Link
    //               href="/about"
    //               className="bg-transparent border-white border font-bold text-white hover:bg-white hover:text-timco-slate py-2 px-4 rounded-md md:rounded-full transition-all duration-300 ease-in-out"
    //             >
    //               Learn more
    //             </Link>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
