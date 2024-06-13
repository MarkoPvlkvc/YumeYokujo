"use client";

import { CircleX, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  return (
    <main className=" bg-white font-inter">
      <div className="mb-12 mt-16 flex h-screen w-screen flex-row flex-wrap items-center justify-center gap-5 px-6 md:mb-0 md:mt-0">
        <div className="flex w-[350px] flex-col">
          <img src="/logo.png" className="h-10 w-fit"></img>
          <h1 className="mt-5 w-full text-left text-[16px] font-medium text-lightBlue">
            ERROR
          </h1>
          <h2 className="mt-2 text-3xl font-semibold">
            Your purchase did not go through
          </h2>
          <p className="font-regular text-l mt-3 text-left text-black/[.5]">
            Sorry, your purchase did not go throught due to an unknown error.
            Please try again later.
          </p>
          <div className="flex flex-col items-center gap-1 md:flex-row lg:items-start lg:gap-5">
            <button
              onClick={() => router.push("/")}
              className="-mr-[1px] mt-10 flex h-[40px] w-full items-center justify-center text-nowrap rounded-3xl bg-darkBlue px-9 font-medium text-white transition-colors hover:bg-[#376075] lg:w-fit"
            >
              Return to site
            </button>
            <button
              onClick={() => router.back()}
              className="-mr-[1px] mt-10 flex h-[40px] w-full items-center justify-center text-nowrap rounded-3xl bg-darkBlue px-9 font-medium text-white transition-colors hover:bg-[#376075] lg:w-fit"
            >
              Try again
            </button>
          </div>
        </div>

        <div className="flex w-[350px] flex-col gap-5">
          <div className="flex flex-row justify-between rounded-3xl bg-[#FFF] p-5">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">€549.99</h1>
              <p className="text-black/[.5]">Payment error!</p>
            </div>

            <div className="flex items-center justify-center">
              <CircleX className="h-10 w-fit text-red-400" />
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl bg-[#FFF] p-5">
            <h2 className="text-xl text-black">Payment details</h2>
            <div className="flex flex-row justify-between">
              <p className="text-black/[.5]">Date</p>
              <p className="text-black">Jul 25, 2023 05:07:03 AM</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-black/[.5]">Amount</p>
              <p className="text-black">€549.99</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-black/[.5]">Payment method</p>
              <p className="text-black">Credit Card</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-black/[.5]">Payment status</p>
              <p className="text-black">Error</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
