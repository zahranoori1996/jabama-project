import React, { useContext, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { FaRegMoneyBillAlt } from "react-icons/fa";



export default function PriceDropDown() {
  const {price,setPrice} = useContext(HouseContext);
  const [isOpen , setIsOpen] = useState(false)
 const prices = [
  {
    value: 'قیمت (همه)'
  },
  {
    value: '100000 - 130000'
  },
  {
    value: '130000 - 160000'
  },
  {
    value: '160000 - 190000'
  },
  {
    value: '190000 - 220000'
  }
 ]
 return (
  <Menu as="div" className="dropdown relative m-5">
    <MenuButton
      className="dropdown-btn w-full flex justify-between "
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaRegMoneyBillAlt className="text-red-500 text-2xl" />
      <div className="text-white text-right">
        <div className="text-[15px] font-medium leading-tight ">{price}</div>
        <div className="text-[12px] "> فیلتر محدود قیمت</div>
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
      این مپ و پرایسز برای وقتیکه که روی دراپ دان کلیک میشه
      و اونو پرایسز رو انتخاب میکنه روی محدوده قیمت مپ زدیم
       که کابر هرکدوم رو انتخاب کرد اون حدود قیمت انتخاب بشه
      */
       prices.map((price, index) => {
          return (
            <MenuItem
              key={index}
              as="li"
              onClick={() => setPrice(price.value)}
              className="cursor-pointer rounded-full p-2 hover:bg-red-500 transition text-white"
            >
               {price.value} تومان
            </MenuItem>
          );
        })
      }
    </MenuItems>
  </Menu>
);
}
