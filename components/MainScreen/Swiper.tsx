'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


export default function TechnologySwiper() {
    const slides = [
        "js.svg",
        "react.svg",
        "next.svg",
        "node.svg",
        "express.svg",
        "nest.svg"
    ]

    return <a> <Swiper
        className="w-full max-w-lg "
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={5}
        pagination={{ clickable: true }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        loop={true}
        centeredSlides={false}
    >
        {slides.map(slide =>
            <SwiperSlide key={slide} className="!w-14 !h-12 !mx-8">
                <Image src={'/' + slide} alt={slide} fill style={{ objectFit: "contain" }}
                    className="grayscale-50 hover:grayscale-0 transition duration-300 ease-in-out"
                />
            </SwiperSlide>
        )}
        <div className="swiper-button-next !text-white !text-md">
            <ChevronRight />
        </div>
        <div className="swiper-button-prev !text-white !text-md">
            <ChevronLeft />
        </div>
    </Swiper>
    </a>
}