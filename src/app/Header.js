"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-timco-white py-6">
        <div className="max-w-screen-2xl px-5 mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="/" className="hover:opacity-90">
              <div className="bg-timco-white px-1 rounded-sm">
                <img
                  src={"/timco.png"}
                  width={720}
                  height={1080}
                  alt="Timco"
                  className="w-36 md:w-40"
                />
              </div>
            </a>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="/services"
                    aria-label="Go to Services page"
                    className="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    aria-label="Go to Projects page"
                    className="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/clients"
                    aria-label="Go to Clients page"
                    className="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    aria-label="Go to About page"
                    className="transition-all duration-100 ease-in-out text-timco-content hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Company
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex">
            <a
              href="/about#contact-us"
              className="hover:bg-timco-dark-blue bg-timco-white border-2 border-timco-slate hover:border-timco-dark-blue hover:text-timco-white text-timco-slate font-bold px-4 rounded-md transition-all duration-300 ease-in-out flex items-center h-10"
            >
              Contact Us
            </a>
          </div>

          <div
            className="flex md:hidden cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-timco-dark-blue h-7 w-7"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>

          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className={`fixed inset-0 w-full h-full bg-timco-white shadow-lg p-5 transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mt-1">
                <a href="/" className="hover:opacity-90">
                  <div className="bg-timco-white px-1 rounded-sm">
                    <img
                      src={"/timco.png"}
                      width={720}
                      height={1080}
                      alt="Timco"
                      className="w-36 md:w-40"
                    />
                  </div>
                </a>
                <button onClick={() => setIsMenuOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="hover:fill-timco-dark-blue h-7 w-7 fill-gray-600 transition-all duration-300 ease-in-out"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </button>
              </div>

              <nav className="mt-10">
                <ul className="flex flex-col space-y-7 text-lg text-gray-700">
                  {["services", "projects", "clients", "about"].map((item) => (
                    <li key={item}>
                      <a
                        href={`/${item}`}
                        className="group transition-all duration-100 ease-in-out text-timco-content hover:font-bold hover:text-timco-dark-blue flex items-center justify-between text-xl"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {/* <span className="border-b-4 border-b-white hover:border-b-timco-blue "> */}
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                        {/* </span> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="h-4 w-4 fill-gray-600 group-hover:fill-timco-dark-blue"
                        >
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                      </a>
                    </li>
                  ))}
                  <li className="pt-4">
                    <a
                      href="/about#contact-us"
                      className="block bg-timco-dark-blue text-timco-white px-4 py-2 rounded-md text-center hover:bg-timco-white border-2 border-timco-dark-blue transition-all duration-300 ease-in-out hover:text-timco-dark-blue font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
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
  );
};

export default Header;
