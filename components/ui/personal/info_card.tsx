"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { InfoCardProps } from "@/lib/types";

const InfoCard = ({
  src,
  date,
  type,
  title,
  description,
  isHorizontal = false,
  blogIndex,
}: InfoCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (blogIndex) router.push(`/news-&-events/${blogIndex}`);
      }}
      className={`${isHorizontal ? "flex w-[250px] flex-col gap-4 sm:w-fit sm:flex-row sm:gap-6" : "row-span-5 grid w-[250px] grid-rows-subgrid md:w-[300px]"} can-hover:hover:cursor-pointer can-hover:hover:border-gray can-hover:hover:bg-gray/15 box-content gap-y-0 rounded-[40px] border-[2px] border-transparent p-4`}
    >
      <img
        src={src}
        className={`${isHorizontal ? "w-[250px] md:w-[300px]" : "w-full"} h-[200px] rounded-3xl object-cover md:h-[250px]`}
      />
      <div className={`${isHorizontal ? "mt-4 max-w-lg" : "mt-4 md:mt-6"}`}>
        <div className="flex gap-6">
          <p className="text-sm text-black/50 md:text-base">{date}</p>
          <p className="text-sm font-medium text-lightBlue md:text-base">
            {type}
          </p>
        </div>
        <p className="text-lg font-semibold md:mt-2 md:text-xl">{title}</p>
        <p className="mt-2 text-sm text-black/50 md:mt-4 md:text-base">
          {description}
        </p>
      </div>
      {!isHorizontal && (
        <ArrowRight className="mt-2 size-7 text-darkBlue md:mt-4 md:size-9" />
      )}
    </div>
  );
};

export default InfoCard;
