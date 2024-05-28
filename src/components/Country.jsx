import { Search } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../context/Dark";

const Country = ({
  search,
  setSearch,
  categories,
  changeCategory,
  setChangeCategory,
}) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="flex justify-between gap-3 items-center py-5">
      <div
        className={`flex items-center gap-2 rounded  md:w-[30%] px-4 py-5 shadow-md ${
          dark ? "bg-[#2b3743] text-[#fff]" : "bg-white"
        }`}
      >
        <Search />
        <input
          placeholder="Search for country..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-0 border-[0] bg-transparent w-full"
        />
      </div>
      <div className="">
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: dark ? "#fff" : "#000",
              },
              "&:hover fieldset": {
                borderColor: "#333",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#333",
              },
            },
          }}
        >
          <InputLabel
            className=" border-none outline-none"
            id="region-select-label"
            sx={{
              color: dark ? "white" : "black",
            }}
          >
            Region
          </InputLabel>
          <Select
            labelId="region-select-label"
            id="region-select"
            className={`shadow-lg ${
              dark ? "bg-[#2b3743] text-[#fff]" : "bg-[#fff]"
            }`}
            value={changeCategory}
            onChange={(e) => setChangeCategory(e.target.value)}
            autoWidth
            label="Region"
            sx={{
              color: dark ? "#fff" : "#000",
              "& .MuiSvgIcon-root": {
                color: dark ? "#fff" : "#000",
              },
              "& .MuiSelect-icon": {
                color: dark ? "#fff" : "#000",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: dark ? "#2b3743" : "#fff",
                  "& .MuiMenuItem-root": {
                    color: dark ? "#fff" : "#000",
                  },
                  "& .MuiMenuItem-root:hover": {
                    bgcolor: dark ? "#eee" : "#f5f5f5",
                    color: "#333",
                  },
                  "& .MuiMenuItem-root.Mui-selected": {
                    bgcolor: dark ? "#eee" : "#e0e0e0",
                    color: "#333",
                  },
                  "& .MuiMenuItem-root.Mui-selected:hover": {
                    bgcolor: dark ? "#eee" : "#d5d5d5",
                    color: "#333",
                  },
                },
              },
            }}
          >
            <MenuItem value="">
              <p>All Regions</p>
            </MenuItem>
            {categories.map((item) => (
              <MenuItem
                key={item}
                value={item}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: dark ? "#1a1f26" : "#e0e0e0",
                    color: "#333",
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: dark ? "#eee" : "#eee",
                    color: "#333",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Country;
