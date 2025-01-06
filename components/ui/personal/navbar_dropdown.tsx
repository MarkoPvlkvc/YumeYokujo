"use client";

import { cn } from "@/lib/utils";
import { Menu, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavbarDropdown = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const redirectTo = (path: string) => {
    toggleMenu();
    router.push(path);
  };

  return (
    <div className={cn("relative z-20", className)}>
      <button
        onClick={toggleMenu}
        className="can-hover:hover:bg-[#376075] flex size-12 items-center justify-center rounded-full bg-darkBlue p-3 text-white transition-colors"
      >
        <Menu className="" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 flex w-max flex-col rounded-3xl border-[1px] border-black/15 bg-darkBlue pt-4 text-sm font-semibold text-white/60 focus:outline-none">
          <button
            onClick={() => redirectTo("/")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => redirectTo("/#about-us")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            ABOUT US
          </button>
          <button
            onClick={() => redirectTo("/contact-&-info")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            CONTACT & INFO
          </button>
          <button
            onClick={() => redirectTo("/faq")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => redirectTo("/kaze-no-yashiro")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            KAZE NO YASHIRO
          </button>
          <button
            onClick={() => redirectTo("/yama-no-sato")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            YAMA NO SATO
          </button>
          <button
            onClick={() => redirectTo("/gallery")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            GALLERY
          </button>
          <button
            onClick={() => redirectTo("offers")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            OFFERS
          </button>
          <button
            onClick={() => redirectTo("/news-&-events")}
            className="can-hover:hover:text-white w-full px-6 py-2 text-start transition-colors"
          >
            NEWS & EVENTS
          </button>

          <div className="flex w-full items-center justify-center">
            <button
              onClick={() => redirectTo("/book-now")}
              className="m-6 flex items-center rounded-3xl bg-white px-6 py-5 text-lightBlue"
            >
              <Calendar className="mr-2 h-4 w-4" />
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
