import React from "react";

import { BiArea } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { housesData } from "../data";

export default function HomeDetails() {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  return (
    <div className="container mx-auto grid grid-cols-12 max-md:flex max-md:flex-col max-md:px-2">
      <div className="col-span-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-black font-semibold">{property.name}</h1>
            <h3 className="text-black">{property.address} </h3>
          </div>
          <div className="flex gap-1">
            <span className="bg-gray-600 px-2 py-1 text-white rounded-3xl">
              {property.type}
            </span>
            <span className="bg-red-500 px-2 py-1 text-white rounded-3xl">
              {property.city}
            </span>
          </div>
        </div>

        <img className="rounded my-2" src={property.imageLg} />

        <div className="flex gap-x-4 my-4 ">
          <div className="flex items-center text-red-500 gap-1">
            <div className="text-[20px] rounded-full">
              <MdOutlineBed />
            </div>
            <div className="text-base">{property.bedrooms}</div>
          </div>
          <div className="flex items-center text-red-500 gap-1">
            <div className="text-[20px] rounded-full">
              <TbBath />
            </div>
            <div className="text-base">{property.bathrooms}</div>
          </div>
          <div className="flex items-center text-red-500 gap-1">
            <div className="text-[20px] rounded-full">
              <BiArea />
            </div>
            <div className="text-base">{property.surface}</div>
          </div>
        </div>

        <p className="paragraph">{property.description}</p>
      </div>

      <div className="col-span-4 text-left">
        <div className="font-semibold text-red-500 py-3">
          {property.price} تومان
        </div>
        <form
          action=""
          className="p-4 shadow bg-white mr-4 rounded-sm flex flex-col gap-3"
        >
          <img className="w-16 rounded-full mb-3" src={property.agent.image} />
          <input
            type="text"
            placeholder="نام کامل*"
            className="border p-2 rounded-sm"
          />
          <input
            type="text"
            placeholder="ایمیل*"
            className="border p-2 rounded-sm"
          />
          <input
            type="text"
            placeholder="شماره همراه*"
            className="border p-2 rounded-sm"
          />
          <textarea
            placeholder="یک پیام برای مالک بفرستید"
            className="border p-2 rounded-sm h-[120px] resize-none"
          ></textarea>
          <div className="flex gap-2">
            <button className="w-full bg-red-500 rounded-sm py-2 text-sm text-white">
              ارسال پیام
            </button>
            <button className="w-full bg-white border-red-500 border-2 rounded-sm py-2 text-sm text-red-500">
              {" "}
              تماس
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
