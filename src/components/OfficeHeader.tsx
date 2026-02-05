"use client";

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'


function OfficeHeader({dataImage, dataImages}: {dataImage: string; dataImages: string[]}) {


    console.log(dataImages)

return (

    <section id="Gallery" className="-mb-[50px]">
        <div className="swiper w-full">
            <Swiper className="swiper-wrapper" 
            spaceBetween={10}
            slidesOffsetAfter={10}
            slidesOffsetBefore={10}
            slidesPerView="auto">
                <SwiperSlide className="swiper-slide !w-fit">
                    <div className="w-[700px] h-[550px] overflow-hidden">
                        <Image src={dataImage} width={700} height={550}className="w-full h-full object-cover" alt='thumbnail-cover' />
                    </div>
                </SwiperSlide>

                {dataImages.map((img, index) => (
                    <SwiperSlide key={index} className="swiper-slide !w-fit">
                        <div className="w-[700px] h-[550px] overflow-hidden">
                            <Image src={img} width={700} height={550}className="w-full h-full object-cover" alt='thumbnail-cover' />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    </section>
)
}

export default OfficeHeader