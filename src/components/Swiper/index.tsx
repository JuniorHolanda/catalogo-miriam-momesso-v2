'use client';

import { SBanner } from "./swiper.style";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Holiday} from "@/utils/interfaces";
import Image from "next/image";

type PropsHoliday = {
  holiday: Holiday;
}



export default function SwiperComponent( {holiday} : PropsHoliday) {    

    return (

        <SBanner>
            <Swiper 
                className="swiper-container"
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                spaceBetween={20}
                // controla a quantidade de slides com base na quantidade de produtos filtrados e tambem com base na tela se é molbile, ou tablet ou desktop
                slidesPerView={1.5}
                grabCursor={true}
            >
                {holiday.gallery?.map((item, i) => (
                    <SwiperSlide className="swiper-itens" key={i}>
                        <Image
                            src={item.img}
                            alt={item.altImg}
                            width={1200}
                            height={700}
                        />
                    </SwiperSlide>
                ))}

                {/* Setas de navegação */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
            </Swiper>
        </SBanner>
    )
} 