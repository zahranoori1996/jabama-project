import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { HouseContext } from './HouseContext';
import CityDropDown from './CityDropDown';
import PropertyDropDown from './PropertyDropDown';
import PriceDropDown from './PriceDropDown';

export default function Search() {
  const {handleClick } = useContext(HouseContext)
  return (
    <>
        <CityDropDown   />
        <PropertyDropDown />
        <PriceDropDown/>
        <button className='w-full'
         onClick={() => {
          handleClick();
        }}>

      <BsSearch  className='text-white bg-red-500 m-5 hover:bg-red-600 rounded-2xl w-[75%] dropdown-btn p-4' />
        </button>
    </>
  )
}
