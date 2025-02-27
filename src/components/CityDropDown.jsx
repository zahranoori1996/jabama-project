import React, { useContext, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

export default function CityDropDown() {
  const { city, setCity, cities } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative m-5">
      <MenuButton
        className="dropdown-btn w-full flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GrLocation className="text-red-500 text-2xl" />
        <div className="text-white text-right">
          <div className="text-[15px] font-medium leading-tight ">{city}</div>
          <div className="text-[12px] ">انتخاب مقصد</div>
        </div>
        {isOpen ? (
          <IoIosArrowUp className="text-red-500 text-2xl" />
        ) : (
          <IoIosArrowDown className="text-red-500 text-2xl" />
        )}
      </MenuButton>
      <MenuItems className="dropdown-menu">
        {
        /*
        این مپ و سیتی برای وقتیکه که روی دراپ دان کلیک میشه
        و اون سیتی رو انتخاب میکنه روی شهرها مپ زدیم
         که کابر هرکدوم رو انتخاب کرد اون شهر انتخاب بشه
        */
          cities.map((city, index) => {
            return (
              <MenuItem
                key={index}
                as="li"
                onClick={() => setCity(city)}
                className="cursor-pointer rounded-full p-2 hover:bg-red-500 transition text-white"
              >
                {city}
              </MenuItem>
            );
          })
        }
      </MenuItems>
    </Menu>
  );
}
