@extends('mainlayout')
@section('content')

<section class="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 pb-4 sm:pt-16 sm:pb-8">
  <div class="grid xl:grid-cols-2 gap-10">
    <div class="space-y-10">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-timco-dark-blue">
        <span class="text-timco-red">TOPSURE</span> INDUSTRIAL
        MACHINERIES AND CONTROLS CORPORATION
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-gray-700">
        Your single source for industrial machinery, controls, metal
        fabrication, and engineering services. We provide expert
        engineering, precision metal fabrication, and state-of-the-art
        machinery and control systems, all under one roof.
      </p>
      <div>
        <div class="space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-4">
          <a href="/services"
            class="bg-timco-dark-blue text-timco-white font-bold py-4 px-6 rounded-md hover:opacity-85 transition-all duration-300 ease-in-out text-center">
            See our services
          </a>
          <a href="/about"
            class="border-2 border-timco-slate font-bold text-timco-slate hover:bg-gray-100 py-4 px-6 rounded-md transition-all duration-300 ease-in-out text-center">
            Learn more
          </a>
        </div>
      </div>
    </div>
    <div>
      <img src="/images/mission.jpg" alt="Industrial Machinery" width="1920" height="1080"
        class="object-cover w-full h-auto rounded-2xl" />
    </div>
  </div>
</section>

