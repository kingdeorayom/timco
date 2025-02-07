import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#1D3546] py-4 sticky top-0 z-50">
      <div className="max-w-screen-2xl px-5 mx-auto flex justify-between text-white">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              width={720}
              height={1080}
              alt="Timco"
              className="w-40"
            />
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
        <button className="bg-[#ff7920] hover:bg-white border border-[#1d3456] text-white hover:text-[#1d3456] font-bold py-1 px-4 rounded-full transition-all duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
