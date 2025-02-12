import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-screen-2xl px-5 py-12 mx-auto space-y-16">
      <h1 className="text-4xl font-bold">
        TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION
      </h1>
      <div className="relative w-full h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/mission.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
        <div className="relative z-10 text-center px-5 space-y-8">
          <h2 className="text-5xl font-bold">20 Years of Advancements</h2>
          <p className="max-w-2xl mx-auto">
            For 20 years, <strong>TIMCO</strong> has been a trusted partner for
            businesses seeking top-tier industrial machinery and metal
            fabrication. We've built long-lasting relationships with our
            clients, understanding their unique challenges and developing
            tailored solutions that drive their success. Our two decades of
            experience have honed our expertise, strengthened our commitment,
            and solidified our position as a leader in the industry.
          </p>
          <div>
            <Link
              href="/services"
              className="bg-timco-orange hover:bg-white border border-timco-orange hover:border-white text-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
            >
              Check our services
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#1D3546] h-6" />

      <div className="space-y-10">
        <h2 className="text-3xl font-bold">TIMCO History</h2>
        <div className="space-y-8">
          <p>
            TIMCO has a rich history of serving the industrial sector with
            high-quality machinery and metal fabrication services. From our
            beginnings in 2005 to our current expansion, we've remained
            committed to innovation, precision, and customer satisfaction. Our
            growth reflects our dedication to meeting the evolving needs of our
            clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-2xl shadow-lg hover:shadow-xl">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-green-700"
              >
                <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl">2005 - Our Foundation</h3>
            <p>
              TIMCO was established by Mr. Ronnel Mendoza, a mechanical engineer
              who pioneered in the metal industry since the early 90s. With
              years of expertise, the company has built a reputation for quality
              and precision.
            </p>
          </div>
          <div className="bg-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-2xl shadow-lg hover:shadow-xl">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-green-700"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl">2017 - Strategic Growth</h3>
            <p>
              To better serve our clients, TIMCO has relocated and expanded its
              operations in Binan City, Laguna—positioning itself in a strategic
              location for manufacturing and industrial growth.
            </p>
          </div>
          <div className="bg-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-2xl shadow-lg hover:shadow-xl">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-green-700"
              >
                <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 96-96 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 96 0 0 96-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-96 96 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-96 0 0-96 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl">2020 - Future Expansion</h3>
            <p>
              With increasing demand and a growing client base, TIMCO is set to
              expand this year. Our new plant and office will enhance our
              capacity to accommodate more projects and provide superior
              service.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1D3546] h-6" />

      <div className="grid md:grid-cols-2">
        <div className="relative w-full h-[350px] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/mission-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
          <div className="relative z-10 text-center px-5 space-y-6">
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="max-w-2xl mx-auto text-lg">
              TIMCO will exceed the customer’s expectations by providing
              reliable and cost-effective solutions through strong business
              associations, quality product solutions, dedicated employees,
              extraordinary service, and safe practices.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[350px] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/mission.jpg')" }}
          />
        </div>
        <div className="relative w-full h-[350px] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/vision.jpg')" }}
          />
        </div>
        <div className="relative w-full h-[350px] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/vision-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-slate-900 bg-opacity-75" />
          <div className="relative z-10 text-center px-5 space-y-6">
            <h2 className="text-4xl font-bold">Our Vision</h2>
            <p className="max-w-2xl mx-auto text-lg">
              To be the preferred supplier of metal and steel fabrication
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Visionaries Behind Our Success</h2>
        <div className="space-y-12 bg-[#F8F9FA] p-10 rounded-2xl">
          <div className="space-y-4">
            <p>
              Driven by innovation and excellence, our founders have built a
              legacy of quality, dedication, and industry leadership.
            </p>
            <p>
              With decades of experience and a deep understanding of the field,
              they have pioneered advancements that set new standards. Their
              vision continues to inspire growth, foster innovation, and shape a
              future where craftsmanship and technology go hand in hand to
              deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex justify-center items-center flex-col space-y-5">
              <div className="bg-white rounded-full h-32 w-32 md:h-48 md:w-48 border-2 border-slate-600" />
              <div className="text-center">
                <h3 className="font-medium">RONNEL MENDOZA</h3>
                <p className="text-slate-600">President</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col space-y-5">
              <div className="bg-white rounded-full h-32 w-32 md:h-48 md:w-48 border-2 border-slate-600" />
              <div className="text-center">
                <h3 className="font-medium">JUSTINE MENDOZA</h3>
                <p className="text-slate-600">Vice President</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col space-y-5">
              <div className="bg-white rounded-full h-32 w-32 md:h-48 md:w-48 border-2 border-slate-600" />
              <div className="text-center">
                <h3 className="font-medium">CHRISTOPHER NAVARRO</h3>
                <p className="text-slate-600">VP Business Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1D3546] h-6" id="contact-us" />

      <div className="space-y-10">
        <h2 className="text-3xl font-bold">Company Contacts</h2>
        <div className="space-y-8">
          <p>
            We're here to help! <strong>TIMCO</strong> offers a variety of ways
            to contact support for your convenience. Please reach out to us
            using any of the support options below.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 space-y-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-7 w-7 fill-timco-orange"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">BUSINESS ADDRESS</h3>
            <p>
              9015 AQUINO COMPOUND ALMA MANZO SUBDIVISION, SAN ANTONIO BINAN
              LAGUNA
            </p>
            <hr />
            <div className="pt-2 pb-1">
              <Link
                href="https://maps.app.goo.gl/aXckmT7CCNyUxVCPA"
                target="_blank"
                className="hover:bg-timco-orange bg-white border hover:border-timco-orange border-slate-500 hover:text-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Visit our site
              </Link>
            </div>
          </div>
          <div className="border p-6 space-y-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-timco-orange"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">LANDLINE NUMBER</h3>
            <p>775-34-92</p>
            <hr />
            <div className="pt-2 pb-1">
              <Link
                href="tel:7753492"
                className="hover:bg-timco-orange bg-white border hover:border-timco-orange border-slate-500 hover:text-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Call Us
              </Link>
            </div>
          </div>
          <div className="border p-6 space-y-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-7 w-7 fill-timco-orange"
              >
                <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">MOBILE NUMBERS</h3>
            <p>
              +63 917 870 675 <br />
              +63 915 891 8418
            </p>
            <hr />
            <div className="pt-2 pb-1">
              <Link
                href="tel:0917870675"
                className="hover:bg-timco-orange bg-white border hover:border-timco-orange border-slate-500 hover:text-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Send us a message
              </Link>
            </div>
          </div>
          <div className="border p-6 space-y-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-timco-orange"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">E-MAIL ADDRESS</h3>
            <p>sales@timcoph.com</p>
            <hr />
            <div className="pt-2 pb-1">
              <Link
                href="mailto:sales@timcoph.com"
                className="hover:bg-timco-orange bg-white border hover:border-timco-orange border-slate-500 hover:text-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Send us an e-mail
              </Link>
            </div>
          </div>
          <div className="border p-6 space-y-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group">
            <div className="bg-[#F8F9FA] border h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-timco-orange"
              >
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">SOCIAL MEDIA</h3>
            <p>@timcocorp</p>
            <hr />
            <div className="pt-2 pb-1">
              <Link
                href="#"
                className="hover:bg-timco-orange bg-white border hover:border-timco-orange border-slate-500 hover:text-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Follow Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 bg-[#F8F9FA] p-12 rounded-lg">
        <div>
          <Image
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-cover h-80"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Interested in learning more about products and solutions from TIMCO?
          </h2>
          <p>
            We offer a wide range of industrial machinery and metal fabrication
            solutions tailored to meet your specific needs. From standard
            equipment to custom designs, we have the expertise and capabilities
            to deliver exceptional results.
          </p>
          <p>
            Contact us today to explore our comprehensive product offerings and
            discover how we can contribute to your success.
          </p>
          <div className="py-2">
            <Link
              href="/services"
              className="hover:bg-timco-orange bg-white border hover:border-timco-orange border-slate-500 hover:text-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
            >
              Check our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
