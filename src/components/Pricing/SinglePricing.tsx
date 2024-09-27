"use client";

import axios from "axios";
import SingleOffer from "./SingleOffer";

export default function SinglePricing({ price }: any) {
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div
      className={`w-full sm:w-1/2 lg:w-1/3 ${price?.nickname === "Professional" ? "dark:border-[#2E333D] sm:border-l lg:border-x" : ""}`}
    >
      <div className="pb-20 pt-10 text-center">
        <div className="border-b dark:border-[#2E333D]">
          <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
            {price?.nickname}
          </h3>
          <p className="pb-10 text-base text-dark-text">{price?.subtitle}</p>
        </div>
        <div className="border-b py-10 dark:border-[#2E333D]">
          <h3 className="mb-2 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
          €{" "}
            <sup className="-mb-2 text-[55px]">
              {" "}
              {(price.unit_amount / 100).toLocaleString("en-US", {
                currency: "EUR",
              })}{" "}
            </sup>
            /{price?.nickname.toLowerCase()}
          </h3>
          <div className="text-base font-light text-gray-500">+22% VAT</div>

          {/* <p className="mx-auto max-w-[300px] text-base text-dark-text">
            Lorem ipsum dolor sit ametion consectetur adipisc elit.
          </p> */}

          {/* <ul className="mx-auto max-w-[300px] text-base text-dark-text">
            {price.bulletPoints.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul> */}
        </div>
        <div className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
          {price?.nickname === "Day" && (
            <>
              <SingleOffer text="Flexible Seat" status="active" />
              <SingleOffer text="9-6 Access" status="active" />
              <SingleOffer text="Meeting Rooms" status="active" />
              <SingleOffer text="High-speed Wi-Fi" status="active" />
              <SingleOffer text="Height-adjustable Desks" status="active" />
              <SingleOffer text="KOKOMO coffee and Tea" status="active" />
              <SingleOffer text="Põhjala Tehas Discounts and Community Events" status="inactive" />
            </>
          )}
          {price?.nickname === "Week" && (
            <>
              <SingleOffer text="Fixed Seat" status="active" />
              <SingleOffer text="24/7 Access" status="active" />
              <SingleOffer text="Meeting Rooms" status="active" />
              <SingleOffer text="High-speed Wi-Fi" status="active" />
              <SingleOffer text="Height-adjustable Desks" status="active" />
              <SingleOffer text="KOKOMO coffee and Tea" status="active" />
              <SingleOffer text="Põhjala Tehas Discounts and Community Events" status="inactive" />
            </>
          )}
          {price?.nickname === "Month" && (
            <>
              <SingleOffer text="Fixed Seat" status="active" />
              <SingleOffer text="24/7 Access" status="active" />
              <SingleOffer text="Meeting Rooms" status="active" />
              <SingleOffer text="High-speed Wi-Fi" status="active" />
              <SingleOffer text="Height-adjustable Desks" status="active" />
              <SingleOffer text="KOKOMO coffee and Tea" status="active" />
              <SingleOffer text="Põhjala Tehas Discounts and Community Events" status="active" />
              {/* <SingleOffer text="Family Member for +20€/m" status="active" /> */}
            </>
          )}
        </div>
        {/* <button
          onClick={handleSubscription}
          className={`inline-flex items-center rounded px-8 py-[14px] font-heading text-base text-white duration-200 ${price?.nickname === "Professional" ? "bg-primary hover:bg-primary/90" : "bg-dark hover:bg-dark/90"}`}
        >
          Join This Plan
          <span className="pl-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="white"
              />
            </svg>
          </span>
        </button> */}
      </div>
    </div>
  );
}