<section class="bg-timco-white px-5 pt-16 pb-4">
  <div class="max-w-screen-2xl mx-auto space-y-16">
    <div class="space-y-4">
      <h3 class="text-center text-timco-red font-bold text-lg">
        For Commercial & Residential Services
      </h3>
      <h2 class="text-4xl font-bold text-center">
        High Quality Metal and Steel Fabrication Solutions
      </h2>
    </div>
    <div class="grid lg:grid-cols-3 gap-4 lg:gap-16">
      <div>
        <div>
          <img
            src="/images/mission.jpg"
            alt="Test"
            width="1920"
            height="1080"
            class="object-fit rounded-2xl" />
        </div>
        <div class="py-5 space-y-4">
          <h2 class="text-3xl font-bold">Corporation</h2>
          <p class="text-timco-content">
            <strong>TIMCO</strong> is a leading provider of comprehensive
            industrial solutions. We specialize in the design,
            engineering, fabrication, and implementation of cutting-edge
            machinery, control systems, and metal structures.
          </p>

          <div class="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
            <a
              href="/company"
              class="text-timco-slate transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-dark-blue font-bold">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="fill-timco-slate group-hover:fill-timco-dark-blue h-4 w-4 ms-2 transition-all duration-300 ease-in-out">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="/images/mission.jpg"
            alt="Test"
            width="1920"
            height="1080"
            class="object-fit rounded-2xl" />
        </div>
        <div class="py-5 space-y-4">
          <h2 class="text-3xl font-bold">
            Metal and Steel Fabrication
          </h2>
          <p class="text-timco-content">
            Our state-of-the-art metal and steel fabrication facilities
            are equipped to handle projects of any scale and complexity.
            From precision cutting and welding to complex assembly and
            finishing, we employ advanced techniques and adhere to
            stringent quality standards to deliver superior results.
          </p>

          <div class="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
            <a
              href="/services"
              class="text-timco-slate transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-dark-blue font-bold">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="fill-timco-slate group-hover:fill-timco-dark-blue h-4 w-4 ms-2 transition-all duration-300 ease-in-out">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="/images/mission.jpg"
            alt="Test"
            width="1920"
            height="1080"
            class="object-fit rounded-2xl" />
        </div>
        <div class="py-5 space-y-4">
          <h2 class="text-3xl font-bold">Engineering Services</h2>
          <p class="text-timco-content">
            <strong>TIMCO</strong>'s team of highly skilled engineers
            provides a full spectrum of engineering services, including
            design, analysis, consulting, and project management. We
            leverage our expertise and industry best practices to develop
            innovative solutions that address your unique challenges.
          </p>
          <div class="group hover:-translate-y-1 transition-all duration-300 ease-in-out py-3">
            <a
              href="/services"
              class="text-timco-slate transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-dark-blue font-bold">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="fill-timco-slate group-hover:fill-timco-dark-blue h-4 w-4 ms-2 transition-all duration-300 ease-in-out">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="px-5 pt-8 pb-8">
  <div class="max-w-screen-2xl mx-auto space-y-16">
    <div class="space-y-4">
      <h3 class="text-center text-timco-red font-bold text-lg">
        What TIMCO offers
      </h3>
      <h2 class="text-4xl font-bold text-center">
        Machines and Equipment
      </h2>
    </div>
    <ul class="flex text-center border-b border-gray-200 text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <li data-target="lathe-machine" class="flex-1 px-4 py-4 border-b-4 cursor-pointer transition-all duration-200 ease-in-out text-timco-dark-blue border-timco-dark-blue font-bold">
        Lathe Machine
      </li>
      <li data-target="shearing-machine" class="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
        Shearing Machine
      </li>
      <li data-target="drill-press" class="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
        Drill Press
      </li>
      <li data-target="radial-drill" class="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
        Radial Drill
      </li>
      <li data-target="milling-machine" class="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
        Milling Machine
      </li>
      <li data-target="hydraulic-bending-machine" class="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
        Hydraulic Bending Machine
      </li>
      <li data-target="tig-welding-machine" class="flex-1 px-4 py-4 border-b-4 border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue cursor-pointer transition-all duration-200 ease-in-out">
        TIG Welding Machine
      </li>
    </ul>
    <div class="max-w-screen-2xl px-5 pt-8 pb-8 mx-auto">
      <div id="lathe-machine" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO Lathe Machine"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">Lathe Machine</h2>
          <p class="text-gray-600">
            TIMCO's precision lathe machines are engineered for
            versatility and accuracy, handling a wide range of turning
            operations with ease. From shaping intricate components to
            performing heavy-duty cutting, our lathes deliver exceptional
            performance and reliability. Built with robust construction
            and advanced control systems, they ensure consistent results
            and minimize downtime, making them a valuable asset in any
            manufacturing environment.
          </p>
        </div>
      </div>
      <div id="shearing-machine" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO Shearing Machine"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">Shearing Machine</h2>
          <p class="text-gray-600">
            TIMCO's high-precision shearing machines are designed for clean and accurate cutting of metal sheets with minimal distortion. Engineered for durability and efficiency, they handle various thicknesses and materials effortlessly. With advanced blade technology and hydraulic systems, our shearing machines ensure smooth operation, reduced material waste, and consistent results—making them indispensable in metal fabrication and industrial workshops.
          </p>
        </div>
      </div>
      <div id="drill-press" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO Drill Press"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">Drill Press</h2>
          <p class="text-gray-600">
            TIMCO’s drill presses offer unmatched precision and stability, making them ideal for drilling accurate, repeatable holes in metal, wood, and other materials. Designed with rigid construction and variable speed controls, they provide smooth operation and superior performance for both light-duty and heavy-duty applications. Whether for industrial production or workshop use, our drill presses enhance efficiency while maintaining exceptional accuracy.
          </p>
        </div>
      </div>
      <div id="radial-drill" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO Radial Drill"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">Radial Drill</h2>
          <p class="text-gray-600">
            TIMCO’s radial drill machines bring flexibility and power to any machining operation, allowing for precise drilling across large workpieces. Built with a robust arm and adjustable head, they provide extended reach and effortless positioning, reducing setup time and improving productivity. With high torque and superior control, our radial drills excel in heavy-duty drilling applications, making them essential for fabrication and manufacturing industries.
          </p>
        </div>
      </div>
      <div id="milling-machine" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO Milling Machine"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">Milling Machine</h2>
          <p class="text-gray-600">
            TIMCO’s milling machines are built for precision, efficiency, and versatility, offering a wide range of cutting and shaping capabilities. From intricate detailing to heavy-duty material removal, our mills provide smooth operation and consistent performance. Featuring advanced control systems and durable components, they ensure optimal productivity while meeting the highest machining standards in both industrial and workshop settings.
          </p>
        </div>
      </div>
      <div id="hydraulic-bending-machine" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO Hydraulic Bending Machine"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">Hydraulic Bending Machine</h2>
          <p class="text-gray-600">
            TIMCO’s hydraulic bending machines deliver precision and power for forming metal sheets and plates with ease. Designed for smooth, accurate bends, they feature high-efficiency hydraulic systems that reduce effort while maintaining repeatability. With a sturdy frame and user-friendly controls, our bending machines optimize workflow, making them an essential tool for fabrication, construction, and industrial applications.
          </p>
        </div>
      </div>
      <div id="tig-welding-machine" class="machine-content grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
        <div>
          <img
            src="/images/mission.jpg"
            alt="TIMCO TIG Welding Machine"
            width="1920"
            height="1080"
            class="object-cover h-96 w-full rounded-2xl" />
        </div>
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">TIG Welding Machine</h2>
          <p class="text-gray-600">
            TIMCO’s TIG welding machines provide exceptional arc control and precision, ensuring high-quality welds on a variety of metals, including stainless steel and aluminum. Engineered for stability and efficiency, they deliver consistent performance with minimal spatter. Whether for fine-detail welding or heavy-duty fabrication, our TIG welders offer reliability and versatility, making them a trusted choice in industrial and workshop environments.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="px-5 py-16">
  <div class="max-w-screen-2xl mx-auto space-y-16">
    <div class="space-y-4">
      <h3 class="text-center text-timco-red font-bold text-lg">
        Featured Projects
      </h3>
      <h2 class="text-4xl font-bold text-center">Our Works</h2>
    </div>

    <div class="p-5">
      <div class="columns-2 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/50t-multi-point-bar-spreader.jpg"
          alt="" />
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/fabrication-15t-ram-rod.jpg"
          alt="" />
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/fabrication-inner-outer-cap-conveyor.jpg"
          alt="" />

        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/fabrication-roller-conveyor.jpg"
          alt="" />
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/fabrication-installation-overhead-water-tank.jpg"
          alt="" />
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/molasses-palm-oil-tank.jpg"
          alt="" />

        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/dust-collector.jpg"
          alt="" />
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/stainless-steel-filter-cage.jpg"
          alt="" />
        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/4k-stainless-steel-silo.jpg"
          alt="" />

        <img
          class="h-auto max-w-full rounded-lg"
          src="/images/projects/done/6ka-6kb-stainless-steel-silo.jpg"
          alt="" />
      </div>
    </div>

    <div class="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <a
        href="/projects"
        class="text-timco-red transition-all duration-300 ease-in-out flex items-center justify-center group-hover:text-timco-slate font-bold">
        See all projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="fill-timco-red group-hover:fill-timco-slate h-4 w-4 ms-2 transition-all duration-300 ease-in-out">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </a>
    </div>
  </div>
