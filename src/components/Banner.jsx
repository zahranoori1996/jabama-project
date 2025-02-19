import React from 'react'
import DropDown from './DropDown'
import Search from './Search'
import { GrLocation } from "react-icons/gr";
import banner from "./../assets/img/banner.jpg"

import { BiHome } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
export default function Banner() {
  return (
    <div className='h-[90vh] bg-cover bg-no-repeat bg-center flex-col items-center flex bg-black' style={{backgroundImage:`url(${banner})`}}>
      <div className="flex flex-col">
        <h1 className='lg:text-6xl text-3xl lg:p-15 px-3 [text-shadow:_0px_1px_8px_#000000] p-5 '>
          <span className='font-semibold text-red-500'>مکان </span>
          <span className='text-white'>ایده آلت همین جاست</span>
        </h1>
        <p className='lg:text-lg lg:px-15 px-3 py-1 text-white'>اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران </p>
        <p className='lg:text-lg lg:px-15 px-3 py-1 font-semibold text-white'>سفر پاییزی از تو، جاباما</p>
      </div>
      <div className='flex flex-col lg:flex-row w-[1200px] h-[120px] backdrop-blur-lg my-12 rounded-2xl'>
        <DropDown icon={<GrLocation />} title=" (همه) مقاصد" staticTitle="انتخاب مقصد"  />
        <DropDown icon={<BiHome  />} title=" (همه) تمام خانه ها" staticTitle="نوع ملک خود را انتخاب کنید  "  />
        <DropDown icon={<GiTakeMyMoney  />} title=" قیمت (همه)" staticTitle=" فیلتر محدوده قیمت "/>
        
        <Search/>
      </div>
    </div>
  )
}
