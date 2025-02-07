import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* <div className="bg-[#1D3546]">
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div> */}
      <div className="bg-[#1D3546] py-3">
        <div className="max-w-screen-2xl px-5 mx-auto flex justify-between text-white">
          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:opacity-90">
              <div className="bg-white px-1 rounded-sm">
                <Image
                  src={"/timco.png"}
                  width={720}
                  height={1080}
                  alt="Timco"
                  className="w-36"
                />
              </div>
            </Link>
            <nav>
              <ul className="flex space-x-6 font-semibold">
                <li>
                  <Link
                    href="/services"
                    aria-label="Go to Services page"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    aria-label="Go to Projects page"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clients"
                    aria-label="Go to Clients page"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    aria-label="Go to About page"
                    className="hover:text-[#ff7920] transition-all duration-300 ease-in-out"
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
              className="bg-[#ff7920] hover:bg-white border border-[#1d3456] text-white hover:text-[#1d3456] font-bold px-4 rounded-full transition-all duration-300 ease-in-out flex items-center h-10"
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
