"use client";

import { Star, BedDouble, UserRound, ShowerHead, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import DatePickerWithRange from "@/components/ui/personal/date_picker_with_range";
import SelectFromList from "@/components/ui/personal/select_from_list";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { DateRange } from "react-day-picker";
import {
  addDays,
  differenceInDays,
  eachDayOfInterval,
  startOfToday,
  startOfMonth,
} from "date-fns";
import { useSearchParams } from "next/navigation";
import AccommodationSheet from "@/components/ui/personal/accommodation_sheet";
import { createClient } from "@/utils/supabase/client";
import useSWR from "swr";

const fetcher = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("Calendar Booked Dates")
    .select("from, to");

  if (error) {
    throw error;
  }

  return data;
};

const BookNow = () => {
  const perNight = 200;

  const [price, setPrice] = React.useState(0);
  const [priceTotal, setPriceTotal] = React.useState(0);
  const [selectedAdults, setSelectedAdults] = React.useState("");
  const [selectedChildren, setSelectedChildren] = React.useState("");
  const [selectedRooms, setSelectedRooms] = React.useState("1");

  const [disabledDates, setDisabledDates] = React.useState<Date[]>([]);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const searchParams = useSearchParams();

  React.useEffect(() => {
    const selectedAdultsParams = searchParams.get("adults")?.toString();
    const selectedChildrenParams = searchParams.get("children")?.toString();
    const selectedRoomsParams = searchParams.get("rooms")?.toString();

    setSelectedAdults(selectedAdultsParams!);
    setSelectedChildren(selectedChildrenParams!);
    setSelectedRooms(selectedRoomsParams! || "1"); // Default to 1 if empty

    const fromDate = searchParams.get("from");
    const toDate = searchParams.get("to");
    if (fromDate && toDate) {
      setDate({ from: new Date(fromDate), to: new Date(toDate) });
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (date?.from && date?.to) {
      const duration = differenceInDays(date.to, date.from);
      const price = duration * perNight * +selectedRooms;
      setPrice(price);
      setPriceTotal(price - 120);
    } else {
      console.log("Selected Date Range:", date);
      console.log("Duration in days: Not available");
    }
  }, [date, selectedRooms]);

  // Calendar Database
  const { data: dates, error } = useSWR("calendarBookedDates", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 86400000, // 24 hours
    refreshInterval: 60000, // 1 minute
  });

  React.useEffect(() => {
    if (dates) {
      const allDisabledDates: Date[] = [];
      const today = startOfToday();
      const startOfCurrentMonth = startOfMonth(today);

      // Add all dates from the start of the month to yesterday
      const datesFromStartOfMonth = eachDayOfInterval({
        start: startOfCurrentMonth,
        end: addDays(today, -1),
      });
      allDisabledDates.push(...datesFromStartOfMonth);

      // Add dates from the database to allDisabledDates
      dates.forEach((item: { from: string; to: string }) => {
        const fromDate = new Date(decodeURIComponent(item.from));
        const toDate = new Date(decodeURIComponent(item.to));
        const interval = eachDayOfInterval({
          start: fromDate,
          end: toDate,
        });
        allDisabledDates.push(...interval);
      });

      setDisabledDates(allDisabledDates);
    }

    if (error) {
      console.error("Error fetching dates:", error);
    }
  }, [dates, error]);

  const [selectedApartment, setSelectedApartment] = React.useState(0);
  const apartmentSheetCards = [
    {
      src: "/apartments/a1.jpeg",
      apartmentNr: "1",
      name: "Matsu - 松",
      translation: "Pine",
    },
    {
      src: "/apartments/a2.png",
      apartmentNr: "2",
      name: "Sakura - 桜",
      translation: "Cherry Blossom",
    },
    {
      src: "/apartments/a3.png",
      apartmentNr: "3",
      name: "Fuji - 藤",
      translation: "Wisteria",
    },
    {
      src: "/apartments/a4.png",
      apartmentNr: "4",
      name: "Kaze - 風",
      translation: "Wind",
    },
    {
      src: "/apartments/a5.png",
      apartmentNr: "5",
      name: "Tsubaki - 椿",
      translation: "Camellia",
    },
    {
      src: "/apartments/b1.jpeg",
      apartmentNr: "1",
      name: "Take - 竹",
      translation: "Bamboo",
    },
    {
      src: "/apartments/b2.jpeg",
      apartmentNr: "2",
      name: "Ume - 梅",
      translation: "Plum Blossom",
    },
    {
      src: "/apartments/b3.jpeg",
      apartmentNr: "3",
      name: "Hoshi - 星",
      translation: "Star",
    },
    {
      src: "/apartments/b4.jpeg",
      apartmentNr: "4",
      name: "Mizu - 水",
      translation: "Water",
    },
    {
      src: "/apartments/b5.jpeg",
      apartmentNr: "5",
      name: "Hana - 花",
      translation: "Flower",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        BOOK NOW
      </p>

      <div className="mb-12 mt-9 box-content grid max-w-5xl grid-cols-1 gap-x-9 gap-y-9 px-6 sm:grid-cols-[1.5fr_2fr] md:mb-16 md:mt-12 lg:mb-24 lg:mt-16">
        <div className="grid h-fit w-full grid-cols-[1fr_auto] gap-x-6 gap-y-2 rounded-3xl border-[1px] border-black/15 p-6 sm:col-span-2 sm:grid-cols-[auto_auto_1fr] lg:p-9">
          <div className="col-span-2 h-[200px] overflow-hidden rounded-3xl sm:col-span-1 sm:aspect-[2.5/2.5] md:aspect-[4/2.5]">
            <img
              src={apartmentSheetCards[selectedApartment].src}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <p className="text-sm text-black/50 md:text-base">
              APARTMENT N.{apartmentSheetCards[selectedApartment].apartmentNr}
            </p>
            <p className="mt-2 text-lg font-semibold !leading-none md:text-xl">
              {apartmentSheetCards[selectedApartment].name}
            </p>
            <p className="text-sm font-medium text-darkBlue/35 md:text-base">
              {apartmentSheetCards[selectedApartment].translation}
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
                <BedDouble className="size-5 md:size-6" />
                <p className="text-base font-light md:text-lg">3</p>
              </div>

              <div className="flex items-center gap-2">
                <UserRound className="size-5 md:size-6" />
                <p className="text-base font-light md:text-lg">3</p>
              </div>

              <div className="flex items-center gap-2">
                <ShowerHead className="size-5 md:size-6" />
                <p className="text-base font-light md:text-lg">3</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-between">
            <p className="hidden max-w-md text-sm leading-tight text-black/50 md:text-base lg:block">
              Matsu, meaning Pine, is a haven of tranquility and strength,
              reflecting the enduring nature of the pine tree. This apartment is
              adorned with subtle green tones and natural wooden accents,
              creating a serene and timeless atmosphere.
            </p>

            <AccommodationSheet
              apartmentSheetCards={apartmentSheetCards}
              setSelectedApartment={setSelectedApartment}
              className="ml-auto mt-auto w-fit bg-transparent transition-all hover:bg-gray/25"
            />
          </div>
        </div>
        {/* END APARTMENT BENTO */}

        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border-[1px] border-black/15 p-6 lg:p-9">
            <p className="text-lg font-semibold md:text-xl">Booking Details</p>
            <p className="mt-9 text-sm font-medium">
              Arrival and Departure Date <span className="text-red-600">*</span>
            </p>
            <DatePickerWithRange
              date={date}
              setDate={setDate}
              disabled={disabledDates}
              className="mt-1 w-fit text-black/50 sm:w-[160px] md:w-[300px]"
              classNameButton="md:box-border sm:box-content text-wrap"
            />
            <div className="mt-6 flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Adults <span className="text-red-600">*</span>
                </p>
                <SelectFromList
                  text="Adults"
                  options={["1", "2", "3", "4", "5", "6"]}
                  value={selectedAdults}
                  onChange={setSelectedAdults}
                  className="mt-1 text-black/50 transition-all hover:text-black sm:w-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Children <span className="text-red-600">*</span>
                </p>
                <SelectFromList
                  text="Children"
                  options={["0", "1", "2", "3", "4", "5", "6"]}
                  value={selectedChildren}
                  onChange={setSelectedChildren}
                  className="mt-1 text-black/50 transition-all hover:text-black sm:w-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Rooms <span className="text-red-600">*</span>
                </p>
                <SelectFromList
                  text="Rooms"
                  options={["1", "2", "3", "4", "5", "6"]}
                  value={selectedRooms}
                  onChange={setSelectedRooms}
                  className="mt-1 text-black/50 transition-all hover:text-black sm:w-full"
                />
              </div>
            </div>
          </div>
          {/* LEFT COLUMN BOOKING DETAILS */}

          <div className="overflow-hidden rounded-3xl border-[1px] border-black/15 p-6 lg:p-9">
            <p className="text-lg font-semibold md:text-xl">Cost Preview</p>

            <div className="mt-9 flex justify-between text-sm font-light md:text-base">
              <p>Normal Cost:</p>
              <p>{price}€</p>
            </div>
            <div className="mt-6 flex justify-between text-sm font-light leading-5 md:text-base">
              <p>Promotion:</p>
              <p className="text-green-600">-120€</p>
            </div>
            <p className="text-xs font-medium md:text-sm">
              (Blossom Bliss Spring Special)
            </p>

            <div className="-m-9 mt-9 bg-gray/50 px-9 py-6">
              <p className="text-end text-lg text-green-600 line-through md:text-xl">
                {price}€
              </p>

              <div className="flex justify-between text-xl font-semibold md:text-2xl">
                <p>Total:</p>
                <p>{priceTotal}€</p>
              </div>

              <p className="text-xs text-black/50 md:text-sm">
                Includes tax and fees
              </p>
            </div>
          </div>
          {/* LEFT COLUMN COST PREVIEW */}
        </div>
        {/* END LEFT COLUMN */}

        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border-[1px] border-black/15 p-6 lg:p-9">
            <p className="text-sm font-light leading-tight md:text-base">
              Refunds are possible by contacting us up to a week before the
              arrival date.
            </p>
          </div>
          {/* RIGHT COLUMN SINGLE PARAGRAPH */}

          <div className="rounded-3xl border-[1px] border-black/15 p-6 lg:p-9">
            <p className="text-lg font-semibold md:text-xl">Your Info</p>

            <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid w-fit max-w-sm items-center gap-2">
                <Label htmlFor="name">
                  Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="bg-transparent placeholder:text-black/50"
                />
              </div>

              <div className="grid w-fit max-w-sm items-center gap-2">
                <Label htmlFor="surname">
                  Surname <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  id="surname"
                  placeholder="Enter Surname"
                  className="bg-transparent placeholder:text-black/50"
                />
              </div>

              <div className="grid w-fit max-w-sm flex-1 items-center gap-2">
                <Label htmlFor="surname">
                  Email <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="bg-transparent placeholder:text-black/50"
                />
              </div>

              <div className="hidden md:block" />

              <div className="grid w-fit max-w-sm flex-1 items-center gap-2">
                <Label htmlFor="surname">
                  Country/Region <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  id="countryRegion"
                  placeholder="Enter Country/Region"
                  className="bg-transparent placeholder:text-black/50"
                />
              </div>

              <div className="hidden md:block" />

              <div className="grid w-fit max-w-sm flex-1 items-center gap-2">
                <Label htmlFor="surname">
                  Mobile Number <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  id="mobileNumber"
                  placeholder="Enter Mobile Number"
                  className="bg-transparent placeholder:text-black/50"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-[1px] border-black/15 p-6 lg:p-9">
            <p className="text-lg font-semibold md:text-xl">Special Requests</p>

            <p className="mt-9 text-sm font-light leading-tight md:text-base">
              The fulfillment of special requirements cannot be guaranteed, but
              the property will do everything to meet them. You can always make
              a special request to complete the reservation!
            </p>

            <div className="mt-6 grid w-full gap-2">
              <Label htmlFor="message">Requests</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="bg-transparent placeholder:text-black/50"
              />
            </div>
          </div>

          <div className="rounded-3xl border-[1px] border-black/15 p-6 lg:p-9">
            <p className="text-lg font-semibold md:text-xl">House Rules</p>
            <ul className="ml-4 mt-9 list-disc text-sm font-light leading-tight md:text-base">
              <li>No smoking</li>
              <li>No events and parties allowed</li>
              <li>No noise between 23:00 and 08:00</li>
              <li>No pets allowed</li>
            </ul>
          </div>

          <Button size={"lg"} className="ml-auto mt-3 w-fit">
            <Check className="mr-2 h-4 w-4" />
            CONFIRM
          </Button>
        </div>
        {/* END RIGHT COLUMN */}
      </div>
    </main>
  );
};

export default BookNow;
