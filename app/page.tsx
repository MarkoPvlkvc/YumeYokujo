import DatePickerWithRange from "@/components/ui/personal/date_picker_with_range";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  UserRound,
  PersonStanding,
  BedDouble,
  CalendarCheck,
  Calendar,
} from "lucide-react";
import SelectFromList from "@/components/ui/personal/select_from_list";
import { Button } from "@/components/ui/button";
import NavigationMenuWithDropdown from "@/components/ui/personal/navigation_menu_with_dropdown";

export default function Home() {
  return (
    <main className="font-inter w-[100vw] text-black">
      <nav className="absolute left-[50%] top-[32px] z-10 flex h-[85px] w-fit -translate-x-1/2 gap-20 rounded-l-3xl rounded-r-[30px] bg-white">
        <div className="flex h-full w-max">
          <img src="/logo.png" className="ml-8 h-full py-4"></img>

          <div className="ml-3 flex w-max flex-col justify-center py-4">
            <p className="text-nowrap text-xl font-bold leading-none">
              YUME YOKUJO
            </p>

            <div className="font-playfair flex w-full justify-between text-center text-xs">
              <span className="flex-1">O</span>
              <span className="flex-1">A</span>
              <span className="flex-1">S</span>
              <span className="flex-1">I</span>
              <span className="flex-1">S</span>
              <span className="flex-1"> </span>
              <span className="flex-1">R</span>
              <span className="flex-1">E</span>
              <span className="flex-1">T</span>
              <span className="flex-1">R</span>
              <span className="flex-1">E</span>
              <span className="flex-1">A</span>
              <span className="flex-1">T</span>
            </div>
          </div>
        </div>

        <NavigationMenuWithDropdown />

        <button className="-mr-[1px] flex h-[100%] w-fit items-center justify-center text-nowrap rounded-r-3xl bg-darkBlue px-9 font-medium text-white transition-colors hover:bg-[#376075]">
          <Calendar className="mr-2 h-4 w-4" />
          BOOK NOW
        </button>
      </nav>

      <section className="relative flex h-svh items-center justify-center text-7xl">
        <img
          src="/background-upscaled.jpeg"
          className="h-full w-full object-cover"
        ></img>
        <p className="absolute text-9xl font-bold text-lightBlue opacity-50 mix-blend-lighten">
          YUME YOKUJO
        </p>
        <p className="font-playfair absolute text-center text-white">
          Where Dreams <br></br> Meet Tranquility
        </p>

        <div className="absolute bottom-0 left-[50%] flex -translate-x-1/2 items-center gap-5 rounded-t-3xl bg-white p-6">
          <DatePickerWithRange
            disabled={[new Date(2024, 0, 16), new Date(2024, 0, 17)]}
          />
          <SelectFromList
            icon={UserRound}
            text="Adults"
            options={["1", "2", "3", "4", "5", "6"]}
          />
          <SelectFromList
            icon={PersonStanding}
            text="Children"
            options={["1", "2", "3", "4", "5", "6"]}
          />
          <SelectFromList
            icon={BedDouble}
            text="Rooms"
            options={["1", "2", "3", "4", "5", "6"]}
          />
          <Button size={"lg"}>
            <CalendarCheck className="mr-2 h-4 w-4" />
            BOOK NOW
          </Button>
        </div>
      </section>
    </main>
  );
}
