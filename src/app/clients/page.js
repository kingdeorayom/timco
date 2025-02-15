import Image from "next/image";
import Link from "next/link";

export default function ClientsPage() {
  return (
    <section className="max-w-screen-2xl px-5 pt-16 pb-16 mx-auto space-y-16">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-6xl font-bold text-timco-dark-blue">
          <span className="text-timco-red">Trusted</span> by Industry Leaders
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 px-8">
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/bsbs.png"
              width={1500}
              height={1500}
              alt="Big Smile Bread Station"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/ccp.png"
              width={1500}
              height={1500}
              alt="CCP"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/doxo.png"
              width={1500}
              height={1500}
              alt="Doxo"
              className="h-32 w-32"
            />
          </div>

          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/ekpi.png"
              width={1500}
              height={1500}
              alt="EKPI"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/gardenia.png"
              width={1500}
              height={1500}
              alt="Gardenia"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/hstc.png"
              width={1500}
              height={1500}
              alt="Herma Shipping and Transport Corporation"
              className="h-32 w-32"
            />
          </div>

          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/leslies.png"
              width={1500}
              height={1500}
              alt="Leslie's"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/mpi.png"
              width={1500}
              height={1500}
              alt="Mix Plant, Inc."
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/nutrimax.png"
              width={1500}
              height={1500}
              alt="Nutrimax"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/pfbp.png"
              width={1500}
              height={1500}
              alt="Philfoods Fresh-Baked Products, Inc."
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/pps.png"
              width={1500}
              height={1500}
              alt="PPS"
              className="h-32 w-32"
            />
          </div>
          <div className="bg-timco-white rounded-2xl">
            <Image
              src="/clients/smdc.png"
              width={1500}
              height={1500}
              alt="Snow Mountain Dairy Corporation"
              className="h-32 w-32"
            />
          </div>
        </div>
        <div className="p-10 bg-timco-off-white rounded-2xl space-y-8">
          <p>
            Our clients come from various industries, including manufacturing,
            construction, and engineering, all benefiting from our
            cost-effective and innovative solutions. Explore our valued partners
            and see why companies continue to choose TIMCO as their trusted
            provider.
          </p>
        </div>
      </div>
    </section>
  );
}
