import Image from "next/image";

export default function ClientsPage() {
  return (
    <section className="max-w-screen-xl px-5 py-12 mx-auto space-y-16">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div className="space-y-8  md:order-last order-first">
          <h1 className="text-5xl font-bold">Trusted by Industry Leaders</h1>
          <p>
            At <strong>TIMCO</strong>, we are honored to work with a diverse
            range of clients who trust us for our expertise, reliability, and
            commitment to excellence. From small businesses to large-scale
            enterprises, our partnerships are built on a foundation of quality
            craftsmanship and outstanding service.
          </p>
          <p>
            Our clients come from various industries, including manufacturing,
            construction, and engineering, all benefiting from our
            cost-effective and innovative solutions. Explore our valued partners
            and see why companies continue to choose TIMCO as their trusted
            provider.
          </p>
          <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
            Check our services
          </button>
        </div>
        <div className="md:order-first order-last">
          <Image
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-fit"
          />
        </div>
        {/* <div className="relative w-full h-[500px] flex items-center justify-center text-white md:order-first order-last">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/mission.jpg')" }}
          />
          <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
          <div className="relative z-10 text-center px-5 space-y-8">
            <h2 className="text-5xl font-bold">20 Years of Advancements</h2>
            <p className="max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              repudiandae velit saepe aut assumenda? Molestias optio debitis,
              magnam minus magni similique quidem animi sunt? Quis quisquam
              nulla pariatur doloremque tempora!
            </p>
            <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
              Check our services
            </button>
          </div>
        </div> */}
      </div>

      <div className="bg-[#1D3546] h-6 md:h-7" />

      <h2 className="text-3xl font-bold">Our Clients</h2>

      <div className="space-y-16 px-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="font-bold text-2xl text-[#1D3546]">
              GARDENIA BAKERIES PHIL. INC.
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabrication of Conveyors</li>
              <li>Perforated Lockers</li>
              <li>Cooling Racks</li>
              <li>Proofing Racks</li>
              <li>Toastline Chimneys</li>
              <li>Hydraulic Pusher</li>
              <li>Container Vans</li>
              <li>Stainless Steel Silo</li>
              <li>Pipings</li>
              <li>Humidifier and Spraying Systems</li>
              <li>Dough Tub</li>
              <li>Spiral Cooler</li>
              <li>Loader Conveyor</li>
              <li>Stainless Steel Cabinet and Tables</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={`/clients/gardenia.png`}
              width={1500}
              height={1500}
              alt="Gardenia"
              className="border-4 border-white shadow-xl h-72 w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
