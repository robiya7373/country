import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import CountryTopComponents from "../components/Country";
import CountryBottomComponents from "../components/CountryCard";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Countries = () => {
  const [getAllProduct, setGetAllProduct] = useState([]);
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState([]);
  const [changeCategory, setChangeCategory] = useState("");

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(getAllProduct.map((country) => country.region)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    if (getAllProduct.length > 0) {
      listUniqueCategories();
    }
  }, [getAllProduct]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setGetAllProduct(data);
    };
    fetchData();
  }, []);

  const handleSearch = getAllProduct.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCountries = changeCategory
    ? handleSearch.filter((country) => country.region === changeCategory)
    : handleSearch;

  return (
    <div className="">
      <CountryTopComponents
        search={search}
        setSearch={setSearch}
        categories={categories}
        changeCategory={changeCategory}
        setChangeCategory={setChangeCategory}
      />
      <div className="h-[100vh] overflow-y-scroll divScroll">
        <CountryBottomComponents filteredCountries={filteredCountries} />
      </div>
    </div>
  );
};

export default Countries;