</section>

<section class="max-w-screen-2xl px-5 pt-16 pb-16 mx-auto space-y-16">
  <div class="grid xl:grid-cols-2 gap-16 xl:gap-16">
    <div class="flex flex-col items-center justify-center">
      <img
        src="/images/mission.jpg"
        alt="Test"
        width="1920"
        height="1080"
        class="object-fit rounded-2xl" />
    </div>
    <div class="space-y-8">
      <h2 class="text-5xl font-bold">Trusted by Industry Leaders</h2>
      <div class="flex flex-wrap items-center justify-center gap-8">
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/bsbs.png"
            width="1500"
            height="1500"
            alt="Big Smile Bread Station"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/ccp.png"
            width="1500"
            height="1500"
            alt="CCP"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/doxo.png"
            width="1500"
            height="1500"
            alt="Doxo"
            class="h-24 w-24" />
        </div>

        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/ekpi.png"
            width="1500"
            height="1500"
            alt="EKPI"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/gardenia.png"
            width="1500"
            height="1500"
            alt="Gardenia"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/hstc.png"
            width="1500"
            height="1500"
            alt="Herma Shipping and Transport Corporation"
            class="h-24 w-24" />
        </div>

        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/leslies.png"
            width="1500"
            height="1500"
            alt="Leslie's"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/mpi.png"
            width="1500"
            height="1500"
            alt="Mix Plant, Inc."
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/nutrimax.png"
            width="1500"
            height="1500"
            alt="Nutrimax"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/pfbp.png"
            width="1500"
            height="1500"
            alt="Philfoods Fresh-Baked Products, Inc."
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/pps.png"
            width="1500"
            height="1500"
            alt="PPS"
            class="h-24 w-24" />
        </div>
        <div class="bg-timco-white rounded-2xl">
          <img
            src="/images/clients/smdc.png"
            width="1500"
            height="1500"
            alt="Snow Mountain Dairy Corporation"
            class="h-24 w-24" />
        </div>
      </div>
      <p class="text-timco-content">
        At <strong>TIMCO</strong>, we are honored to work with a diverse
        range of clients who trust us for our expertise, reliability, and
        commitment to excellence. From small businesses to large-scale
        enterprises, our partnerships are built on a foundation of quality
        craftsmanship and outstanding service.
      </p>
      <p class="text-timco-content">
        Our clients come from various industries, including manufacturing,
        construction, and engineering, all benefiting from our
        cost-effective and innovative solutions. Explore our valued
        partners and see why companies continue to choose TIMCO as their
        trusted provider.
      </p>

      <div class="group hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center">
        <a
          href="/clients"
          class="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold">
          See our clients
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="fill-timco-red group-hover:fill-timco-slate h-4 w-4 ms-2 transition-all duration-300 ease-in-out">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16">
  <div class="mx-auto bg-timco-dark-blue grid lg:grid-cols-2">
    <div>
      <img
        src="/images/mission.jpg"
        alt="Test"
        width="1920"
        height="1080"
        class="object-fit" />
    </div>
    <div class="space-y-8 px-10 py-20 text-timco-white">
      <h2 class="text-4xl xl:text-6xl font-bold">
        Interested in learning more about products and solutions from
        TIMCO?
      </h2>
      <p class="text-xl">
        We offer a wide range of industrial machinery and metal
        fabrication solutions tailored to meet your specific needs. From
        standard equipment to custom designs, we have the expertise and
        capabilities to deliver exceptional results.
      </p>
      <p class="text-xl">
        Contact us today to explore our comprehensive product offerings
        and discover how we can contribute to your success.
      </p>
    </div>
  </div>
