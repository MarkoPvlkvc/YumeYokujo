"use client";

import * as React from "react";
import {
  addDays,
  endOfToday,
  endOfYear,
  format,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePickerWithRangeProps } from "@/lib/types";

const DatePickerWithRange = ({
  date,
  setDate,
  className,
  classNameButton,
  id,
  disabled,
}: DatePickerWithRangeProps) => {
  // date and setDate lifted up from here

  return (
    <div id={id} className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start bg-transparent text-left font-normal",
              !date && "text-muted-foreground",
              classNameButton,
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            fromDate={startOfMonth(startOfToday())}
            toDate={endOfYear(endOfToday())}
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithRange;
