"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "../Shared/SectionTitle";

export default function Order() {
  return (
    <section className="mt-20">
      <SectionTitle
        subheading="From 11:00am to 10:00 pm"
        heading="ORDER ONLINE"
      ></SectionTitle>
      <div className="  my-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/assets/home/slide1.jpg"
              alt="slide 1"
              width={400}
              height={450}
            />
            <h2 className="text-3xl text-center -mt-12 text-[#FFFFFF]">
              SALAD
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/slide2.jpg"
              alt="slide 2"
              width={400}
              height={450}
            />
            <h2 className="text-3xl text-center -mt-12 text-[#FFFFFF]">SOUP</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/slide3.jpg"
              alt="slide 3"
              width={400}
              height={450}
            />
            <h2 className="text-3xl text-center -mt-12 text-[#FFFFFF]">
              PIZZA
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/slide4.jpg"
              alt="slide 4"
              width={400}
              height={450}
            />
            <h2 className="text-3xl text-center -mt-12 text-[#FFFFFF]">
              DESSERT
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/slide5.jpg"
              alt="slide 5"
              width={400}
              height={450}
            />
            <h2 className="text-3xl text-center -mt-12 text-[#FFFFFF]">
              DRINKS
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/slide5.jpg"
              alt="slide 5"
              width={400}
              height={450}
            />
            <h2 className="text-3xl text-center -mt-12 text-[#FFFFFF]">
              OFFERED
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
