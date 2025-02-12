import Image from "next/image";
import Link from "next/link";

const Clients = () => {
  return (
    <>
      <section className="max-w-screen-2xl px-5 pt-16 pb-8 mx-auto space-y-16">
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
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-[#575757]">
              At <strong>TIMCO</strong>, we are honored to work with a diverse
              range of clients who trust us for our expertise, reliability, and
              commitment to excellence. From small businesses to large-scale
              enterprises, our partnerships are built on a foundation of quality
              craftsmanship and outstanding service.
            </p>
            <p className="text-[#575757]">
              Our clients come from various industries, including manufacturing,
              construction, and engineering, all benefiting from our
              cost-effective and innovative solutions. Explore our valued
              partners and see why companies continue to choose TIMCO as their
              trusted provider.
            </p>
            {/* <div>
              <Link
                href="/clients"
                className="bg-timco-orange hover:bg-white border border-timco-orange hover:border-timco-orange text-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                See our clients
              </Link>
            </div> */}
            {/* <div className="py-2">
              <Link
                href="/clients"
                className="hover:bg-timco-red bg-white border hover:border-timco-red border-timco-slate hover:text-white text-timco-slate font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                See our clients
              </Link>
            </div> */}
            <div className="py-2">
              <Link
                href="/clients"
                className="hover:bg-timco-red bg-white border hover:border-timco-red border-timco-red hover:text-white text-timco-red font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                See our clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-5 mx-auto">
        {/* <hr /> */}
        <div className="flex space-x-8 items-center justify-center">
          <Image
            src="/clients/gardenia.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/leslies.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/nutrimax.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/bsbs.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/ekpi.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
          <Image
            src="/clients/hstc.png"
            width={1500}
            height={1500}
            alt="Gardenia"
            className="h-48 w-48"
          />
        </div>
      </section>
    </>
  );
};

export default Clients;
