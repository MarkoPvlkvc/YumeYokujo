"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Calendar, BedDouble, UserRound, ShowerHead, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ApartmentCardProps {
  image: string;
  number: string;
  name: string;
  japaneseName: string;
  translation: string;
  description: string;
  reviews: number;
  stars: number;
  beds: number;
  guests: number;
  bathrooms: number;
  apartmentIndex: number;
}

const ApartmentCard = ({
  image,
  number,
  name,
  japaneseName,
  translation,
  description,
  reviews,
  stars,
  beds,
  guests,
  bathrooms,
  apartmentIndex,
}: ApartmentCardProps) => {
  const router = useRouter();

  const handleBookNowClick = () => {
    const params = new URLSearchParams();
    params.set("adults", "");
    params.set("children", "");
    params.set("rooms", "");
    params.set("from", "");
    params.set("to", "");
    params.set("apartment", apartmentIndex.toString());

    const newUrl = `/book-now?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <div className="grid h-fit w-full grid-cols-[1fr_auto] gap-x-6 gap-y-2 rounded-3xl">
      <div className="col-span-2 aspect-[4/2.5] h-[250px] w-full min-w-[300px] overflow-hidden rounded-3xl md:col-span-1 md:h-full">
        <img src={image} className="h-full w-full object-cover" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text-sm text-black/50 md:text-base">
          APARTMENT N.{number}
        </p>
        <p className="mt-2 text-xl font-semibold !leading-none md:text-2xl">
          {name} - {japaneseName}
        </p>
        <p className="text-base font-medium text-darkBlue/35 md:text-lg">
          {translation}
        </p>

        <div className="mt-5 flex gap-1">
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
        </div>

        <p className="mt-8 block max-w-md text-sm !leading-5 text-black/50 md:text-base">
          {description}
        </p>

        <div className="mt-10 flex items-center gap-5">
          <div className="flex items-center gap-x-2 gap-y-1 max-[450px]:flex-col">
            <BedDouble className="size-5 md:size-6" />
            <p className="text-base font-light md:text-lg">{beds}</p>
          </div>

          <div className="flex items-center gap-x-2 gap-y-1 max-[450px]:flex-col">
            <UserRound className="size-5 md:size-6" />
            <p className="text-base font-light md:text-lg">{guests}</p>
          </div>

          <div className="flex items-center gap-x-2 gap-y-1 max-[450px]:flex-col">
            <ShowerHead className="size-5 md:size-6" />
            <p className="text-base font-light md:text-lg">{bathrooms}</p>
          </div>

          <Button
            onClick={handleBookNowClick}
            size={"lg"}
            className="ml-auto w-fit"
          >
            <Calendar className="mr-2 block h-4 w-4 max-[450px]:hidden" />
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
