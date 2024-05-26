import React, { useContext } from "react";
import { numberWithCommas } from "../pages/Countries";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Dark";
import { motion } from "framer-motion";
import { duration } from "@mui/material";
const CountryCard = ({ filteredCountries }) => {
  const navigate = useNavigate();
  const { dark } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-4 gap-10">
      {filteredCountries.map((item) => (
        <div
          key={item.cca3}
          className={`${
            dark ? "bg-[#2b3743]" : "bg-white"
          }  cursor-pointer shadow-lg hover:scale-105 transition duration-500 rounded-lg overflow-hidden`}
          onClick={() => navigate(`/country/${item.name.common}`)}
        >
          <motion.img
            whileInView={{ scale: [0.9, 1], opacity: [0.3, 1] }}
            transition={{ duration: 0.7 }}
            src={item.flags.png}
            className="w-[300px]  h-[170px] m-auto mt-4 rounded-lg  "
            alt=""
          />
          <div className={`p-5 ${dark ? "text-[#fff]" : "text-[#000]"}`}>
            <motion.h2
              whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="font-bold mb-3"
            >
              {item.name.common}
            </motion.h2>
            <motion.p
              whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-semibold">Population:</span>{" "}
              {numberWithCommas(item.population)}
            </motion.p>
            <motion.p
              whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-semibold">Region:</span> {item.region}
            </motion.p>{" "}
            <motion.p
              whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-semibold">Capital:</span> {item.capital}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
