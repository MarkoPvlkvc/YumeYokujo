"use client";

import { Calendar } from "lucide-react";
import NavigationMenuWithDropdown from "./navigation_menu_with_dropdown";
import NavbarDropdown from "./navbar_dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarStatic = () => {
  const router = useRouter();

  return (
    <nav
      className={`relative left-[50%] top-4 z-10 flex h-[80px] w-[90%] -translate-x-1/2 items-center justify-between gap-20 rounded-l-3xl rounded-r-[30px] bg-white xl:w-fit`}
    >
      <div className="flex h-full w-max">
        <img
          src="/logo.png"
          onClick={() => router.push("/")}
          className="ml-8 h-full cursor-pointer py-5"
        ></img>

        <div className="ml-3 flex w-max flex-col justify-center py-4">
          <p className="text-nowrap text-base font-bold leading-4 sm:text-lg sm:leading-none">
            YUME YOKUJO
          </p>

          <div className="flex w-full justify-between text-center font-playfair text-xs font-medium text-black/60">
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

      <NavigationMenuWithDropdown className="hidden xl:flex" />

      <Link
        href="/book-now"
        className="can-hover:hover:bg-[#376075] -mr-[1px] hidden h-[100%] w-fit text-nowrap rounded-3xl bg-darkBlue px-8 text-sm font-medium text-white transition-colors xl:block"
      >
        <button className="flex h-full w-full items-center justify-center">
          <Calendar className="mr-2 h-4 w-4" />
          BOOK NOW
        </button>
      </Link>

      <NavbarDropdown className="mr-4 xl:hidden" />
    </nav>
  );
};

export default NavbarStatic;
