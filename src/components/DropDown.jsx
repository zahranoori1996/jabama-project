import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export default function DropDown(props) {
    const [arrowIcon,setArrowIcon] = useState(<IoIosArrowDown/>)
function changeIcon(){
    setArrowIcon(<IoIosArrowDown/> ? <IoIosArrowUp /> : <IoIosArrowDown/>)
    
}
  return (
    <div onClick={changeIcon} className='flex items-center justify-around w-full p-2 border-2 m-5 cursor-pointer border-amber-50 rounded-2xl '>
      <span className='text-red-500 text-3xl'>{props.icon}</span>
      <div className='text-white'>
        <h4>{props.title}</h4>
        <h4>{props.staticTitle}</h4>
      </div>
      <span className='text-red-500 text-2xl' >
      {arrowIcon}
      </span>
    </div>
  )
}
