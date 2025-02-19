import React from 'react'
import { BsSearch } from "react-icons/bs";
export default function Search() {
  return (
    <div className='flex w-[60%] p-2 bg-red-500 m-5 cursor-pointer hover:bg-red-600 rounded-2xl items-center justify-center '>
      <BsSearch className='text-white text-2xl' />
    </div>
  )
}
