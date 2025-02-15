import Image from "next/image";
import Link from "next/link";

const Clients = () => {
  return (
    <>
      <section className="max-w-screen-2xl px-5 pt-16 pb-16 mx-auto space-y-16">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-16">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/bsbs.png"
                  width={1500}
                  height={1500}
                  alt="Big Smile Bread Station"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/ccp.png"
                  width={1500}
                  height={1500}
                  alt="CCP"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/doxo.png"
                  width={1500}
                  height={1500}
                  alt="Doxo"
                  className="h-24 w-24"
                />
              </div>

              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/ekpi.png"
                  width={1500}
                  height={1500}
                  alt="EKPI"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/gardenia.png"
                  width={1500}
                  height={1500}
                  alt="Gardenia"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/hstc.png"
                  width={1500}
                  height={1500}
                  alt="Herma Shipping and Transport Corporation"
                  className="h-24 w-24"
                />
              </div>

              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/leslies.png"
                  width={1500}
                  height={1500}
                  alt="Leslie's"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/mpi.png"
                  width={1500}
                  height={1500}
                  alt="Mix Plant, Inc."
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/nutrimax.png"
                  width={1500}
                  height={1500}
                  alt="Nutrimax"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/pfbp.png"
                  width={1500}
                  height={1500}
                  alt="Philfoods Fresh-Baked Products, Inc."
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/pps.png"
                  width={1500}
                  height={1500}
                  alt="PPS"
                  className="h-24 w-24"
                />
              </div>
              <div className="bg-timco-white rounded-2xl">
                <img
                  src="/clients/smdc.png"
                  width={1500}
                  height={1500}
                  alt="Snow Mountain Dairy Corporation"
                  className="h-24 w-24"
                />
              </div>
            </div>
            <p className="text-timco-content">
              At <strong>TIMCO</strong>, we are honored to work with a diverse
              range of clients who trust us for our expertise, reliability, and
              commitment to excellence. From small businesses to large-scale
              enterprises, our partnerships are built on a foundation of quality
              craftsmanship and outstanding service.
            </p>
            <p className="text-timco-content">
              Our clients come from various industries, including manufacturing,
              construction, and engineering, all benefiting from our
              cost-effective and innovative solutions. Explore our valued
              partners and see why companies continue to choose TIMCO as their
              trusted provider.
            </p>

            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center">
              <Link
                href="/clients"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                See our clients{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-timco-red group-hover:fill-timco-slate h-4 w-4 ms-2 transition-all duration-300 ease-in-out"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
