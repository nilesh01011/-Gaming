import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

function SectionTwo() {
    return (
        <div id='vr' className='w-full h-[400px] mt-[4rem] lg:p-[1rem_5rem] md:p-[1rem_3rem] p-[1rem_1.5rem] flex items-center justify-center flex-col'>
            {/* title */}
            <h1 className='text-[2.2rem] font-bold mb-[3rem]'>GAMING PLATFORMS</h1>

            {/* carousel */}
            <Swiper className="mySwiper w-full h-full"
                breakpoints={{
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    776: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='w-full h-full p-[20px] flex items-start border-2 border-[#d5dbdb] group hover:bg-gradient-to-r hover:from-[#0e43ab] hover:to-[#2b5ac2] hover:border-[#0e43ab]'>
                        {/* left side */}
                        <div className='w-[166px] h-[220px]'>
                            <Image src='/img/PS5Img.png' alt='banner-images' width={166} height={220} className='w-full h-[220px] object-contain' />
                        </div>
                        {/* right side */}
                        <div className='w-1/2 flex items-start flex-col mt-[1rem]'>
                            {/* stars */}
                            <div className='flex items-center gap-[5px] -ml-[50px]'>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                            </div>
                            {/* title */}
                            <h1 className='text-[coral] text-[1.4rem] font-bold -ml-[50px]'>Play<span className='text-black group-hover:text-white'>Station</span></h1>
                            {/* discription */}
                            <p className='text-[12px] text-[#aaa] -ml-[50px] font-semibold group-hover:text-white'>
                                Lorem ipsum dolor sit amet, elit consectetur adipisicing elit. Veniam rem
                                ipsum
                                dolores, ipsum dolor.
                            </p>
                            {/* buttons */}
                            <button type='button' className='p-[0.5rem_1rem] mt-[2.8rem] ml-[1rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] rounded-[5px] text-[12px] uppercase text-white'>buy now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-full p-[20px] flex items-start border-2 border-[#d5dbdb] group hover:bg-gradient-to-r hover:from-[#0e43ab] hover:to-[#2b5ac2] hover:border-[#0e43ab]'>
                        {/* left side */}
                        <div className='w-[166px] h-[220px]'>
                            <Image src='/img/xBox.png' alt='banner-images' width={166} height={220} className='w-full h-[220px] object-contain' />
                        </div>
                        {/* right side */}
                        <div className='w-1/2 flex items-start flex-col mt-[1rem]'>
                            {/* stars */}
                            <div className='flex items-center gap-[5px] -ml-[5px]'>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                            </div>
                            {/* title */}
                            <h1 className='text-[coral] text-[1.4rem] font-bold -ml-[5px]'>X<span className='text-black group-hover:text-white'>BOX</span></h1>
                            {/* discription */}
                            <p className='text-[12px] text-[#aaa] -ml-[5px] font-semibold group-hover:text-white'>
                                Series X control
                            </p>
                            {/* buttons */}
                            <button type='button' className='p-[0.5rem_1rem] mt-[5rem] ml-[1rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] rounded-[5px] text-[12px] uppercase text-white'>buy now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-full p-[20px] flex gap-[10px] items-start border-2 border-[#d5dbdb] group hover:bg-gradient-to-r hover:from-[#0e43ab] hover:to-[#2b5ac2] hover:border-[#0e43ab]'>
                        {/* left side */}
                        <div className='w-[166px] h-[220px]'>
                            <Image src='/img/VR_playstation.png' alt='banner-images' width={166} height={220} className='w-full h-[220px] object-contain' />
                        </div>
                        {/* right side */}
                        <div className='w-1/2 flex items-start flex-col mt-[1rem]'>
                            {/* stars */}
                            <div className='flex items-center gap-[5px]'>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                            </div>
                            {/* title */}
                            <h1 className='text-black group-hover:text-white text-[1.4rem] font-bold'>Playstation</h1>
                            {/* discription */}
                            <p className='text-[32px] text-[coral] font-bold'>
                                VR
                            </p>
                            {/* buttons */}
                            <button type='button' className='p-[0.5rem_1rem] mt-[3rem] ml-[1rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] rounded-[5px] text-[12px] uppercase text-white'>buy now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-full p-[20px] flex items-start border-2 border-[#d5dbdb] group hover:bg-gradient-to-r hover:from-[#0e43ab] hover:to-[#2b5ac2] hover:border-[#0e43ab]'>
                        {/* left side */}
                        <div className='w-[166px] h-[220px]'>
                            <Image src='/img/PS5Img.png' alt='banner-images' width={166} height={220} className='w-full h-[220px] object-contain' />
                        </div>
                        {/* right side */}
                        <div className='w-1/2 flex items-start flex-col mt-[1rem]'>
                            {/* stars */}
                            <div className='flex items-center gap-[5px] -ml-[50px]'>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                            </div>
                            {/* title */}
                            <h1 className='text-[coral] text-[1.4rem] font-bold -ml-[50px]'>Play<span className='text-black group-hover:text-white'>Station</span></h1>
                            {/* discription */}
                            <p className='text-[12px] text-[#aaa] -ml-[50px] font-semibold group-hover:text-white'>
                                Lorem ipsum dolor sit amet, elit consectetur adipisicing elit. Veniam rem
                                ipsum
                                dolores, ipsum dolor.
                            </p>
                            {/* buttons */}
                            <button type='button' className='p-[0.5rem_1rem] mt-[2.8rem] ml-[1rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] rounded-[5px] text-[12px] uppercase text-white'>buy now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-full p-[20px] flex items-start border-2 border-[#d5dbdb] group hover:bg-gradient-to-r hover:from-[#0e43ab] hover:to-[#2b5ac2] hover:border-[#0e43ab]'>
                        {/* left side */}
                        <div className='w-[166px] h-[220px]'>
                            <Image src='/img/xBox.png' alt='banner-images' width={166} height={220} className='w-full h-[220px] object-contain' />
                        </div>
                        {/* right side */}
                        <div className='w-1/2 flex items-start flex-col mt-[1rem]'>
                            {/* stars */}
                            <div className='flex items-center gap-[5px] -ml-[5px]'>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                            </div>
                            {/* title */}
                            <h1 className='text-[coral] text-[1.4rem] font-bold -ml-[5px]'>X<span className='text-black group-hover:text-white'>BOX</span></h1>
                            {/* discription */}
                            <p className='text-[12px] text-[#aaa] -ml-[5px] font-semibold group-hover:text-white'>
                                Series X control
                            </p>
                            {/* buttons */}
                            <button type='button' className='p-[0.5rem_1rem] mt-[5rem] ml-[1rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] rounded-[5px] text-[12px] uppercase text-white'>buy now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-full p-[20px] flex gap-[10px] items-start border-2 border-[#d5dbdb] group hover:bg-gradient-to-r hover:from-[#0e43ab] hover:to-[#2b5ac2] hover:border-[#0e43ab]'>
                        {/* left side */}
                        <div className='w-[166px] h-[220px]'>
                            <Image src='/img/VR_playstation.png' alt='banner-images' width={166} height={220} className='w-full h-[220px] object-contain' />
                        </div>
                        {/* right side */}
                        <div className='w-1/2 flex items-start flex-col mt-[1rem]'>
                            {/* stars */}
                            <div className='flex items-center gap-[5px]'>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                                <span>
                                    <FaStar size={12} className='text-[coral]' />
                                </span>
                            </div>
                            {/* title */}
                            <h1 className='text-black group-hover:text-white text-[1.4rem] font-bold'>Playstation</h1>
                            {/* discription */}
                            <p className='text-[32px] text-[coral] font-bold'>
                                VR
                            </p>
                            {/* buttons */}
                            <button type='button' className='p-[0.5rem_1rem] mt-[3rem] ml-[1rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] rounded-[5px] text-[12px] uppercase text-white'>buy now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SectionTwo