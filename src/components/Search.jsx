import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { HouseContext } from './HouseContext';
import CityDropDown from './CityDropDown';
import PropertyDropDown from './PropertyDropDown';
import PriceDropDown from './PriceDropDown';

export default function Search() {
  const {handleClick } = useContext(HouseContext)
  return (
    <div className='flex w-[100%]  cursor-pointer items-center justify-center '
    
    >
        <CityDropDown   />
        <PropertyDropDown />
        <PriceDropDown/>
      <BsSearch className='text-white bg-red-500 m-5 hover:bg-red-600 rounded-2xl w-full dropdown-btn ' />
    </div>
  )
}
