import React from "react";
import { Link } from "react-router-dom";

import zx9Mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../../assets/home/desktop/image-speaker-zx9.png";

import yx1Mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";

export default function Products() {
  return (
    <div className="section-padding mt-[7.5em] tablet:mt-[6em] desktop:mt-[10.5em] flex flex-col space-y-6 tablet:space-y-8 desktop:space-y-12">
       
      <section
        className="bg-accent rounded-lg overflow-hidden relative flex flex-col items-center justify-center text-center py-[3.4375em] px-6 text-light tablet:py-[3.25em] desktop:flex-row desktop:pt-[6em] desktop:pb-0 desktop:gap-[13.6%] desktop:h-[35rem] desktop:justify-start"
      >
        <div className="relative desktop:w-1/2 desktop:flex desktop:items-end desktop:justify-center">
          <picture>
            <source srcSet={zx9Desktop} media="(min-width: 769px)" />
            <source srcSet={zx9Tablet} media="(min-width: 376px)" />
            <img
              className="relative z-10 w-[172px] tablet:w-[197px] desktop:w-full desktop:max-w-[410px] desktop:translate-y-1"
              alt="A png of zx9 speaker"
              src={zx9Mobile}
            />
          </picture>
          <div className="zx9-circles z-0" />
        </div>

        <div
          className="relative z-10 flex flex-col items-center gap-6 mt-8 tablet:gap-6 desktop:items-start desktop:text-left desktop:w-1/2 desktop:max-w-[350px] desktop:mt-0"
        >
          <h1
            className="text-h1-mobile font-bolder max-w-[200px] leading-[40px] tracking-[1.29px] tablet:text-h1-tablet tablet:max-w-[261px] tablet:leading-[58px]"
          >
            ZX9 SPEAKER
          </h1>
          <p className="text-body max-w-[280px] tablet:max-w-[349px] opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            to="/zx9-speaker"
            className="inline-block bg-dark text-light hover:bg-[#4c4c4c] py-[15px] px-[31px] uppercase text-subtitle font-bold tracking-[1px] transition-colors mt-2 tablet:mt-4"
          >
            see product
          </Link>
        </div>
      </section>

       
      <section
        className="rounded-lg bg-cover bg-center h-[320px] flex flex-col justify-center bg-[image:var(--zx7-mobile)] pl-6 tablet:pl-[3.875em] desktop:pl-[5.9375em] responsive-background-container"
      >
        <h4 className="text-h4 font-bolder tracking-wide-md mb-8">
          ZX7 SPEAKER
        </h4>
        <Link
          to="/zx7-speaker"
          className="inline-block bg-transparent w-fit border border-dark text-dark py-[15px] px-[31px] uppercase text-subtitle font-bold tracking-[1px] hover:bg-dark hover:text-light transition-colors"
        >
          see product
        </Link>
      </section>

       
      <section className="flex flex-col gap-6 min-[835px]:grid min-[835px]:grid-cols-2 min-[835px]:gap-[11px] desktop:gap-[30px]">
        <picture>
          <source srcSet={yx1Desktop} media="(min-width: 835px)" />
          <source srcSet={yx1Tablet} media="(min-width: 376px)" />
          <img
            className="w-full h-full object-cover rounded-lg"
            alt="a png of yx1 earphones"
            src={yx1Mobile}
          />
        </picture>

        <div
          className="bg-grey rounded-lg flex flex-col justify-center p-6 h-[200px] tablet:h-full min-[835px]:pl-[2.5625em] desktop-lg:pl-[5.9375em]"
        >
          <h4 className="text-h4 font-bolder tracking-wide-md mb-8">
            YX1 EARPHONES
          </h4>
          <Link
            to="/yx1-earphones"
            className="inline-block bg-transparent w-fit border border-dark text-dark py-[15px] px-[31px] uppercase text-subtitle font-bold tracking-[1px] hover:bg-dark hover:text-light transition-colors"
          >
            see product
          </Link>
        </div>
      </section>
    </div>
  );
}
