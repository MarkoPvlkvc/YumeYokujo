import "bootstrap-icons/font/bootstrap-icons.css";
import ApartmentCard from "@/components/ui/personal/apartment_card";
import { yamaNoSatoApartments } from "@/lib/constants";
import React from "react";

const KazeNoYashiro = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col justify-center">
        <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
          ACCOMMODATION
        </p>
        <p className="mt-0 text-center text-xl font-semibold md:mt-2 md:text-2xl lg:text-3xl">
          Yama no Sato - 山の里
        </p>
        <p className="text-center text-lg font-semibold !leading-tight text-darkBlue/50 md:text-xl lg:text-2xl">
          Mountain Village
        </p>
      </div>
      <div className="mt-9 max-w-5xl px-6 md:mt-12 lg:mt-16">
        <img
          src="yamanosato.jpeg"
          className="h-[350px] w-full rounded-3xl object-cover md:h-[500px]"
        ></img>
        <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
          APARTMENTS
        </p>
        <div className="mb-12 mt-9 flex flex-col gap-9 md:mb-16 md:mt-12 lg:mb-24 lg:mt-16">
          {yamaNoSatoApartments.map((apartmentData, index) => (
            <React.Fragment key={index}>
              <ApartmentCard apartmentIndex={index + 5} {...apartmentData} />
              <div className="w-full rounded-3xl border-[1px] border-black/5 last:hidden" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default KazeNoYashiro;
