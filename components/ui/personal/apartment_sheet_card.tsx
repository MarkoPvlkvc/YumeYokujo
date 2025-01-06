import {
  BedDouble,
  ChevronRight,
  ShowerHead,
  Star,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApartmentSheetCardProps } from "@/lib/types";

const ApartmentSheetCard = ({
  apartmentIndex,
  src,
  apartmentNr,
  name,
  translation,
  setSelectedApartment,
  setOpen,
}: ApartmentSheetCardProps) => {
  const handleButtonClick = () => {
    setSelectedApartment(apartmentIndex);
    setOpen(false);
  };

  return (
    <div className="grid h-fit w-fit grid-cols-[1fr_auto] gap-x-6 gap-y-2 rounded-3xl border-[1px] border-black/15 p-4 sm:grid-cols-[auto_auto_1fr]">
      <div className="col-span-2 aspect-[4/3] h-[175px] overflow-hidden rounded-3xl sm:col-span-1 sm:aspect-[2.5/2.5] md:aspect-[4/3] md:h-[200px]">
        <img src={src} className="h-full w-full object-cover" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text-xs text-black/50 md:text-sm">
          APARTMENT N.{apartmentNr}
        </p>
        <p className="mt-2 text-lg font-semibold !leading-none md:text-xl">
          {name}
        </p>
        <p className="text-sm font-medium text-darkBlue/35 md:text-base">
          {translation}
        </p>

        <div className="mt-5 flex gap-1">
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
          <Star className="size-4 fill-black md:size-5" />
        </div>

        <div className="mt-9 flex gap-5 sm:mt-auto">
          <div className="flex items-center gap-2">
            <BedDouble className="size-4 md:size-5" />
            <p className="text-sm font-light md:text-base">3</p>
          </div>

          <div className="flex items-center gap-2">
            <UserRound className="size-4 md:size-5" />
            <p className="text-sm font-light md:text-base">3</p>
          </div>

          <div className="flex items-center gap-2">
            <ShowerHead className="size-4 md:size-5" />
            <p className="text-sm font-light md:text-base">3</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col justify-start sm:mt-0">
        <Button
          onClick={handleButtonClick}
          variant="outline"
          size="icon"
          className="can-hover:hover:bg-gray/25 size-8 bg-transparent transition-all md:size-10"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default ApartmentSheetCard;
