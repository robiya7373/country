import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { numberWithCommas } from "./Countries";
import { ThemeContext } from "../context/Dark";
import { motion } from "framer-motion";

const CountryApi = () => {
  const { dark } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const { name } = useParams();
  const [getAllProduct, setGetAllProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setGetAllProduct(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const foundData = getAllProduct.find((item) => item.name.common === name);
    setData(foundData);
  }, [getAllProduct, name]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const nativeNames = data.name.nativeName
    ? Object.values(data.name.nativeName)
        .map((n) => n.common)
        .join(", ")
    : "N/A";

  const currencies = data.currencies
    ? Object.values(data.currencies)
        .map((n) => n.name)
        .join(", ")
    : "N/A";

  const languages = data.languages
    ? Object.values(data.languages).join(", ")
    : "N/A";

  const topLevelDomain = data.tld ? data.tld[0] : "N/A";

  console.log(data);
  const border = data.borders
    ? data.borders.map((item) => (
        <p className="px-[20px] py-1 border rounded text-[13px] sm:text-[18px]">
          {item}
        </p>
      ))
    : "N/A";
  return (
    <div className="h-screen w-full ">
      <div className="mt-[30px] sm:mt-[40px] ">
        <Link
          to={"/"}
          className={` bg-white font-semibold p-3 text-[15px] sm:text-[18px] outline-none border-none ${
            dark ? " text-[#fff]" : "text-[#000]"
          } `}
        >
          Back
        </Link>
      </div>
      <motion.div
        className=" lg:h-[80%] flex justify-center overscroll-y-auto items-center"
        whileInView={{ translateX: ["20px", 0], opacity: [0.3, 1] }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[40px] lg:gap-[100px]   2xl:gap-[200px]  items-center">
          <motion.img
            whileInView={{ scale: [0.9, 1], opacity: [0.3, 1] }}
            transition={{ duration: 0.7 }}
            src={data.flags.png}
            alt={`${data.name.common}`}
            className="shadow-lg w-[100%] h-full mt-[30px] max-h-[180px]  sm:max-h-[400px]"
          />
          <div className={`${dark ? "text-[#fff]" : "text-[#000]"}`}>
            <h1 className="font-bold text-[20px] sm:text-[32px]">
              {data.name.common}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-[5rem] mt-[10px] sm:mt-[20px] 2xl:mt-10">
              <div className="">
                <h3 className="text-[15px] sm:text-[18px]  pt-1 sm:pt-2 ">
                  <span className="font-semibold"> Native name:</span>{" "}
                  {nativeNames}
                </h3>
                <h3 className="pt-1 sm:pt-2">
                  <span className="font-semibold  ">Population:</span>{" "}
                  {numberWithCommas(data.population)}
                </h3>
                <h3 className="text-[15px] pt-1 sm:pt-2 sm:text-[18px]">
                  <span className="font-semibold"> Region:</span> {data.region}
                </h3>
                <h3 className="text-[15px] pt-1 sm:pt-2 sm:text-[18px] ">
                  <span className="font-semibold"> Sub Region:</span>{" "}
                  {data.subregion}
                </h3>
                <h3 className="text-[15px] pt-1 sm:pt-2 sm:text-[18px]">
                  {" "}
                  <span className="font-semibold">Capital:</span> {data.capital}
                </h3>
              </div>
              <div className="">
                <h3 className="text-[15px] pt-1 sm:pt-2 sm:text-[18px]">
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {topLevelDomain}
                </h3>
                <h3 className="text-[15px] pt-1 sm:pt-2 sm:text-[18px] ">
                  <span className="font-semibold">Currencies:</span>{" "}
                  {currencies}
                </h3>
                <h3 className="text-[15px] pt-1 sm:pt-2 sm:text-[18px]">
                  <span className="font-semibold">Languages:</span> {languages}
                </h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2  sm:gap-2 items-center mt-[10px] sm:mt-[40px] 2xl:mt-20">
              <h3 className="font-semibold text-[15px] sm:text-[18px]">
                Border Countries:
              </h3>
              <div className="flex flex-wrap gap-3">{border}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CountryApi;
