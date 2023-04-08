import Image from 'next/image'
import React from 'react'

function Section() {
    return (
        <div id="section" className='w-full h-[500px] my-[2rem] relative
        before:content-[""] before:z-10 before:block before:w-full before:h-[500px] before:left-0 before:bottom-0 before:right:-0 before:top-0 before:bg-[url("/img/wp6439840.png")] before:bg-top before:bg-no-repeat before:bg-cover 
        after:content-[""] after:absolute after:w-full after:z-10 after:h-[500px] after:left-0 after:bottom-0 after:right:-0 after:top-0 after:bg-[#0E43AB] after:opacity-[0.6]
        '>
            <div id='psvue' className='xl:p-[1rem_5rem] md:p-[1rem_3rem] p-[1rem_1.5rem] absolute -mt-[460px] z-50 text-white flex items-center justify-between w-full h-full'>
                {/* left side */}
                <div className='sm:w-1/2 w-full flex items-start flex-col gap-[20px]'>
                    {/* images */}
                    <Image src='/img/xboxstrock.png' alt='banner-images' width={300} height={70} className='w-max lg:h-[70px] h-[40px] object-contain' />
                    <p className='lg:text-[16px] md:text-[14px] text-[12px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quia! Architecto atque unde ab quis optio quod eaque sint labore numquam? Impedit eligendi dolorum omnis facere eveniet, incidunt architecto aliquid minima vero officia quas, culpa quis nisi perferendis voluptate repudiandae.</p>
                    <button type='button' className='uppercase border-2 border-white text-white bg-transparent rounded-[5px] p-[0.8rem_2rem] lg:text-[16px] text-[14px]'>more info</button>
                </div>

                {/* right side */}
                <div className='w-1/2 h-[280px] sm:block hidden'>
                    {/* images */}
                    <Image src='/img/xBox.png' alt='banner-images' width={300} height={280} className='w-max h-[280px] object-contain mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default Section