</section>

<section class="max-w-screen-2xl mx-auto xl:pt-16 pb-8 px-5 space-y-16">
  <div class="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
    <div class="flex items-center">
      <div class="space-y-8">
        <h2 class="text-5xl font-bold">Our Mission</h2>
        <p class="text-timco-content">
          TIMCO will exceed the customer’s expectations by providing
          reliable and cost-effective solutions through strong business
          associations, quality product solutions, dedicated employees,
          extraordinary service, and safe practices.
        </p>
      </div>
    </div>

    <div>
      <img
        src="/images/mission.jpg"
        alt="Test"
        width="1920"
        height="1080"
        class="object-fit rounded-2xl" />
    </div>
  </div>
  <div class="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
    <div>
      <img
        src="/images/mission.jpg"
        alt="Test"
        width="1920"
        height="1080"
        class="object-fit rounded-2xl" />
    </div>
    <div class="flex items-center">
      <div class="space-y-8">
        <h2 class="text-5xl font-bold">Our Vision</h2>
        <p class="text-timco-content">
          To be the preferred supplier of metal and steel fabrication
          solutions.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-16">
  <div class="mx-auto bg-timco-dark-blue grid lg:grid-cols-2">
    <div>
      <img
        src="/images/mission.jpg"
        alt="Test"
        width="1920"
        height="1080"
        class="object-fit" />
    </div>
    <div class="space-y-8 px-10 py-20 text-timco-white">
      <h2 class="text-4xl xl:text-6xl font-bold">
        Interested in learning more about products and solutions from
        TIMCO?
      </h2>
      <p class="text-xl">
        We offer a wide range of industrial machinery and metal
        fabrication solutions tailored to meet your specific needs. From
        standard equipment to custom designs, we have the expertise and
        capabilities to deliver exceptional results.
      </p>
      <p class="text-xl">
        Contact us today to explore our comprehensive product offerings
        and discover how we can contribute to your success.
      </p>
    </div>
  </div>
</section>

<section class="max-w-screen-2xl mx-auto space-y-16 py-10 p-8 md:p-20 rounded-2xl">
  <div class="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-16">
    <div>
      <img
        src="/images/mission.jpg"
        alt="Test"
        width="1920"
        height="1080"
        class="object-fit rounded-2xl" />
    </div>
    <div class="space-y-8">
      <h2 class="text-5xl font-bold">
        Interested in learning more about products and solutions from
        TIMCO?
      </h2>
      <p class="text-timco-content">
        We offer a wide range of industrial machinery and metal
        fabrication solutions tailored to meet your specific needs. From
        standard equipment to custom designs, we have the expertise and
        capabilities to deliver exceptional results.
      </p>
      <p class="text-timco-content">
        Contact us today to explore our comprehensive product offerings
        and discover how we can contribute to your success.
      </p>
      <div class="group hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <a
          href="/services"
          class="text-timco-red transition-all duration-300 ease-in-out flex items-center group-hover:text-timco-slate font-bold">
          Check our services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="fill-timco-red group-hover:fill-timco-slate h-4 w-4 ms-2 transition-all duration-300 ease-in-out">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>


@endsection