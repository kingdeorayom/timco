import Ender from "@/components/home/Ender";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-screen-2xl px-5 py-12 mx-auto space-y-16">
      <section className="max-w-screen-xl mx-auto space-y-12 text-center">
        <div className="space-y-4">
          <h3 className="text-timco-red font-bold text-lg">
            20 Years of Advancements
          </h3>
          <h1 className="text-4xl md:text-7xl font-bold text-timco-dark-blue">
            Committed to Innovation, Precision, and Customer Satisfaction
          </h1>
        </div>
        <p className="text-xl text-balance">
          For 20 years, <strong>TIMCO</strong> has been a trusted partner for
          businesses seeking top-tier industrial machinery and metal
          fabrication. We've built long-lasting relationships with our clients,
          understanding their unique challenges and developing tailored
          solutions that drive their success. Our two decades of experience have
          honed our expertise, strengthened our commitment, and solidified our
          position as a leader in the industry.
        </p>
        <div className="py-8">
          <img
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-fit rounded-2xl"
          />
        </div>
      </section>

      <section className="px-5 pt-20 pb-16 mx-auto" id="company-history">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
          <div className="flex justify-center">
            <img
              src="/mission.jpg"
              alt="Test"
              width={1920}
              height={1080}
              className="object-fit rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-timco-dark-blue">
              A history of firsts that put{" "}
              <span className="text-timco-red">customers first</span>
            </h2>
            <p>
              Our growth reflects our dedication to meeting the evolving needs
              of our clients.
            </p>
            <div className="space-y-10 py-4">
              <p className="border-l-4 border-dotted border-timco-dark-blue ps-8 xl:ps-10">
                <strong>2005 Foundation.</strong> TIMCO was established by Mr.
                Ronnel Mendoza, a mechanical engineer who pioneered in the metal
                industry since the early 90s. With years of expertise, the
                company has built a reputation for quality and precision.
              </p>
              <p className="border-l-4 border-dotted border-timco-dark-blue ps-8 xl:ps-10">
                <strong>2017 Strategic Growth.</strong> To better serve our
                clients, TIMCO has relocated and expanded its operations in
                Binan City, Laguna—positioning itself in a strategic location
                for manufacturing and industrial growth.
              </p>
              <p className="border-l-4 border-dotted border-timco-dark-blue ps-8 xl:ps-10">
                <strong>2020 Future Expansion.</strong> With increasing demand
                and a growing client base, TIMCO is set to expand this year. Our
                new plant and office will enhance our capacity to accommodate
                more projects and provide superior service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-16" id="mission-vision">
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
            <img
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
            <img
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

      <section
        className="max-w-screen-xl mx-auto py-16 space-y-12 text-center"
        id="meet-the-team"
      >
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-timco-dark-blue">
            Driven by{" "}
            <span className="text-timco-red">innovation and excellence</span>,
            our founders have built a legacy of quality, dedication, and
            industry leadership.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 py-10">
          <div className="flex justify-center items-center flex-col space-y-16">
            <div className="bg-timco-white rounded-full h-48 w-48 md:h-64 md:w-64 border-2 border-slate-600" />
            <div className="text-center">
              <h3 className="font-bold text-xl text-timco-dark-blue">
                RONNEL MENDOZA
              </h3>
              <p className="text-timco-content text-lg">President</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col space-y-16">
            <div className="bg-timco-white rounded-full h-48 w-48 md:h-64 md:w-64 border-2 border-slate-600" />
            <div className="text-center">
              <h3 className="font-bold text-xl text-timco-dark-blue">
                JUSTINE MENDOZA
              </h3>
              <p className="text-timco-content text-lg">Vice President</p>
            </div>
          </div>
        </div>
        <p className="text-xl text-balance">
          With decades of experience and a deep understanding of the field, they
          have pioneered advancements that set new standards. Their vision
          continues to inspire growth, foster innovation, and shape a future
          where craftsmanship and technology go hand in hand to deliver
          exceptional results.
        </p>
      </section>

      <Ender />

      <section
        id="contact-us"
        className="max-w-screen-xl mx-auto space-y-12 text-center"
      >
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-timco-dark-blue">
            Contact Us
          </h2>
          <p className="text-xl text-balance">
            We're here to help! TIMCO offers a variety of ways to contact
            support for your convenience. Please reach out to us using any of
            the support options below.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 py-8">
          <div
            id="business-address"
            className="p-6 pb-10 space-y-6 flex flex-col items-center bg-slate-50 hover:bg-slate-100 transition-all duration-300 ease-in-out rounded-2xl"
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-7 w-7 fill-timco-dark-blue"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">BUSINESS ADDRESS</h3>
            <p>
              9015 AQUINO COMPOUND ALMA MANZO SUBDIVISION, SAN ANTONIO BIÑAN
              LAGUNA
            </p>
            {/* <div className="pt-2 pb-1">
              <Link
                href="https://maps.app.goo.gl/aXckmT7CCNyUxVCPA"
                target="_blank"
                className="hover:bg-timco-darkfill-timco-dark-blue bg-timco-white border-2 hover:border-timco-darkfill-timco-dark-blue border-slate-500 hover:text-timco-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Visit our site
              </Link>
            </div> */}
            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link
                href="https://maps.app.goo.gl/aXckmT7CCNyUxVCPA"
                target="_blank"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                Visit our site{" "}
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

          <div
            id="landline-number"
            className="p-6 pb-10 space-y-6 flex flex-col items-center bg-slate-50 hover:bg-slate-100 transition-all duration-300 ease-in-out rounded-2xl"
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-timco-dark-blue"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">LANDLINE NUMBER</h3>
            <p>775-34-92</p>

            {/* <div className="pt-2 pb-1">
              <Link
                href="tel:7753492"
                className="hover:bg-timco-darkfill-timco-dark-blue bg-timco-white border-2 hover:border-timco-darkfill-timco-dark-blue border-slate-500 hover:text-timco-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Call Us
              </Link>
            </div> */}

            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link
                href="tel:7753492"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                Call Us{" "}
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

          <div
            id="mobile-numbers"
            className="p-6 pb-10 space-y-6 flex flex-col items-center bg-slate-50 hover:bg-slate-100 transition-all duration-300 ease-in-out rounded-2xl"
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-7 w-7 fill-timco-dark-blue"
              >
                <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">MOBILE NUMBERS</h3>
            <p>
              +63 917 870 675 <br />
              +63 915 891 8418
            </p>

            {/* <div className="pt-2 pb-1">
              <Link
                href="tel:0917870675"
                className="hover:bg-timco-darkfill-timco-dark-blue bg-timco-white border-2 hover:border-timco-darkfill-timco-dark-blue border-slate-500 hover:text-timco-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Send us a message
              </Link>
            </div> */}

            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link
                href="tel:0917870675"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                Send us a message{" "}
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

          <div
            id="email-address"
            className="p-6 pb-10 space-y-6 flex flex-col items-center bg-slate-50 hover:bg-slate-100 transition-all duration-300 ease-in-out rounded-2xl"
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-timco-dark-blue"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">E-MAIL ADDRESS</h3>
            <p>sales@timcoph.com</p>

            {/* <div className="pt-2 pb-1">
              <Link
                href="mailto:sales@timcoph.com"
                className="hover:bg-timco-darkfill-timco-dark-blue bg-timco-white border-2 hover:border-timco-darkfill-timco-dark-blue border-slate-500 hover:text-timco-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Send us an e-mail
              </Link>
            </div> */}

            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link
                href="mailto:sales@timcoph.com"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                Send us an e-mail{" "}
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

          <div
            id="social-media"
            className="p-6 pb-10 space-y-6 flex flex-col items-center bg-slate-50 hover:bg-slate-100 transition-all duration-300 ease-in-out rounded-2xl"
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7 w-7 fill-timco-dark-blue"
              >
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">SOCIAL MEDIA</h3>
            <p>@timcocorp</p>

            {/* <div className="pt-2 pb-1">
              <Link
                href="#"
                className="hover:bg-timco-darkfill-timco-dark-blue bg-timco-white border-2 hover:border-timco-darkfill-timco-dark-blue border-slate-500 hover:text-timco-white text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
              >
                Follow Us
              </Link>
            </div> */}

            <div className="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Link
                href="#"
                className="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold"
              >
                Follow Us{" "}
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
    </div>
  );
}
