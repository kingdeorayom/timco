<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title', 'TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION')</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet">
  @vite('resources/css/app.css')
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="MyWebSite" />
  <link rel="manifest" href="/site.webmanifest" />

  <!-- Primary Meta Tags -->
  <meta name="title" content="TIMCO - TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION" />
  <meta name="description" content="Your single source for industrial machinery, controls, metal fabrication, and engineering services" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="TIMCO - TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION" />
  <meta property="og:description" content="Your single source for industrial machinery, controls, metal fabrication, and engineering services" />
  <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="TIMCO - TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION" />
  <meta property="twitter:description" content="Your single source for industrial machinery, controls, metal fabrication, and engineering services" />
  <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

</head>

<body class="antialiased min-h-screen flex flex-col">
  <header class="sticky top-0 z-50">
    <div class="bg-timco-white py-6">
      <div class="max-w-screen-2xl px-5 mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-8">
          <a href="/" class="hover:opacity-90">
            <div class="bg-timco-white px-1 rounded-sm">
              <img src="/images/timco.png" width="720" height="1080" alt="Timco"
                class="w-36 md:w-40" />
            </div>
          </a>
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li>
                <a href="/services" aria-label="Go to Services page"
                  class="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" aria-label="Go to Projects page"
                  class="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2">
                  Projects
                </a>
              </li>
              <li>
                <a href="/clients" aria-label="Go to Clients page"
                  class="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2">
                  Clients
                </a>
              </li>
              <li>
                <a href="/about" aria-label="Go to About page"
                  class="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2">
                  Company
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="hidden md:flex">
          <a href="/about#contact-us"
            class="hover:bg-timco-dark-blue bg-timco-white border-2 border-timco-slate hover:border-timco-dark-blue hover:text-timco-white text-timco-slate font-bold px-4 rounded-md transition-all duration-300 ease-in-out flex items-center h-10">
            Contact Us
          </a>
        </div>

        <div id="menuToggleButton"
          class="flex md:hidden cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-timco-dark-blue h-7 w-7">
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>

        <div id="mobileMenu"
          class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200 opacity-0 invisible">
          <div class="fixed inset-0 w-full h-full bg-timco-white shadow-lg p-5 transition-all
                    duration-300 ease-in-out transform">
            <div class="flex items-center justify-between mt-1">
              <a href="/" class="hover:opacity-90">
                <div class="bg-timco-white px-1 rounded-sm">
                  <img src="/images/timco.png" width="720" height="1080" alt="Timco"
                    class="w-36 md:w-40" />
                </div>
              </a>
              <button id="closeMenuButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                  class="hover:fill-timco-dark-blue h-7 w-7 fill-gray-600 transition-all duration-300 ease-in-out">
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>
            <nav class="mt-10">
              <ul class="flex flex-col space-y-7 text-lg text-gray-700">
                <li>
                  <a href="/services"
                    class="group transition-all duration-100 ease-in-out text-timco-content hover:font-bold hover:text-timco-dark-blue flex items-center justify-between text-xl">
                    Services
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                      class="h-4 w-4 fill-gray-600 group-hover:fill-timco-dark-blue">
                      <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/projects"
                    class="group transition-all duration-100 ease-in-out text-timco-content hover:font-bold hover:text-timco-dark-blue flex items-center justify-between text-xl">
                    Projects
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                      class="h-4 w-4 fill-gray-600 group-hover:fill-timco-dark-blue">
                      <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/clients"
                    class="group transition-all duration-100 ease-in-out text-timco-content hover:font-bold hover:text-timco-dark-blue flex items-center justify-between text-xl">
                    Clients
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                      class="h-4 w-4 fill-gray-600 group-hover:fill-timco-dark-blue">
                      <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/about"
                    class="group transition-all duration-100 ease-in-out text-timco-content hover:font-bold hover:text-timco-dark-blue flex items-center justify-between text-xl">
                    Company
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                      class="h-4 w-4 fill-gray-600 group-hover:fill-timco-dark-blue">
                      <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </a>
                </li>
                <li class="pt-4">
                  <a href="/about#contact-us"
                    class="block bg-timco-dark-blue text-timco-white px-4 py-2 rounded-md text-center hover:bg-timco-white border-2 border-timco-dark-blue transition-all duration-300 ease-in-out hover:text-timco-dark-blue font-semibold">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="flex-grow">
    @yield('content')
  </main>
  <footer class="bg-timco-white">
    <div class="max-w-screen-2xl px-5 mx-auto text-timco-content py-12 xl:py-16 space-y-8">
      <div class="grid lg:grid-cols-12 pb-8">
        <div class="flex flex-col gap-8 col-span-3">
          <a href="/" class="hover:opacity-90">
            <div class="bg-timco-white rounded-sm">
              <img src="/images/timco.png" width="720" height="1080" alt="Timco"
                class="w-36 md:w-40" />
            </div>
          </a>
          <div class="flex space-x-6">
            <a href="https://www.facebook.com/timco.corp" target="_blank"
              class="transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                class="h-7 w-7 fill-timco-slate hover:fill-timco-dark-blue">
                <path
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/timco.corp" target="_blank"
              class="transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                class="h-7 w-7 fill-timco-slate hover:fill-timco-dark-blue">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@timcocorp" target="_blank"
              class="transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                class="h-7 w-7 fill-timco-slate hover:fill-timco-dark-blue">
                <path
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </a>
            <a href="https://www.x.com/timco.corp" target="_blank"
              class="transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                class="h-7 w-7 fill-timco-slate hover:fill-timco-dark-blue">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>

          <div>
            <p>
              Your single source for industrial machinery, controls, metal
              fabrication, and engineering services.
            </p>
          </div>
        </div>
        <div class="col-span-9 lg:px-12 pt-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="space-y-4">
              <h4 class="font-semibold text-lg text-timco-slate">
                Services
              </h4>
              <div class="flex flex-col space-y-3">
                <a href="/services#fabrication"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Fabrication
                </a>
                <a href="/services#installation"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Installation
                </a>
                <a href="/services#designing"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Designing
                </a>
              </div>
            </div>

            <div class="space-y-4">
              <h4 class="font-semibold text-lg text-timco-slate">
                Projects
              </h4>
              <div class="flex flex-col space-y-3">
                <a href="/projects"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Project Gallery
                </a>
                <a href="/projects#completed"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Completed Projects
                </a>
              </div>
            </div>

            <div class="space-y-4">
              <h4 class="font-semibold text-lg text-timco-slate">
                About TIMCO
              </h4>
              <div class="flex flex-col space-y-3">
                <a href="/about"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  About Us
                </a>
                <a href="/about#company-history"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Company History
                </a>
                <a href="/about#meet-the-team"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Meet the Team
                </a>
                <a href="/about#mission-vision"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Mission and Vision
                </a>
              </div>
            </div>

            <div class="space-y-4">
              <h4 class="font-semibold text-lg text-timco-slate">
                Contact Us
              </h4>
              <div class="flex flex-col space-y-3">
                <a href="/about#business-address"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Business Address
                </a>
                <a href="/about#landline-number"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Landline Number
                </a>
                <a href="/about#mobile-numbers"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Mobile Numbers
                </a>
                <a href="/about#email-address"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Email Address
                </a>
                <a href="/about#social-media"
                  class="hover:text-timco-slate transition-all duration-300 ease-in-out">
                  Social Media
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex xl:flex-row flex-col xl:items-center xl:justify-between md:pt-4 space-y-8 xl:space-y-0">
        <h6 class="text-sm">
          &copy; Copyright 2025 TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS
          CORPORATION
        </h6>
        <nav>
          <ul class="flex space-x-6 font-semibold">
            <li>
              <a href="/accessibility" aria-label="Go to Services page"
                class="hover:text-timco-slate transition-all duration-300 ease-in-out text-sm sm:text-base">
                Accessibility
              </a>
            </li>
            <li>
              <a href="/terms-of-use" aria-label="Go to Services page"
                class="hover:text-timco-slate transition-all duration-300 ease-in-out text-sm sm:text-base">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/privacy-policy" aria-label="Go to Services page"
                class="hover:text-timco-slate transition-all duration-300 ease-in-out text-sm sm:text-base">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
  @vite('resources/js/app.js')
</body>

</html>