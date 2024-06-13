"use client";

import { cn } from "@/lib/utils";
import { Menu, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavbarDropdown = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <div className={cn("relative z-20", className)}>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex size-12 items-center justify-center rounded-full bg-darkBlue p-3 text-white transition-colors hover:bg-[#376075]"
      >
        <Menu className="" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 flex w-max flex-col rounded-3xl border-[1px] border-black/15 bg-darkBlue pt-4 text-sm font-semibold text-white/60 focus:outline-none">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            HOME
          </button>
          <button
            onClick={() => {
              router.push("/#about-us");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            ABOUT US
          </button>
          <button
            onClick={() => {
              router.push("/contact-&-info");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            CONTACT & INFO
          </button>
          <button
            onClick={() => {
              router.push("/faq");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              router.push("/kaze-no-yashiro");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            KAZE NO YASHIRO
          </button>
          <button
            onClick={() => {
              router.push("/yama-no-sato");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            YAMA NO SATO
          </button>
          <button
            onClick={() => {
              router.push("/gallery");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            GALLERY
          </button>
          <button
            onClick={() => {
              router.push("/offers");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            OFFERS
          </button>
          <button
            onClick={() => {
              router.push("/news-&-events");
            }}
            className="w-full px-6 py-2 text-start transition-colors hover:text-white"
          >
            NEWS & EVENTS
          </button>

          <div className="flex w-full items-center justify-center">
            <button
              onClick={() => {
                router.push("/book-now");
              }}
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
