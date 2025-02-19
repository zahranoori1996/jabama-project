import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-gray-900 p-5 text-2xl text-amber-50 text-center'>
      <h2 className='mb-5'>طراحی و اجرا توسط زهرا نوری سُرخَنی با عشق فراوان ❤️</h2>
      <Link className='text-red-500 text-3xl' target='_blank' to='http://www.zahranoori.ir/'>www.zahranoori.ir</Link>      
    </div>
  )
}
