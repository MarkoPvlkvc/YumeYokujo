import DatePickerWithRange from "@/components/ui/personal/date_picker_with_range";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  UserRound,
  PersonStanding,
  BedDouble,
  CalendarCheck,
  TramFront,
  Utensils,
  Drama,
  TentTree,
  ShowerHead,
  ArrowRight,
} from "lucide-react";
import SelectFromList from "@/components/ui/personal/select_from_list";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/personal/navbar";
import InfoCard from "@/components/ui/personal/info_card";
import BookingDetailsHero from "@/components/ui/personal/booking_details_hero";

export default function Home() {
  const newsAndEventInfoCards = [
    {
      src: "news1.jpg",
      date: "MAY 11, 2024",
      type: "EVENT",
      title: "Moonlit Onsen Soiree",
      description:
        "Experience the magic of our Moonlit Onsen Soiree, where the soothing waters of our natural hot springs meet the shimmering glow of the moonlight. Slip into the warm embrace of our rejuvenati...",
    },
    {
      src: "news2.jpg",
      date: "MAY 09, 2024",
      type: "EVENT",
      title: "Sakura Serenity Festival",
      description:
        "Join us for a celebration of the enchanting cherry blossoms during our Sakura Serenity Festival. Witness the breathtaking beauty of the sakura trees in full bloom as...",
    },
    {
      src: "news3.jpg",
      date: "MAY 06, 2024",
      type: "NEWS",
      title: "Unveiling Our New Wellness Retreat",
      description:
        "We are thrilled to announce the launch of our newest offering: the Yume Yokujo Wellness Retreat. Designed to elevate your journey...",
    },
  ];

  const offersInfoCards = [
    {
      src: "offers1.jpg",
      date: "UNTIL APR 30, 2024",
      type: "SEASONAL",
      title: "Blossom Bliss Spring Special",
      description:
        "Enjoy a 20% discount on your stay during the cherry blossom season. Indulge in complimentary guided walks to nearby cherry blossom spots and traditional tea ceremonies to fully immerse yourself in the season's splendor.",
    },
    {
      src: "offers2.jpg",
      date: "FOREVER",
      type: "ROMANTIC",
      title: "Moonlit Serenity Retreat",
      description:
        "Receive a complimentary candlelit dinner for two at our exclusive outdoor dining area, along with a bottle of champagne upon arrival. Enjoy a 15% discount on your stay when booking for 2 people.",
    },
    {
      src: "offers3.jpg",
      date: "UNTIL AUG 31, 2024",
      type: "FAMILY",
      title: "Family Fun Getaway",
      description:
        "Kids stay and eat for free! Enjoy complimentary access to our family-friendly activities, including nature walks, Japanese storytelling sessions, and traditional crafts workshops.",
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="relative flex h-svh items-center justify-center overflow-hidden">
        <img
          src="/background-upscaled.jpeg"
          className="pointer-events-none h-full w-full select-none object-cover"
        ></img>
        <p className="absolute text-nowrap text-5xl font-bold text-lightBlue opacity-50 mix-blend-lighten md:text-7xl lg:text-8xl">
          YUME YOKUJO
        </p>
        <p className="absolute text-center font-playfair text-3xl text-white md:text-5xl lg:text-6xl">
          Where Dreams <br></br> Meet Tranquility
        </p>

        <BookingDetailsHero />
      </section>

      <section className="flex flex-col items-center">
        <div className="mt-16 grid max-w-5xl grid-cols-1 gap-12 px-6 md:mt-24 md:grid-cols-2 lg:mt-32">
          <div className="flex h-fit max-w-xl flex-col">
            <p className="font-medium text-lightBlue">ABOUT US</p>
            <p className="mt-1 text-xl font-semibold leading-tight md:mt-2 md:text-2xl lg:text-3xl">
              Welcome To <br></br> Yume Yokujo Retreat
            </p>
            <p className="mt-6 text-base leading-tight text-black/50 md:mt-8 md:text-lg lg:mt-9">
              Whether you seek a peaceful retreat to recharge your spirit, a
              romantic getaway with your loved one, or an unforgettable
              adventure in the heart of Japan, Yume Yokujo Oasis Retreat invites
              you to embark on a journey of serenity and discovery.
            </p>
            <img
              src="signature.png"
              className="mt-9 w-[200px] opacity-40 md:mt-11 md:w-[250px] lg:mt-12"
            />
          </div>

          <div className="grid h-fit max-w-[400px] grid-cols-2 grid-rows-2 gap-4 justify-self-center md:justify-self-end">
            <img
              src="about1.jpg"
              className="col-span-2 h-[200px] w-full rounded-3xl object-cover"
            />
            <img
              src="about3.jpg"
              className="h-[200px] w-full rounded-3xl object-cover"
            />
            <img
              src="about2.jpg"
              className="h-[200px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="mb-12 mt-16 flex w-full flex-wrap justify-center gap-16 px-6 md:mb-16 md:mt-24 lg:mb-24">
          <div className="flex flex-col items-center justify-center">
            <TramFront className="size-9 text-lightBlue md:size-11 lg:size-12" />
            <p className="mt-4 text-center text-base leading-tight md:text-lg lg:text-xl">
              Transportation
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ShowerHead className="size-9 text-lightBlue md:size-11 lg:size-12" />
            <p className="mt-4 text-center text-base leading-tight md:text-lg lg:text-xl">
              Spa & Wellness
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Utensils className="size-9 text-lightBlue md:size-11 lg:size-12" />
            <p className="mt-4 text-center text-base leading-tight md:text-lg lg:text-xl">
              Restaurant
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Drama className="size-9 text-lightBlue md:size-11 lg:size-12" />
            <p className="mt-4 text-center text-base leading-tight md:text-lg lg:text-xl">
              Cultural Experiences
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TentTree className="size-9 text-lightBlue md:size-11 lg:size-12" />
            <p className="mt-4 text-center text-base leading-tight md:text-lg lg:text-xl">
              Outdoor Activities
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray/50">
        <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
          OUR BLOG
        </p>
        <p className="mt-1 text-xl font-semibold md:mt-2 md:text-2xl lg:text-3xl">
          Latest News & Events
        </p>

        <div className="mb-12 mt-9 grid grid-cols-1 justify-center gap-4 px-6 md:mb-16 md:mt-12 md:grid-cols-2 lg:mb-24 lg:mt-16 xl:grid-cols-3">
          {newsAndEventInfoCards.map((card, index) => (
            <InfoCard key={index} blogIndex={index + 1} {...card} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center">
        <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
          OUR OFFERS
        </p>
        <p className="mt-1 text-xl font-semibold md:mt-2 md:text-2xl lg:text-3xl">
          Top offers this month
        </p>

        <div className="mb-12 mt-9 grid grid-cols-1 justify-center gap-4 px-6 md:mb-16 md:mt-12 md:grid-cols-2 lg:mb-24 lg:mt-16 xl:grid-cols-3">
          {offersInfoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
