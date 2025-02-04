import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#1D3546] py-5 sticky top-0 z-50">
      <div className="max-w-screen-xl px-5 mx-auto flex justify-between text-white">
        <div className="flex items-center space-x-10">
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
                <Link href="/services" aria-label="Go to Services page">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" aria-label="Go to Services page">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/clients" aria-label="Go to Services page">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/about" aria-label="Go to Services page">
                  Company
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="bg-[#ff7920] text-white font-bold py-2 px-4 rounded-full">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
