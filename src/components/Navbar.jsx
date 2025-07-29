import React, { useState } from "react";
import HambugerMenu from "../../public/img/hamburger-menu.svg";
import Tickitz from "../../public/img/Tickitz-navbar.svg";

// import { Link } from "react-router"; // Baris ini dihapus
// import { Link } from "react-router-dom"; // Baris ini juga dihapus jika ada

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="flex flex-col items-center py-[22px] px-[10%] border-b border-solid border-[#e8e8e8] md:items-center md:justify-between md:flex-row md:px-[5%] lg:px-[10%]">
        {/* Logo dan Hamburger Menu */}
        <div className="md:w-auto w-full flex items-center justify-between">
          <img src={Tickitz} alt="Tickitz Logo" />
          <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
            <img src={HambugerMenu} alt="Menu" className="md:hidden" />
          </button>
        </div>
        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:items-center md:gap-6 flex-col md:flex-row `}
        >
          <a
            href="/"
            className="text-gray-800 font-medium hover:text-[#1d4ed8] transition duration-300 py-2 lg:py-0"
          >
            Home
          </a>
          <a
            href="/movie/Home2"
            className="text-gray-800 font-medium hover:text-[#1d4ed8] transition duration-300 py-2 lg:py-0"
          >
            Movie
          </a>
          <a
            href="/details"
            className="text-gray-800 font-medium hover:text-[#1d4ed8] transition duration-300 py-2 lg:py-0"
          >
            Buy Ticket
          </a>
        </div>
        {/* Navbar Buttons */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:items-center md:gap-4 flex-col md:flex-row gap-4 w-full md:w-auto`}
        >
          <a
            href="/auth/signin"
            className="bg-[#ffffff] text-[#1d4ed8] border border-solid border-[#1d4ed8] rounded-[6px] flex items-center justify-center w-full transition-all duration-200 ease-linear md:w-[86px] h-[48px] lg:w-auto lg:px-4 hover:bg-[#1d4ed8] hover:text-white"
          >
            Sign In
          </a>

          <a
            href="/auth/signup"
            className="bg-[#1d4ed8] text-[#ffffff] border border-solid border-[#1d4ed8] rounded-[6px] flex items-center justify-center w-full transition-all duration-200 ease-linear md:w-[86px] h-[48px] lg:w-auto lg:px-4 hover:bg-white hover:text-[#1d4ed8]"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
