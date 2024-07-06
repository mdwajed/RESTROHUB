"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative pt-8">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            src="/assets/home/01.jpg"
            alt="Image 1"
            width={1280}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/02.jpg"
            alt="Image 2"
            width={1280}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/03.png"
            alt="Image 3"
            width={1280}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/04.jpg"
            alt="Image 4"
            width={1280}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/05.png"
            alt="Image 5"
            width={1280}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/06.png"
            alt="Image 6"
            width={1280}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/home/01.jpg"
            alt="Image 1"
            width={80}
            height={50}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/02.jpg"
            alt="Image 2"
            width={80}
            height={50}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/03.png"
            alt="Image 3"
            width={80}
            height={50}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/04.jpg"
            alt="Image 4"
            width={80}
            height={50}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/05.png"
            alt="Image 5"
            width={80}
            height={50}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/home/06.png"
            alt="Image 6"
            width={80}
            height={50}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
