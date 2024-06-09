"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import {
  addDays,
  eachDayOfInterval,
  startOfMonth,
  startOfToday,
} from "date-fns";
import {
  BedDouble,
  CalendarCheck,
  PersonStanding,
  UserRound,
} from "lucide-react";
import SelectFromList from "@/components/ui/personal/select_from_list";
import { Button } from "@/components/ui/button";
import DatePickerWithRange from "@/components/ui/personal/date_picker_with_range";
import { useRouter } from "next/navigation";
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

const BookingDetailsHero = () => {
  const [selectedAdults, setSelectedAdults] = React.useState("");
  const [selectedChildren, setSelectedChildren] = React.useState("");
  const [selectedRooms, setSelectedRooms] = React.useState("");

  const [disabledDates, setDisabledDates] = React.useState<Date[]>([]);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const router = useRouter();

  const handleBookNowClick = () => {
    const params = new URLSearchParams();
    params.set("adults", selectedAdults ?? "");
    params.set("children", selectedChildren ?? "");
    params.set("rooms", selectedRooms ?? "");
    params.set("from", date?.from?.toISOString() || "");
    params.set("to", date?.to?.toISOString() || "");

    const newUrl = `/book-now?${params.toString()}`;
    router.push(newUrl);
  };

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

  return (
    <div className="absolute bottom-0 left-[50%] flex w-[75%] max-w-[1152px] -translate-x-1/2 flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-t-3xl bg-white p-6 max-[500px]:w-full max-[400px]:gap-x-3">
      <img
        src="little_edge_boi.svg"
        className="pointer-events-none absolute bottom-0 right-full select-none"
      />
      <img
        src="little_edge_boi.svg"
        className="pointer-events-none absolute bottom-0 left-full -scale-x-100 select-none"
      />

      <DatePickerWithRange
        date={date}
        setDate={setDate}
        disabled={disabledDates}
        className="w-full lg:w-[300px]"
      />
      <SelectFromList
        icon={UserRound}
        text="Adults"
        options={["1", "2", "3", "4", "5", "6"]}
        value={selectedAdults}
        onChange={setSelectedAdults}
        className="w-fit flex-1"
        classNameIcon="max-[600px]:hidden block"
      />
      <SelectFromList
        icon={PersonStanding}
        text="Children"
        options={["0", "1", "2", "3", "4", "5", "6"]}
        value={selectedChildren}
        onChange={setSelectedChildren}
        className="w-fit flex-1"
        classNameIcon="max-[600px]:hidden block"
      />
      <SelectFromList
        icon={BedDouble}
        text="Rooms"
        options={["1", "2", "3", "4", "5", "6"]}
        value={selectedRooms}
        onChange={setSelectedRooms}
        className="w-fit flex-1"
        classNameIcon="max-[600px]:hidden block"
      />
      <Button
        onClick={handleBookNowClick}
        size={"lg"}
        className="flex items-center"
      >
        <CalendarCheck className="mr-2 h-4 w-4" />
        BOOK NOW
      </Button>
    </div>
  );
};

export default BookingDetailsHero;
