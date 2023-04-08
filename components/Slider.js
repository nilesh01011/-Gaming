import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image from 'next/image';

function Slider() {
    return (
        <div id="ps5">
            <Swiper id='slider' navigation={true} modules={[Navigation]} className="mySwiper md:h-[500px] h-[600px] md:w-[80%] w-[95%] mx-auto">
                <SwiperSlide>
                    <div className='w-full h-full flex md:flex-row flex-col items-center justify-between px-[5rem]'>
                        {/* left sides */}
                        <div className='md:w-1/2 w-full'>
                            {/* images */}
                            <Image src='/img/PS5.png' alt='banner-images' width={300} height={400} className='w-max md:h-[400px] h-[300px] object-contain mx-auto' />
                        </div>
                        {/* right sides */}
                        <div className='md:w-1/2 w-full flex items-start flex-col'>
                            {/* title */}
                            <h1 className='text-[coral] text-[2rem] font-bold'>Play<span className='text-black'>Station 5</span></h1>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] my-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum
                                magnam
                                voluptatibus consequatur vitae, eum sed libero perspiciatis accusantium
                                quia!
                            </p>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] mb-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <h4 className='text-[1.2rem] mb-[1rem] text-black font-bold'>NOW STARTING AT <span className='text-[#2ecc71]'>$899.99</span></h4>
                            {/* buttons */}
                            <button type='button' className='h-max p-[0.5rem_1.5rem] shadow-md rounded-[5px] bg-gradient-to-tr from-[#ff8c0f] to-[#ffc21c] text-white uppercase'>shop system</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full flex md:flex-row flex-col items-center justify-between px-[5rem]'>
                        {/* left sides */}
                        <div className='md:w-1/2 w-full'>
                            {/* images */}
                            <Image src='/img/xbox_details.png' alt='banner-images' width={300} height={400} className='w-max md:h-[400px] h-[300px] object-contain mx-auto' />
                        </div>
                        {/* right sides */}
                        <div className='md:w-1/2 w-full flex items-start flex-col'>
                            {/* title */}
                            <h1 className='text-[coral] text-[2rem] font-bold'>X<span className='text-black'>Box</span></h1>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] my-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum
                                magnam
                                voluptatibus consequatur vitae, eum sed libero perspiciatis accusantium
                                quia!
                            </p>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] mb-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <h4 className='text-[1.2rem] mb-[1rem] text-black font-bold'>NOW STARTING AT <span className='text-[#2ecc71]'>$1099.99</span></h4>
                            {/* buttons */}
                            <button type='button' className='h-max p-[0.5rem_1.5rem] shadow-md rounded-[5px] bg-gradient-to-tr from-[#ff8c0f] to-[#ffc21c] text-white uppercase'>shop system</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full flex md:flex-row flex-col items-center justify-between px-[5rem]'>
                        {/* left sides */}
                        <div className='md:w-1/2 w-full'>
                            {/* images */}
                            <Image src='/img/PS5.png' alt='banner-images' width={300} height={400} className='w-max md:h-[400px] h-[300px] object-contain mx-auto' />
                        </div>
                        {/* right sides */}
                        <div className='md:w-1/2 w-full flex items-start flex-col'>
                            {/* title */}
                            <h1 className='text-[coral] text-[2rem] font-bold'>Play<span className='text-black'>Station 5</span></h1>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] my-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum
                                magnam
                                voluptatibus consequatur vitae, eum sed libero perspiciatis accusantium
                                quia!
                            </p>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] mb-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <h4 className='text-[1.2rem] mb-[1rem] text-black font-bold'>NOW STARTING AT <span className='text-[#2ecc71]'>$899.99</span></h4>
                            {/* buttons */}
                            <button type='button' className='h-max p-[0.5rem_1.5rem] shadow-md rounded-[5px] bg-gradient-to-tr from-[#ff8c0f] to-[#ffc21c] text-white uppercase'>shop system</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full flex md:flex-row flex-col items-center justify-between px-[5rem]'>
                        {/* left sides */}
                        <div className='md:w-1/2 w-full'>
                            {/* images */}
                            <Image src='/img/xbox_details.png' alt='banner-images' width={300} height={400} className='w-max md:h-[400px] h-[300px] object-contain mx-auto' />
                        </div>
                        {/* right sides */}
                        <div className='md:w-1/2 w-full flex items-start flex-col'>
                            {/* title */}
                            <h1 className='text-[coral] text-[2rem] font-bold'>X<span className='text-black'>Box</span></h1>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] my-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum
                                magnam
                                voluptatibus consequatur vitae, eum sed libero perspiciatis accusantium
                                quia!
                            </p>
                            <p className='text-[#aaa] md:text-[14px] text-[12px] mb-[1rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <h4 className='text-[1.2rem] mb-[1rem] text-black font-bold'>NOW STARTING AT <span className='text-[#2ecc71]'>$1099.99</span></h4>
                            {/* buttons */}
                            <button type='button' className='h-max p-[0.5rem_1.5rem] shadow-md rounded-[5px] bg-gradient-to-tr from-[#ff8c0f] to-[#ffc21c] text-white uppercase'>shop system</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider