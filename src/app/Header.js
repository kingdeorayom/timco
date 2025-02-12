import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* <div className="bg-timco-orange">
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div> */}
      <div className="bg-white py-6">
        <div className="max-w-screen-2xl px-5 mx-auto flex justify-between text-white">
          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:opacity-90">
              <div className="bg-white px-1 rounded-sm">
                <Image
                  src={"/timco.png"}
                  width={720}
                  height={1080}
                  alt="Timco"
                  className="w-40"
                />
              </div>
            </Link>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/services"
                    aria-label="Go to Services page"
                    className="transition-all duration-100 ease-in-out text-[#575757] hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    aria-label="Go to Projects page"
                    className="transition-all duration-100 ease-in-out text-[#575757] hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clients"
                    aria-label="Go to Clients page"
                    className="transition-all duration-100 ease-in-out text-[#575757] hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    aria-label="Go to About page"
                    className="transition-all duration-100 ease-in-out text-[#575757] hover:border-b-4 hover:border-b-timco-blue hover:pb-2"
                  >
                    Company
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/about#contact-us"
              className="hover:bg-timco-blue bg-white border-2 border-timco-slate hover:border-timco-blue hover:text-white text-timco-slate font-bold px-4 rounded-full transition-all duration-300 ease-in-out flex items-center h-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
