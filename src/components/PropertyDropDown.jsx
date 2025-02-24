import React, { useContext, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { BiHome } from "react-icons/bi";

export default function PropertyDropDown(props) {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Menu as="div" className="dropdown relative m-5">
        <MenuButton
          className="dropdown-btn w-full flex justify-between h-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiHome  className="text-red-500 text-2xl" />
          <div className="text-white text-right">
            <div className="text-[15px] font-medium leading-tight ">{property}</div>
            <div className="text-[12px] ">نوع ملک را انتخاب کنید</div>
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
          این مپ و پراپرتیز برای وقتیکه که روی دراپ دان کلیک میشه
          و اون پراپرتیز رو انتخاب میکنه روی نوع خانه ها مپ زدیم
           که کابر هرکدوم رو انتخاب کرد اون نوع خانه انتخاب بشه
          */
           properties.map((property, index) => {
              return (
                <MenuItem
                  key={index}
                  as="li"
                  onClick={() => setProperty(property)}
                  className="cursor-pointer rounded-full p-2 hover:bg-red-500 transition text-white"
                >
                  {property}
                </MenuItem>
              );
            })
          }
        </MenuItems>
      </Menu>
    );
}
