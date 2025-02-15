import Image from "next/image";

const MissionVision = () => {
  return (
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
          <Image
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
          <Image
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
    // <>
    //   <div className="max-w-screen-2xl px-5 pt-16 pb-8 mx-auto space-y-16">
    //     <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
    //       <div className="flex items-center">
    //         <div className="space-y-8">
    //           <h2 className="text-5xl font-bold text-timco-dark-blue">
    //             Our Mission
    //           </h2>
    //           <p className="text-timco-content">
    //             TIMCO will exceed the customer’s expectations by providing
    //             reliable and cost-effective solutions through strong business
    //             associations, quality product solutions, dedicated employees,
    //             extraordinary service, and safe practices.
    //           </p>
    //         </div>
    //       </div>

    //       <div>
    //         <Image
    //           src="/mission.jpg"
    //           alt="Test"
    //           width={1920}
    //           height={1080}
    //           className="object-fit rounded-2xl"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="max-w-screen-2xl px-5 pt-16 pb-8 mx-auto space-y-16">
    //     <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
    //       <div>
    //         <Image
    //           src="/mission.jpg"
    //           alt="Test"
    //           width={1920}
    //           height={1080}
    //           className="object-fit rounded-2xl"
    //         />
    //       </div>
    //       <div className="flex items-center">
    //         <div className="space-y-8">
    //           <h2 className="text-5xl font-bold text-timco-dark-blue">
    //             Our Vision
    //           </h2>
    //           <p className="text-timco-content">
    //             To be the preferred supplier of metal and steel fabrication
    //             solutions.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    // <section className="max-w-screen-2xl px-5 py-10 mx-auto space-y-16">
    //   <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden">
    //     <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
    //       <div
    //         className="absolute inset-0 bg-cover bg-center"
    //         style={{ backgroundImage: "url('/mission-bg.jpg')" }}
    //       />
    //       <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
    //       <div className="relative z-10 text-center px-5 space-y-6">
    //         <h2 className="text-5xl font-bold">Our Mission</h2>
    //         <p className="max-w-2xl mx-auto text-xl">
    //           TIMCO will exceed the customer’s expectations by providing
    //           reliable and cost-effective solutions through strong business
    //           associations, quality product solutions, dedicated employees,
    //           extraordinary service, and safe practices.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
    //       <div
    //         className="absolute inset-0 bg-cover bg-center"
    //         style={{ backgroundImage: "url('/mission.jpg')" }}
    //       />
    //     </div>
    //     <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
    //       <div
    //         className="absolute inset-0 bg-cover bg-center"
    //         style={{ backgroundImage: "url('/vision.jpg')" }}
    //       />
    //     </div>
    //     <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
    //       <div
    //         className="absolute inset-0 bg-cover bg-center"
    //         style={{ backgroundImage: "url('/vision-bg.jpg')" }}
    //       />
    //       <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
    //       <div className="relative z-10 text-center px-5 space-y-6">
    //         <h2 className="text-5xl font-bold">Our Vision</h2>
    //         <p className="max-w-2xl mx-auto text-xl">
    //           To be the preferred supplier of metal and steel fabrication
    //           solutions.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default MissionVision;
