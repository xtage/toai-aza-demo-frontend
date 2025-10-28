'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Import Remix Icons

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  href: string;
  badges?: string[];
  isAzaExclusive?: boolean;
  views?: number;
  inBags?: number;
  isReadyToShip?: boolean;
}

interface ProductCarouselProps {
  title: string;
  products: any;
  filterButtons?: boolean;
  className?: string;
}

export default function ProductCarousel({ 
  title, 
  products, 
  filterButtons = false,
  className = '' 
}: ProductCarouselProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import Swiper dynamically to avoid SSR issues
    import('swiper').then((SwiperModule) => {
      // Navigation will be handled by Swiper's refs
    });
  }, []);

  return (
    <div className={`mx-auto py-4 lg:py-9 ${className}`}>
      <div className="w-full">
        <h3 className="pl-3 mb-4 text-base font-medium text-left capitalize lg:mb-6 lg:pl-0 text-azaBlackShade3 lg:text-left lg:text-2xl lg:font-medium">
          {title}
        </h3>
        
        {filterButtons && (
          <div className="flex items-center gap-4 px-3 mb-4 overflow-x-scroll lg:px-0 scrollbar-none whitespace-nowrap">
            <button className="h-8 px-4 text-xs font-medium capitalize border rounded-xl border-azaGreyShade4 !border-AzaRed text-AzaRed bg-azaBrandColor9">
              Closest Match
            </button>
            <button className="h-8 px-4 text-xs font-medium capitalize border rounded-xl border-azaGreyShade4 text-azaBlackShade4 hover:border-AzaRed hover:text-AzaRed transition-colors">
              Aza Exclusive
            </button>
          </div>
        )}
        
        <div className="w-full relative">
          <div className="sliderWrapper lg:-mx-4 relative">
            <Swiper
              modules={[Navigation, FreeMode]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                swiper.params.navigation.prevEl = prevRef.current;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              freeMode={true}
              slidesPerView={'auto'}
              spaceBetween={16}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                },
              }}
              className="relative"
            >
              {products.map((product: Product) => (
                <SwiperSlide key={product.id} className="!w-[272px]">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows - Only visible when needed */}
            <div 
              ref={prevRef}
              className="custom-prev custom_slider_arrows absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white border border-azaGreyShade4 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 pointer-events-none swiper-button-disabled"
            >
              <i className="ri-arrow-left-s-line w-5 h-5 text-azaBlackShade3" />
            </div>
            
            <div 
              ref={nextRef}
              className="custom-next custom_slider_arrows absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black hover:bg-white border border-azaGreyShade4 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 pointer-events-none swiper-button-disabled"
            >
              <i className="ri-arrow-right-s-line w-5 h-5 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden group lg:mb-1 lg:px-4" data-test-id="plpCard">
      <div>
        <div className="relative pt-[150%] overflow-hidden rounded-xl">
          <a>
            <Image
              alt={product.name}
              src={product.image}
              fill
              className="object-contain transition-all duration-300 delay-300 ease-in-out opacity-100 group-hover:scale-105"
              sizes="272px"
            />
          </a>
        </div>
        
        <a>
          <div className="mt-3 flex flex-col lg:flex-col-reverse space-y-[2px] lg:mt-4">
            <div className="space-y-[2px]">
              <h3 className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-medium lg:leading-5 tracking-[0.2px] text-azaBlackShade3 lg:text-[13px] line-clamp-1">
                    {product.brand}
                  </p>
                </div>
                <p className="font-normal lg:leading-5 tracking-[0.2px] text-azaBlackShade4 text-[11px] lg:text-[13px] line-clamp-1">
                  {product.name}
                </p>
              </h3>
              <div className="flex items-center line-clamp-2 mt-[2px] space-x-[4px] tracking-[0.2px] lg:leading-5 font-medium">
                <p className="text-[11px] text-azaBlackShade3 font-medium lg:text-[13px] text-ellipsis">
                  ₹{product.price.toLocaleString()}
                </p>
                {product.originalPrice && (
                  <span className="mb-px line-through font-extralight text-[11px] text-ellipsis text-azaBlackShade4 lg:text-[13px]">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <span className="mb-px text-[11px] text-ellipsis line-clamp-1 lg:text-[13px] text-azaGreen_6">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>
            
            <ProductBadges product={product} />
          </div>
        </a>
      </div>
    </div>
  );
}

function ProductBadges({ product }: { product: Product }) {
  const hasBadges = product.isAzaExclusive || product.inBags || product.isReadyToShip || product.views;
  
  if (!hasBadges) {
    return null;
  }

  return (
    <div className="scale-[0.75] lg:scale-[.85] flex items-start gap-2 lg:gap-3 flex-wrap origin-top-left">
      {product.isReadyToShip && (
        <div className="rounded h-[30px] text-nowrap inline-flex items-center justify-center space-x-2 text-xs font-semibold bg-sectionBG px-3">
          <i className="block w-3 h-4 bgImages bg-[position:-213px_-334px]"></i>
          <span>Ready to ship</span>
        </div>
      )}
      
      {product.isAzaExclusive && (
        <div className="rounded h-[30px] text-nowrap flex items-center justify-center space-x-2 text-xs font-semibold bg-sectionBG px-3">
          <span><i className="not-italic text-azaBrandColor">Aza</i> Exclusive</span>
        </div>
      )}
      
      {product.inBags && product.inBags >= 50 && (
        <div className="rounded h-[30px] text-nowrap flex items-center justify-center space-x-2 text-xs font-semibold bg-sectionBG px-3">
          <i className="w-[14px] h-[14px] bgImages block bg-[position:-176px_-335px]"></i>
          <span>In 50+ Shopping Bags</span>
        </div>
      )}
      
      {product.views && product.views >= 200 && (
        <div className="rounded h-[30px] text-nowrap flex items-center justify-center space-x-2 text-xs font-semibold bg-sectionBG px-3">
          <i className="w-[14px] h-[14px] bgImages block bg-[position:-203px_-351px]"></i>
          <span>200+ Views</span>
        </div>
      )}
    </div>
  );
}