import { serviceCards } from '@/data/serviceCards'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import Link from 'next/link'
import Image from 'next/image';

const ServiceCardsSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="background-color: ${
            index === 0 ? '#175883' : '#3990CE'
          };"></span>`;
        },
      }}
      effect="creative"
      loop
      creativeEffect={{
        prev: {
          translate: ['-220%', 0, -500],
          rotate: [0, 0, -20]
        },
        next: {
          translate: ['220%', 0, -500],
          rotate: [0, 0, 20],
        }
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000}
      modules={[Pagination, Autoplay, EffectCreative]}
      className='xl:h-[500px] h-[420px] w-[360px]'
    >
      {serviceCards.slides.map((slide, index) => {
        return <SwiperSlide key={`slide-${index}`}>
          <div className='relative flex items-center justify-center overflow-hidden rounded-3xl group  h-[350px] xl:h-[400px] bg-background shadow-[0px_0px_20px_1px_rgba(57,144,206,0.75)] m-6'>
            <div className="relative flex items-center justify-center overflow-hidden group p-6 h-[350px] xl:h-[400px]">
              <div className="flex flex-col">
              <Image
                src={slide.image}
                width={80}
                height={80}
                alt='Card image'
                className='self-center mb-4'
              />
                <div className="xl:text-2xl text-2xl xl:mb-6 mb-2 font-medium">{slide.title}</div>
                <div className="text-gray-400 text-sm xl:text-base">{slide.subtitle}</div>
              </div>
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
              <Link href={slide.path}>
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="uppercase delay-100 translate-y-[60px] font-semibold">Learn</div>
                  <div className="translate-y-[500%] group-hover:translate-y-[60px] transition-all duration-300 delay-150 uppercase font-semibold">More</div>
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-[60px] transition-all duration-300 delay-200 font-semibold">
                    <BsArrowRight/>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default ServiceCardsSlider