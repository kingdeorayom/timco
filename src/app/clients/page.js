import Image from "next/image";

export default function ClientsPage() {
  return (
    <section className="max-w-screen-2xl px-5 pt-16 pb-16 mx-auto space-y-16">
      <div className="space-y-16">
        <h1 className="text-4xl md:text-6xl font-bold text-timco-dark-blue">
          <span className="text-timco-red">Trusted</span> by Industry Leaders
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-16 px-8">
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/bsbs.png"
              width={1500}
              height={1500}
              alt="Big Smile Bread Station"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/ccp.png"
              width={1500}
              height={1500}
              alt="CCP"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/doxo.png"
              width={1500}
              height={1500}
              alt="Doxo"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>

          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/ekpi.png"
              width={1500}
              height={1500}
              alt="EKPI"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/gardenia.png"
              width={1500}
              height={1500}
              alt="Gardenia"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/hstc.png"
              width={1500}
              height={1500}
              alt="Herma Shipping and Transport Corporation"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>

          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/leslies.png"
              width={1500}
              height={1500}
              alt="Leslie's"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/mpi.png"
              width={1500}
              height={1500}
              alt="Mix Plant, Inc."
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/nutrimax.png"
              width={1500}
              height={1500}
              alt="Nutrimax"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/pfbp.png"
              width={1500}
              height={1500}
              alt="Philfoods Fresh-Baked Products, Inc."
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/pps.png"
              width={1500}
              height={1500}
              alt="PPS"
              className="h-28 w-28 md:h-32 md:w-32"
            />
          </div>
          {/* <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/smdc.png"
              width={1500}
              height={1500}
              alt="Snow Mountain Dairy Corporation"
              className="h-32 w-32"
            />
          </div> */}
        </div>
        <div className="p-8 bg-timco-off-white rounded-2xl">
          <p>
            Our clients come from various industries, including manufacturing,
            construction, and engineering, all benefiting from our
            cost-effective and innovative solutions. Explore our valued partners
            and see why companies continue to choose TIMCO as their trusted
            provider.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/gardenia.png`}
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Gardenia Bakeries Phil. Inc.
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Fabrication of Conveyors</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Perforated Lockers</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Cooling Racks</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Proofing Racks</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Toastline Chimneys</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Hydraulic Pusher</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Container Vans</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Silo</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Pipings</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Humidifier and Spraying Systems</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Dough Tub</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Spiral Cooler</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Loader Conveyor</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Cabinet and Tables</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/hstc.png`}
            width={1500}
            height={1500}
            alt="Herma Shipping and Transport Corporation"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Herma Shipping and Transport Corporation
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Supply of Emergency Lights</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Perforated Flat Bars</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Supply of Battery Charger</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Supply of Self-Pump</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/doxo.png`}
            width={1500}
            height={1500}
            alt="Doxo Ingredients Inc."
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Doxo Ingredients Inc.
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Mechanical Installation</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Airline Piping Works</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Rectification of Blower Inlet</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Rectification of Vacuum Weighing Hopper</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/mpi.png`}
            width={1500}
            height={1500}
            alt="Mix Plant, Inc."
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Mix Plant, Inc.
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Shaft Seal Replacement</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Tables</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Cooling Racks</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/pps.png`}
            width={1500}
            height={1500}
            alt="Pneu Powders Systems"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Pneu Powders Systems
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Mechanical & Electrical Installation</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Flour Air Conveying System</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Installation of Butterfly Valve</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/ekpi.png`}
            width={1500}
            height={1500}
            alt="Edward Keller Phil Inc."
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Edward Keller Phil Inc.
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Supply & Installation of Silo Mixer Stand</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Fabrication & Installation of Shaft Seal</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Airlock Housing for Ribbon Blender</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Supply & Installation of Loading Platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/nutrimax.png`}
            width={1500}
            height={1500}
            alt="Nutrimax Fresh Baked"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Nutrimax Fresh Baked
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Various Machining Works</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Hydraulic and Pneumatic</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Dough Tubs</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Loafline Cooling Rack</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Bunline Cooling Rack</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Packaging Materials Rack</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Depanning Table</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/leslies.png`}
            width={1500}
            height={1500}
            alt="Leslie's Corporation"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Leslie's Corporation
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>
                Fabrication, Supply, and Installation of Steel Ladder and
                Platform for Boiler
              </p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Electrical and Piping Works</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/pfbp.png`}
            width={1500}
            height={1500}
            alt="Philfoods Fresh-Baked Products Inc."
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Philfoods Fresh-Baked Products Inc.
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Conveyors</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Equipment</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Working Tables</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Lockers</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Elevated Platform</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Fabrication of Extension Conveyor Belt</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/ccp.png`}
            width={1500}
            height={1500}
            alt="Container Corp of the Philippines"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Container Corp of the Philippines
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Various Machining Works</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Hydraulics and Pneumatics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        <div className="flex items-center justify-center">
          <Image
            src={`/clients/bsbs.png`}
            width={1500}
            height={1500}
            alt="Big Smile Bread Station"
            className="h-64 w-64"
          />
        </div>
        <div className="space-y-8">
          <h2 className="font-bold text-4xl text-timco-dark-blue text-center uppercase">
            Big Smile Bread Station
          </h2>
          <div className="flex flex-wrap gap-4 p-5">
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Fabrication of Bread Display Racks</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Construction, Fabrication, and Installation of Whole Store</p>
            </div>
            <div className="bg-timco-off-white rounded-full px-4 py-2 w-fit">
              <p>Stainless Steel Sinks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
