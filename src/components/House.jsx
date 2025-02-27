import React from 'react';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";

export default function House({house}) {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg mt-10 mx-auto cursor-pointer
    hover:shadow-2xl transition h-[450px]'>
        <img className='mb-8' src={house.image} />
        <div className='bg-gray-700 rounded-full text-white px-3 py 1 inline-block mb-2 ml-1'>
            {house.type}
        </div>
        <div className='bg-red-500 rounded-full text-white px-3 py 1 inline-block mb-2'>
            {house.city}
        </div>
      <div className="text-lg font-semibold max-w-[260px] ">
        {house.address}
      </div>
      <div className="flex gap-x-4 my-4 ">
        <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full">
            <MdOutlineBed />
            </div>
            <div className="text-base">
                {house.bedrooms}
            </div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full">
            <TbBath />
            </div>
            <div className="text-base">
                {house.bathrooms}
            </div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full">
            <BiArea/>
            </div>
            <div className="text-base">
                {house.surface}
            </div>
        </div>
        <div className="text-lg font-semibold text-red-500 ">{house.price} تومان</div>
      </div>
    </div>
  )
}
