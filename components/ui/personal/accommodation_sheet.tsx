import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRightLeft } from "lucide-react";
import ApartmentSheetCard from "./apartment_sheet_card";
import React from "react";
import { AccomodationSheetProps } from "@/lib/types";

const AccommodationSheet = ({
  className,
  apartmentSheetCards,
  setSelectedApartment,
}: AccomodationSheetProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className={className}>
          <p className="block max-[450px]:hidden">Change</p>
          <ArrowRightLeft className="ml-2 h-4 w-4 max-[450px]:ml-0" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-fit overflow-y-auto bg-white max-[400px]:w-full"
        style={{ maxWidth: "none" }}
      >
        <div className="flex flex-col items-center">
          <p className="mt-12 text-nowrap text-lg font-semibold leading-tight md:text-xl">
            Kaze no Yashiro - 風の社
          </p>
          <p className="text-sm font-semibold text-darkBlue/50 md:text-base">
            Sanctuary of the Wind
          </p>

          <div className="mt-9 flex flex-col gap-4">
            {apartmentSheetCards.slice(0, 5).map((card, index) => (
              <ApartmentSheetCard
                setSelectedApartment={setSelectedApartment}
                apartmentIndex={index}
                setOpen={setOpen}
                key={index}
                {...card}
              />
            ))}
          </div>
          {/* APARTMENTS SECTION A END */}

          <p className="mt-[72px] text-nowrap text-lg font-semibold leading-tight md:text-xl">
            Yama no Sato - 山の里
          </p>
          <p className="text-sm font-semibold text-darkBlue/50 md:text-base">
            Mountain Village
          </p>

          <div className="mt-9 flex flex-col gap-4">
            {apartmentSheetCards.slice(5).map((card, index) => (
              <ApartmentSheetCard
                setSelectedApartment={setSelectedApartment}
                apartmentIndex={index + 5}
                setOpen={setOpen}
                key={index}
                {...card}
              />
            ))}
          </div>
          {/* APARTMENTS SECTION B END */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccommodationSheet;
