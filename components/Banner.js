import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div id='banner' className='relative xl:h-[500px] h-[400px] w-full before:content-[""] before:z-10 before:block before:w-full xl:before:h-[500px] before:h-[400px] before:bg-fixed before:left-0 before:bottom-0 before:right:-0 before:top-0 before:bg-[url("/img/BackgroundBanner1.png")] before:bg-center before:bg-no-repeat before:bg-cover 
        after:content-[""] after:absolute after:w-full after:z-10 xl:after:h-[500px] after:h-[400px] after:left-0 after:bottom-0 after:right:-0 after:top-0 after:bg-gradient-to-r after:from-[#ff8c0f] after:to-[#ffc21c] after:opacity-[0.9]
        '>
            <div className='absolute xl:-mt-[470px] md:-mt-[390px] -mt-[330px] z-50 w-full flex items-center justify-between'>
                {/* left sides */}
                <div className='md:w-[45%] w-full h-full flex items-start flex-col xl:pl-[5rem] md:pl-[3rem] pl-[1.5rem]'>
                    <h1 className='font-black xl:text-[5rem] text-[3rem] mb-[1rem] text-white'>Fifa 2023</h1>
                    <p className='text-white xl:text-[16px] text-[14px] md:w-full w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis nesciunt corrupti facilis iure veritatis quod corporis quas amet, repellendus assumenda itaque dignissimos voluptatum saepe voluptate laudantium alias tenetur doloribus deserunt nemo tempora esse at.</p>
                </div>
                {/* right sides */}
                <div className='w-[55%] h-full md:flex hidden items-start'>
                    <div className='relative -bottom-[100px] w-full'>
                        <Image src='/img/BannerImg.png' alt='banner-images' width={500} height={400} className='w-full lg:h-[400px] h-[300px] object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner