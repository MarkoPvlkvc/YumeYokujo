"use client";

import { CircleCheck, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Success = () => {
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amount = params.get("amount");
    const currency = params.get("currency");
    const paymentMethod = params.get("paymentMethod");
    const status = params.get("status");
    const created = params.get("created");

    if (amount && currency && paymentMethod && status && created) {
      setBookingData({
        amount,
        currency,
        paymentMethod,
        status,
        created: new Date(parseInt(created) * 1000).toLocaleString(),
      });
    }
  }, []);

  const router = useRouter();
  return (
    <main className=" bg-white font-inter">
      <div className="flex h-screen w-screen flex-row flex-wrap items-center justify-center gap-5 px-6">
        <div className="flex w-[350px] flex-col">
          <img src="/logo.png" className="h-10 w-fit"></img>
          <h1 className="mt-5 w-full text-left text-[16px] font-medium text-lightBlue">
            SUCCESS
          </h1>
          <h2 className="mt-2 text-3xl font-semibold">
            Thank you for your purchase
          </h2>
          <p className="font-regular text-l mt-3 text-left text-black/[.5]">
            Your payment went threw and you successfully reserved your stay at
            YumeYokujo hotsprings. See you at the reception!
          </p>
          <button
            onClick={() => router.push("/")}
            className="-mr-[1px] mt-10 flex h-[40px] w-full items-center justify-center text-nowrap rounded-3xl bg-darkBlue px-9 font-medium text-white transition-colors hover:bg-[#376075] lg:w-fit"
          >
            Return to site
          </button>
        </div>

        <div className="flex w-[350px] flex-col gap-5">
          <div className="flex flex-row justify-between rounded-3xl bg-[#FFF] p-5">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">€549.99</h1>
              <p className="text-black/[.5]">Payment success!</p>
            </div>

            <div className="flex items-center justify-center">
              <CircleCheck className="h-10 w-fit text-green-400" />
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl bg-[#FFF] p-5">
            <h2 className="text-xl text-black">Payment details</h2>
            <div className="flex flex-row justify-between">
              <p className="text-black/[.5]">Date</p>
              <p className="text-black">Jul 25, 2023 05:07:03 AM</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-black/[.5]">Order number</p>
              <p className="text-black">1358273547012</p>
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
              <p className="text-black">Success</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Success;
