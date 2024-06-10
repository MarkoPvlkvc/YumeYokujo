import Link from "next/link";
import { InputWithButton } from "./input_with_button";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-darkBlue text-white">
      <div className="mx-auto mt-auto w-full max-w-[85rem] px-4 pb-5 pt-10 sm:px-6 lg:px-8 lg:pt-20">
        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex h-full w-max flex-col">
            <img src="/logo_white.png" className="w-20"></img>

            <div className="flex w-max flex-col justify-center py-4">
              <p className="text-nowrap text-lg font-bold leading-none">
                YUME YOKUJO
              </p>

              <div className="font-playfair flex w-full justify-between text-center text-xs font-medium text-white/75">
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
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="text-xl font-bold">Info</h4>
            <div className="mt-8 grid space-y-4 text-white/50">
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  Home
                </Link>
              </p>
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </p>
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  Contact & Info
                </Link>
              </p>
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  FAQ
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="text-xl font-bold">Accommodation</h4>
            <div className="mt-8 grid space-y-4 leading-tight text-white/50">
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  Kaze no Yashiro <br></br> (Sanctuary of the Wind)
                </Link>
              </p>
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  Yama no Sato <br></br> (Mountain Village)
                </Link>
              </p>
              <p>
                <Link href="#" className="transition-colors hover:text-white">
                  Gallery
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-2">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <form>
              <p className="mt-8 text-white/50">
                Sign up for our newsletter to stay in the loop with the latest
                events, news, and discounts at Yume Yokujo Oasis Retreat. Don't
                miss out on special offers and promotions tailored just for you.
                Join now and elevate your journey with us!
              </p>
              <InputWithButton />
            </form>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div className="mt-5 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/50">
              Copyright ©2024 Yume Yokujo - All rights reserved
            </p>
          </div>
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
