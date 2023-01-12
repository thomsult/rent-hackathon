import React from "react";
import { Battery100Icon, StarIcon } from "@heroicons/react/24/outline";
import { CogIcon, UsersIcon, ViewColumnsIcon } from "@heroicons/react/24/solid";

export function CarsCardBig({ vh }) {
  return (
    <>
      <div className="hidden sm:block">
        <div className="h-full w-full lg:max-w-xs lg:max-h-[25em] py-4 rounded-xl bg-white px-4 shadow-xl">
          <div>
            <h1 className=" text-xl font-bold text-[#555555]">
              {vh.brand} {vh.model}
            </h1>
            <h2 className="text-lg font-medium text-[#6f6d6d]">
              {vh.details}
            </h2>
            <div className="">
              <img
                src= {vh.image_car}
                alt="voiture"
                className=""
              />
            </div>
            <div className="flex mt-4 justify-around">
              <div className="flex">
                <ViewColumnsIcon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                 {vh.doors}
                </h3>
              </div>
              <div className="flex">
                <Battery100Icon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                  {vh.fuel_type}
                </h3>
              </div>
              <div className="flex">
                <CogIcon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                  {vh.transmission}
                </h3>
              </div>
              <div className="flex">
                <UsersIcon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                  {vh.seats}
                </h3>
              </div>
            </div>
            <div className="flex justify-around mt-8">
              <h4 className="text-md font-bold text-[#555555] text-2xl">
                {vh.daily_cost} EUR/<span className="text-[grey]">jour</span>
              </h4>
              <button className="bg-[#F3B33D] text-white px-4 py-2 rounded-lg ml-4 text-xl font-semibold text-center">
                Reserver
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden block w-full">
        <div className="py-4 px-4 w-full border-solid border-2  border-[green] rounded-xl bg-white relative">
          <div>
            <h1 className=" text-xl font-bold text-[#555555]">{vh.brand}</h1>
            <h2 className="text-lg font-medium text-[#6f6d6d]">{vh.model}</h2>
            <div className="flex mt-4">
              <Battery100Icon className="h-6 w-6" />{" "}
              <h3 className="text-md font-medium text-[#555555] ml-1">
                {vh.fuel_type}
              </h3>
            </div>
            <div className="flex mt-2 ml-2">
              <h4 className="text-md font-medium text-[#555555] ">
                {vh.daily_cost} EUR par jour
              </h4>
            </div>
            <div className="">
              <img
                src={vh.image_car}
                alt="voiture"
                className="h-32 absolute top-3 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
