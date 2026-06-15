"use client";

import { useProducts } from "@/contexts/Product.context";

import {
  SContainerCard,
  SContainerHoliday,
  SContainerInfoHoliday,
  ScontainerInput,
  SContainerResponseSearch,
  SformInSection,
  SImage,
  SLink,
  SLottie,
  SMotionCard,
  SMotionInput,
  SMotionSwiper,
  SMotionTitle,
  Ssection,
  Stitle,
} from "./searchDesktop.styles";
import CardProduct from "../Cards/CardProduct";
import holiday from "@/data/holiday.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lottie from "lottie-react";
import animationData from '@/Lotties/gatinho-corta-fio.json'
import { useProductSearch } from "@/hooks/searchProducts";


export default function SearchSection() {
  const products = useProducts();
  const {
  text,
  productsFiltered,
  notFound,
  controllerInput,
} = useProductSearch(products);
  const haveContent = productsFiltered.length > 0;


  return (
    <Ssection>
      <SformInSection $props={haveContent}>
        {!haveContent && (
          <SMotionTitle
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <Stitle>Sim, Temos o seu brinde!</Stitle>
          </SMotionTitle>
        )}
        <SMotionInput
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          <ScontainerInput $haveContent={(haveContent || notFound)}>
            <label htmlFor="search">Digite sua busca</label>
            <input
              type="text"
              name="q"
              id="search"
              placeholder="Pesquisar produtos 🔎"
              value={text}
              onChange={controllerInput}
            />
          </ScontainerInput>
        </SMotionInput>
        <SContainerHoliday>
          <Swiper
            spaceBetween={15}
            loop={holiday.length > 5}
            modules={[Autoplay, FreeMode]}
            freeMode
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={8000}
            slidesPerView={5}
            grabCursor
          >
            {holiday.map((data, i) => (

              <SwiperSlide key={data.id}>
                <SMotionSwiper
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    damping: 13,
                    stiffness: 100,
                    delay: i * .2
                  }}
                >
                  <SLink href={`categoria/holiday/${data.slug}`}>
                    <SImage
                      className="container-img-holiday"
                      src={data.icon ?? ""}
                      alt={data.altImg ?? ""}
                      width={400}
                      height={400}
                    />
                    <SContainerInfoHoliday>
                      <h2>{data.category}</h2>
                    </SContainerInfoHoliday>
                  </SLink>
                </SMotionSwiper>
              </SwiperSlide>
            ))}
          </Swiper>
        </SContainerHoliday>

        {(haveContent || notFound) && (
          <SContainerResponseSearch>
            <SContainerCard>
              {
                productsFiltered.map((item, i) => (
                  <SMotionCard key={item._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      damping: 13,
                      stiffness: 100,
                      delay: i * .02
                    }}
                  >
                    <CardProduct product={item} />
                  </SMotionCard>
                ))
              }
              {
                notFound && (
                  <SLottie>
                    <h2>Não encontramos nada para {text}</h2>
                    <p>Procure algo como bolsa, mochila, necessaire... </p>
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      style={{
                        width: 350,
                        height: 350,
                      }}
                    />
                  </SLottie>
                )
              }
            </SContainerCard>
          </SContainerResponseSearch>
        )}

      </SformInSection>
    </Ssection>
  );
}
