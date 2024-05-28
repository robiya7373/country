import React, { useContext } from "react";
import Countries from "./pages/Countries";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./pages/CountryApi";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/Dark";

const App = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`${
        dark ? "bg-[#74dff8]" : "bg-[#ea84f6]"
      } h-[100vh] overflow-hidden`}
    >
      <Navbar />
      <div className="lg:container px-5 mx-auto">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          <Route path="/*" element={<p> not page</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
