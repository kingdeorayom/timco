import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D3546]">
      <div className="max-w-screen-2xl px-5 mx-auto text-white py-12 space-y-8">
        <div className="grid lg:grid-cols-12 gap-8 border-b">
          <div className="space-y-8 col-span-2">
            <Link href="/" className="hover:opacity-90">
              <div className="bg-white px-1 rounded-sm w-fit">
                <Image
                  src={"/timco.png"}
                  width={720}
                  height={1080}
                  alt="Timco"
                  className="w-36"
                />
              </div>
            </Link>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/timco.corp"
                target="_blank"
                className="hover:opacity-75 transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-7 w-7 fill-white"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/timco.corp"
                target="_blank"
                className="hover:opacity-75 transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-7 w-7 fill-white"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@timcocorp"
                target="_blank"
                className="hover:opacity-75 transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-7 w-7 fill-white"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </Link>
              <Link
                href="https://www.x.com/timco.corp"
                target="_blank"
                className="hover:opacity-75 transition-all duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-7 w-7 fill-white"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </Link>
            </div>
            <div>
              <div className="rounded-full h-10 border-2"></div>
            </div>
          </div>
          <div className="col-span-10 lg:border-l lg:px-12 pb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Services</h4>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Company History
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Mission and Vision
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Projects</h4>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Company History
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Mission and Vision
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">
                  About TIMCO
                </h4>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Company History
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Mission and Vision
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Contact Us</h4>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Company History
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Mission and Vision
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <nav>
            <ul className="flex space-x-6 font-semibold">
              <li>
                <Link
                  href="/accessibility"
                  aria-label="Go to Services page"
                  className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  aria-label="Go to Services page"
                  className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  aria-label="Go to Services page"
                  className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
          <h6 className="text-sm">
            &copy; Copyright 2025 TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS
            CORPORATION
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
