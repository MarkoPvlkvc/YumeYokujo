"use client";

import { Calendar } from "lucide-react";
import NavigationMenuWithDropdown from "./navigation_menu_with_dropdown";
import { delay, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import NavbarDropdown from "@/components/ui/personal/navbar_dropdown";

const Navbar = () => {
  // 0 - top state, 1 - scrolled (hidden) state, 2 - scrolled (shown) state
  const [scrolledState, setScrolledState] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 0) {
      if (currentScrollPos > prevScrollPos) {
        setScrolledState(1); // Scrolling down
      } else {
        setScrolledState(2); // Scrolling up
      }
    } else {
      setScrolledState(0); // Top position
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]); // Memoize scroll handler

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navbarVariants = {
    top: {
      top: "1rem",
    }, // Initial top position
    scrolled: {
      top: "-5rem",
    }, // Scrolled position
    scrolledShown: {
      top: "1rem",
    },
  };

  return (
    <motion.nav
      initial="top"
      variants={navbarVariants}
      animate={
        scrolledState === 0
          ? "top"
          : scrolledState === 1
            ? "scrolled"
            : "scrolledShown"
      }
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed left-[50%] z-20 flex h-[80px] w-[90%] -translate-x-1/2 items-center justify-between gap-20 rounded-l-3xl rounded-r-[30px] bg-white drop-shadow-md xl:w-fit`}
    >
      <div className="flex h-full w-max">
        <img src="/logo.png" className="ml-8 h-full py-5"></img>

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
        className="-mr-[1px] hidden h-[100%] w-fit text-nowrap rounded-r-3xl bg-darkBlue px-8 text-sm font-medium text-white transition-colors hover:bg-[#376075] xl:block"
      >
        <button className="flex h-full w-full items-center justify-center">
          <Calendar className="mr-2 h-4 w-4" />
          BOOK NOW
        </button>
      </Link>

      <NavbarDropdown className="mr-4 xl:hidden" />
    </motion.nav>
  );
};

export default Navbar;
