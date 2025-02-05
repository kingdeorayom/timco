import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D3546]">
      <div className="max-w-screen-xl px-5 mx-auto text-white py-10 space-y-8">
        <div className="space-y-5">
          <Image
            src={"/logo.svg"}
            width={720}
            height={1080}
            alt="Timco"
            className="w-40"
          />
          <div className="flex space-x-4">
            <div className="h-7 w-7 bg-white rounded-full"></div>
            <div className="h-7 w-7 bg-white rounded-full"></div>
            <div className="h-7 w-7 bg-white rounded-full"></div>
            <div className="h-7 w-7 bg-white rounded-full"></div>
            <div className="h-7 w-7 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="space-y-4 border-t pt-6">
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
          <h6 className="text-sm">
            © Copyright 2025 TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS
            CORPORATION
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
