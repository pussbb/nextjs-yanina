"use client";

import Image from 'next/image';
import GreenCheck from '@/app/components/GreenCheck';

import React from 'react';

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const service = [
    {
        src: '/imgs/IMG_2774.JPG',
        width: 650,
        height: 350,
    },
    {
        src: '/imgs/IMG_0831.JPG',
        width: 650,
        height: 350,
    },
    {
        src: '/imgs/IMG_8197.jpeg',
        width: 650,
        height: 350,
    },
    {
        src: '/imgs/photo_2023-11-01_21-20-53.jpg',
        width: 650,
        height: 350,
    }
]
// photo_2023-11-01_21-20-53.jpg

const YaninaInfoSection = () => {

    const maxImageHeight = Math.max(...service.map((item) => item.height))

    return (
        <section className={`section bg-theme-light`}>
            <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                    {/* Carousel */}
                    <div className={`service-carousel md:order-1`} style={{ minHeight: maxImageHeight, }}>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            pagination={
                                service.length > 1 ? { clickable: true } : false
                            }
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            init={true}
                        >
                            {/* Slides */}
                            {service?.map((slide, index) => (
                                <SwiperSlide key={index} style={{ }}>
                                    <img loading="lazy" src={slide.src} alt="" width={slide.width} height={slide.height} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Content */}
                    <div
                        className={`service-content mt-5 md:mt-0 md:order-2`}
                    >
                        <h2 className="font-bold leading-[40px]">
                            Чому мені довіряють.
                        </h2>
                        <p className="mt-4 mb-2">
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                {
                                    [
                                        'Вища освіта за спеціальністю «Фізична культура і спорт» за професійною кваліфікацією «Тренер-викладач»',
                                        'Більше 20 років в художній гімнастиці',
                                        '7 років діяльності тренера з художньої гімнастики',
                                        '3 роки діяльності тренера-реабілітолога',
                                        'Більше 300 щасливих вихованок'
                                    ].map((item, index) =>
                                        (<li key={`yanina-infoindex-${index}`} className={'flex items-center'}><GreenCheck />{item}</li>)
                                    )
                                }
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YaninaInfoSection