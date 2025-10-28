'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface CuratedItem {
  id: string;
  title: string;
  href: string;
  images: string[];
}

interface CuratedCarouselProps {
  title: string;
  items: CuratedItem[];
}

export default function CuratedCarousel({ title, items }: CuratedCarouselProps) {
  return (
    <div className="py-4 mx-auto lg:py-9">
      <h3 className="pl-3 lg:mb-[14px] text-base font-medium text-left text-azaBlackShade3 lg:text-left lg:text-2xl capitalize lg:pl-0">
        {title}
      </h3>
      
      <div className="mt-4 lg:mt-6 sliderWrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.curated-next',
            prevEl: '.curated-prev',
          }}
          slidesPerView={'auto'}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className="relative"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <CuratedCard item={item} />
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Arrows */}
          {/* <div className="curated-prev custom_slider_arrows !left-[0.8rem]">
            <i className="block bgImages w-5 h-5 -ml-0.5" style={{ backgroundPosition: '-476px -132px' }}></i>
          </div>
          <div className="curated-next custom_slider_arrows !right-14">
            <i className="block w-5 h-5 bgImages" style={{ backgroundPosition: '-496px -132px' }}></i>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
}

function CuratedCard({ item }: { item: CuratedItem }) {
  return (
    <div className="flex-[0_0_75%] sm:flex-[0_0_60%] lg:mr-8 rounded-xl md:flex-[0_0_33%] lg:flex-[0_0_32%] min-w-[220px] mt-[2px] mb-[6px] h-auto cursor-pointer overflow-hidden">
      <a>
        <div className="relative grid items-center grid-cols-2">
          <div className="relative flex-1 h-full pt-[150%]">
            <Image
              alt="productImage"
              src={item.images[0]}
              fill
              unoptimized
              className="absolute top-0 left-0 object-cover w-full h-full"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="flex-1 h-full pt-[150%] relative">
            <Image
              alt="productImage"
              src={item.images[1]}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-0 flex items-center justify-center w-full min-h-16 lg:min-h-20 bg-gradient-to-b from-black/0 to-black/50">
            <p className="text-sm text-center text-white line-clamp-1 lg:text-lg">
              {item.title}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}