import React from "react";
import { servicesData } from "./data";

const OurSpeciality = () => {
  return (
    <div className="services flex flex-col md:flex-row items-center justify-center w-full md:px-12 px-3 my-8">
      {servicesData.map((item) => {
        return (
          <div className="md:h-[12rem] w-full md:w-[30%] rounded-md p-3 flex items-center flex-col justify-center text-center gap-3" key={item.title}>
            <div className="icon p-2 rounded-full bg-gray-400 w-max">
              <div className="p-2 rounded-full bg-black">
                <item.icon size={35} className="text-white bg-transparent" />
              </div>
            </div>

            <h3 className="font-semibold font-sans text-2xl">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OurSpeciality;
