import { navList } from '@/pages/api/Navlist'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='w-full h-full bg-black flex items-center justify-between text-white lg:p-[1.2rem_5rem] md:p-[1.2rem_3rem] p-[1.2rem_1.5rem]'>
            {/* left side */}
            <div className='w-max flex items-center gap-[3px]'>
                {/* images */}
                <Image src='/img/GamesLogo-2.png' alt='banner-images' width={40} height={40} className='w-full h-[40px] object-contain' />
                <span className='font-bold'>Game</span>
            </div>

            {/* right sides */}
            <div className='w-max flex items-center md:gap-[15px] sm:gap-[10px] gap-[5px]'>
                {
                    navList?.map((ele) => {
                        return (
                            <Link href={ele.link} key={ele.id} className='uppercase hover:text-[coral] hover:underline sm:text-[16px] text-[10px]'>{ele.nav}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer