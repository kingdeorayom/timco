import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#1D3546] py-5 sticky top-0 z-50">
      <div className="max-w-screen-xl px-5 mx-auto flex justify-between text-white">
        <Image
          src={"/logo.svg"}
          width={720}
          height={1080}
          alt="Timco"
          className="w-40"
        />
        <nav>
          <ul className="flex space-x-6 font-semibold">
            <li>Services</li>
            <li>Projects</li>
            <li>Partners</li>
            <li>Company</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
