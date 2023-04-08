import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image from 'next/image';

function SliderOne() {

    return (
        <div id="section" className='w-full h-[500px] my-[2rem] relative
        before:content-[""] before:z-10 before:block before:w-full before:h-[500px] before:left-0 before:bottom-0 before:right:-0 before:top-0 before:bg-[url("/img/wp6439840.png")] before:bg-top before:bg-no-repeat before:bg-cover 
        after:content-[""] after:absolute after:w-full after:z-10 after:h-[500px] after:left-0 after:bottom-0 after:right:-0 after:top-0 after:bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] after:opacity-[0.8]
        '>
            <div id='games' className='absolute w-full flex flex-col items-center justify-center -mt-[400px] z-50'>
                {/* title */}
                <h1 className='text-[2.1rem] text-white font-bold mb-[1.2rem]'>PLAYSTATION GAMES</h1>
                {/* sliders */}
                <Swiper id='sliderOne'
                    breakpoints={{
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        776: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={true} modules={[Navigation]} className="mySwiper h-[300px] w-[87%] mx-auto">

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/pubg.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>PUBg</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/VALHALLA.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$30</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>VALHALLA</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/CTR_Nitro.jpg' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$20</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>ctr nitro</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/Days_Gone.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>Days Gone</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/devil_may_cry.jpg' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>Devil May Cry-5</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/sekiro_shadows.jpg' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>sekiro shadows</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/show19MLB.jpg' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>THE SHOW 19</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/GTA_V.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>GTA V</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/elden_ring.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$25</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>elden ring</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/God_of_War.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$30</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>God of War</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/Horizon.jpg' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>$35</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>Horizon</h6>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='max-h-[300px] bg-white shadow-md rounded-[10px]'>
                        <div className='w-full h-full relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                            <div className='w-full h-full'>
                                <Image src='/img/genshin_impact.png' alt='banner-images' width={240} height={300} className='w-full h-full object-cover rounded-[10px]' />
                            </div>
                            {/* overlay contents */}
                            <div id="card_overlayContent" className='w-full h-[184px] bg-black absolute bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                {/* prices */}
                                <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>FREE</span></h1>
                                <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, deleniti?
                                </p>
                                <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>genshin impact</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SliderOne