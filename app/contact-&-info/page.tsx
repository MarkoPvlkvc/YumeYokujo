import "bootstrap-icons/font/bootstrap-icons.css";
import { Calendar, SendHorizontal, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactAndInfo = () => {
  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        CONTACT
      </p>

      <div className="mt-9 grid max-w-4xl grid-cols-1 gap-12 px-6 sm:grid-cols-[1.5fr_1fr] md:mt-12 lg:mt-16">
        <div className="w-full overflow-hidden rounded-3xl">
          <img
            src="/contact/map.png"
            className="h-full w-full object-cover grayscale"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-lg font-semibold sm:mb-3">Message Us</p>

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
            <Label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="bg-transparent placeholder:text-black/50"
            />
          </div>

          <div className="grid w-[250px] gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="bg-transparent placeholder:text-black/50"
            />
          </div>

          <Button size={"lg"} className="w-fit sm:mt-3">
            SEND
            <SendHorizontal className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        GENERAL INFORMATION
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-16 px-6 max-[500px]:justify-start md:mt-12 lg:mt-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">ADDRESS</h3>
          <p className="text-black/50">
            Yume Yokujo Oasis Retreat <br />
            1234 Serenity Lane <br />
            Miyama-cho, Sakyo-ku <br />
            Kyoto, 601-1234 <br />
            Japan
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">CALL CENTER</h3>
          <p className="text-black/50">+81-75-123-4567</p>
          <p className="text-black/50">
            <span className="font-medium text-black">mon-fri:</span> 08.00 -
            19.00
            <br />
            <span className="font-medium text-black">sat-sun:</span> 08.00 -
            14.00
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">ARRIVALS / DEPARTURES</h3>
          <p className="text-black/50">
            <span className="font-medium text-black">Check-in</span> from 14:00
            to 22:00 <br />
            <span className="font-medium text-black">Check-out</span> before
            11:00
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">E-MAIL</h3>
          <p className="text-black/50">info@yumeyokujo.jp</p>
        </div>
      </div>

      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        RATINGS
      </p>
      <p className="mt-1 text-xl font-semibold md:mt-2 md:text-2xl lg:text-3xl">
        What our guests say about us
      </p>

      <div className="mb-12 mt-9 flex flex-wrap justify-center gap-9 px-6 md:mb-16 md:mt-12 lg:mb-24 lg:mt-16">
        <div className="rounded-3xl bg-gray/50 p-6 md:p-9">
          <Quote className="size-6" />

          <p className="mt-4 max-w-sm leading-tight">
            I had the most peaceful stay at Yume Yokujo. The Sakura apartment
            was beautifully decorated, capturing the essence of cherry blossoms
            perfectly. The serene environment and attentive staff made my stay
            unforgettable.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <img src="/contact/r1.png" className="size-16 object-cover"></img>

            <div className="flex flex-col">
              <p className="font-medium leading-5">Emily Tanaka</p>
              <p className="text-sm leading-5 text-black/50">Guest</p>
            </div>

            <div className="mb-auto ml-auto flex gap-1">
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gray/50 p-6 md:p-9">
          <Quote className="size-6" />

          <p className="mt-4 max-w-sm leading-tight">
            Yume Yokujo is a true gem. The Mizu apartment provided a calm and
            rejuvenating escape from my hectic schedule. The hot spring retreat
            was a fantastic bonus, offering a perfect blend of relaxation and
            luxury.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <img src="/contact/r2.png" className="size-16 object-cover"></img>

            <div className="flex flex-col">
              <p className="font-medium leading-5">Michael Ito</p>
              <p className="text-sm leading-5 text-black/50">Guest</p>
            </div>

            <div className="mb-auto ml-auto flex gap-1">
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
              <Star className="size-4 fill-black" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactAndInfo;
