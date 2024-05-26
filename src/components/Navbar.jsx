import React, { useContext } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "../context/Dark";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dark, handleDark } = useContext(ThemeContext);
  //   console.log(dark);
  return (
    <div className={`shadow-lg ${dark ? "bg-[#2b3743]" : "bg-white"}`}>
      <div className="lg:container mx-auto px-5 flex justify-between py-2  items-center">
        <Link
          to={"/"}
          className={`text-[20px] sm:text-[30px] font-bold ${
            dark ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          Where in the world?
        </Link>
        <div
          className={`${
            dark ? "text-[#fff]" : "#000"
          } flex items-center gap-3 cursor-pointer`}
          onClick={handleDark}
        >
          {dark ? <IoMoon /> : <IoMoonOutline />}
          <p className="font-semibold">Collor Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
