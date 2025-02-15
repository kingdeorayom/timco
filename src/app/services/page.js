import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="max-w-screen-2xl px-5 py-12 mx-auto space-y-16">
      <h1 className="text-4xl font-bold">
        TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION
      </h1>
      <div className="relative w-full h-[500px] flex items-center justify-center text-timco-white">
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
            magnam minus magni similique quidem animi sunt? Quis quisquam nulla
            pariatur doloremque tempora!
          </p>
          <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
            Check our services
          </button>
        </div>
      </div>

      <div className="space-y-10">
        <h2 className="text-3xl font-bold">TIMCO History</h2>
        <div className="space-y-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aliquam iusto perferendis asperiores, perspiciatis quam, illum,
            magni suscipit mollitia quod voluptate tenetur totam ipsum libero
            dolorem? Perferendis totam in sequi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut dolorum, provident nulla assumenda
            numquam sit accusantium facilis eligendi repellat dicta voluptates
            officia neque voluptatibus odit, sed obcaecati dolore libero
            inventore.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            sunt dolorem beatae corrupti id! Sunt alias eligendi adipisci rerum
            omnis. Laboriosam, quisquam. Dolore, praesentium necessitatibus
            aperiam ipsum vitae eveniet.
          </p>
        </div>
        <div className="bg-[#1D3546] h-6" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-timco-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-xl shadow-lg hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-10 w-10 fill-[#1D3546]"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
            </svg>
            <h3 className="font-semibold text-lg">2005 - Our Foundation</h3>
            <p>
              TIMCO was established by Mr. Ronnel Mendoza, a mechanical engineer
              who pioneered in the metal industry since the early 90s. With
              years of expertise, the company has built a reputation for quality
              and precision.
            </p>
          </div>
          <div className="bg-timco-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-xl shadow-lg hover:shadow-xl">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">2017 - Strategic Growth</h3>
            <p>
              To better serve our clients, TIMCO has relocated and expanded its
              operations in Binan City, Laguna—positioning itself in a strategic
              location for manufacturing and industrial growth.
            </p>
          </div>
          <div className="bg-timco-white border p-6 transition-all duration-300 ease-in-out space-y-4 rounded-xl shadow-lg hover:shadow-xl">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">2020 - Future Expansion</h3>
            <p>
              With increasing demand and a growing client base, TIMCO is set to
              expand this year. Our new plant and office will enhance our
              capacity to accommodate more projects and provide superior
              service.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
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
        <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/mission.jpg')" }}
          />
        </div>
        <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/vision.jpg')" }}
          />
        </div>
        <div className="relative w-full h-[350px] flex items-center justify-center text-timco-white">
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
        <div className="space-y-12 bg-timco-off-white p-10 rounded-lg">
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
              <div className="bg-timco-white rounded-full h-32 w-32 md:h-48 md:w-48 border-2 border-slate-600" />
              <div className="text-center">
                <h3 className="font-medium">RONNEL MENDOZA</h3>
                <p className="text-slate-600">President</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col space-y-5">
              <div className="bg-timco-white rounded-full h-32 w-32 md:h-48 md:w-48 border-2 border-slate-600" />
              <div className="text-center">
                <h3 className="font-medium">JUSTINE MENDOZA</h3>
                <p className="text-slate-600">Vice President</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col space-y-5">
              <div className="bg-timco-white rounded-full h-32 w-32 md:h-48 md:w-48 border-2 border-slate-600" />
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
            We’re here to help! <strong>TIMCO</strong> offers a variety of ways
            to contact support for your convenience. Please reach out to us
            using any of the support options below.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 space-y-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">BUSINESS ADDRESS</h3>
            <p>
              9015 AQUINO COMPOUND ALMA MANZO SUBDIVISION, SAN ANTONIO BINAN
              LAGUNA
            </p>
            <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Visit Us
            </button>
          </div>
          <div className="border p-6 space-y-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">LANDLINE NUMBER</h3>
            <p>775-34-92</p>
            <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Check our services
            </button>
          </div>
          <div className="border p-6 space-y-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">MOBILE NUMBERS</h3>
            <p>
              +63 917 870 675 <br />
              +63 915 891 8418
            </p>
            <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Check our services
            </button>
          </div>
          <div className="border p-6 space-y-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">E-MAIL ADDRESS</h3>
            <p>sales@timcoph.com</p>
            <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Check our services
            </button>
          </div>
          <div className="border p-6 space-y-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="h-12 w-12 bg-slate-200 rounded-md" />
            <h3 className="font-semibold text-lg">SOCIAL MEDIA</h3>
            <p>@timcocorp</p>
            <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Check our services
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 bg-timco-off-white p-12 rounded-lg">
        <div>
          <Image
            src="/mission.jpg"
            alt="Test"
            width={1920}
            height={1080}
            className="object-fit"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">TIMCO History</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consectetur aut, nemo beatae quam fugit ut dolorem voluptatibus
            neque, esse ad. Quod facere, ipsam odio aperiam beatae debitis ea
            quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque, quis nesciunt aut eligendi quisquam blanditiis ad molestiae
            quas magnam. Hic voluptatum accusantium nesciunt totam voluptates
            voluptatibus, velit voluptate possimus ducimus?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            aliquam cumque ut cum explicabo, rem dignissimos sit laudantium
            neque fugiat optio, aut aliquid. Nobis suscipit repudiandae odio
            enim sequi eos.
          </p>
          <button className="bg-timco-orange hover:bg-timco-white border border-timco-orange hover:border-timco-orange text-timco-white hover:text-timco-slate font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
            Check our services
          </button>
        </div>
      </div>
    </section>
  );
}
