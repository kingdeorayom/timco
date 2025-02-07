import Image from "next/image";
import React from "react";

const MachinesEquipment = () => {
  return (
    <section className="px-5 pt-16">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        <div className="space-y-4">
          <h3 className="text-center text-[#ff7920] font-bold">
            What TIMCO offers
          </h3>
          <h2 className="text-3xl font-bold text-center">
            Machines and Equipment
          </h2>
        </div>

        <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Lathe Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Shearing Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Drill Press
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Radial Drill
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Milling Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            Hyrdraulic Bending Machine
          </li>
          <li className="flex justify-center border-b-4 border-transparent hover:text-[#ff7920] hover:border-[#ff7920] py-4 cursor-pointer transition-all duration-200 ease-in-out">
            TIG Welding Machine
          </li>
        </ul>

        <div className="max-w-screen-2xl px-5 pt-8 pb-8 mx-auto space-y-16">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
            <div>
              <Image
                src="/mission.jpg"
                alt="Test"
                width={1920}
                height={1080}
                className="object-cover h-96 w-full"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Lathe Machine</h2>
              <p className="text-gray-600">
                TIMCO's precision lathe machines are engineered for versatility
                and accuracy, handling a wide range of turning operations with
                ease. From shaping intricate components to performing heavy-duty
                cutting, our lathes deliver exceptional performance and
                reliability. Built with robust construction and advanced control
                systems, they ensure consistent results and minimize downtime,
                making them a valuable asset in any manufacturing environment.
              </p>
              <button className="bg-[#ff7920] hover:bg-white border border-[#ff7920] hover:border-[#ff7920] text-white hover:text-[#1d3456] font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
                See our clients
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinesEquipment;
