"use client";

import { useState } from "react";

import Button from "../components/Button.tsx";
import ShoeCard from "../components/ShoeCard.tsx";
import { arrowRight } from "../assets/icons/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import { statistics, shoes } from "../constants.ts";

export default function Hero(): JSX.Element {
  const [image, setImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container w-full min-h-screen flex gap-10 xl:flex-row flex-col justify-center"
    >
      <div className="relative xl:w-2/5 w-full max-xl:padding-x pt-28 flex flex-col justify-center items-start">
        <p className="text-xl font-monserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative lg:z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button iconUrl={arrowRight}>Show Now</Button>
        <div className="w-full flex justify-start items-start flex-wrap mt-20 gap-16">
          {statistics.map((statistic) => {
            return (
              <div key={statistic.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {statistic.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {statistic.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={image}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => {
            return (
              <div key={shoe.thumbnail} className={shoe.thumbnail}>
                <ShoeCard
                  shoe={shoe}
                  onImageSelected={(img) => setImage(img)}
                  currentImage={image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
