export default function HomePage() {
  return (
    <section className="max-w-screen-xl px-5 py-10 mx-auto space-y-16">
      <div className="relative w-full h-[500px] flex items-center justify-center text-white">
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
          <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
            Check our services
          </button>
        </div>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        repudiandae obcaecati suscipit impedit tempora non, fugiat nam est!
        Commodi, ratione adipisci! Cupiditate quisquam possimus eum eligendi
        dicta? In, ipsum repellat.
      </p>

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
    </section>
  );
}
