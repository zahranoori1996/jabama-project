import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import House from "./House";

export default function HouseList() {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner9 className="mx-auto animate-spin text-read-500 text-4xl mt-[200px]  text-red-700 mt-48" />
    );
  }
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-red-700 mt-48">
        متاسفانه مورد پیدا نشد !!!
      </div>
    );
  }
  return (
    <section className="mb-20 ">
      <div className="container mx-auto px-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 ">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
