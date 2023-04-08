import { navList } from '@/pages/api/Navlist'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGamepad } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

function Header() {

    // hamburger button
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const handleMenuButton = () => {
        setIsOpenSidebar(true);
    }

    // nav list active
    const [isActive, setIsActive] = useState(0);

    return (
        <>
            <header className='w-full h-max fixed top-0 z-[100] xl:p-[0.7rem_5rem] p-[0.7rem_1.5rem] bg-[#0E43AB] text-white flex items-center justify-between text-[14px]'>
                {/* menu buttons */}
                <div className='lg:hidden block'>
                    <button onClick={() => handleMenuButton()} type='button'>
                        <GiHamburgerMenu size={24} />
                    </button>
                </div>
                {/* logo */}
                <div className='w-max h-full flex items-center gap-[5px]'>
                    {/* images */}
                    <Image src='/img/GamesLogo-2.png' alt='logo' width={31} height={30} className='h-[30px] w-full object-contain' />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] text-[1.2rem] font-bold'>Games</span>
                </div>
                {/* hr */}
                <div className='w-[2px] h-[27.75px] bg-[#5D87C8] rotate-[10deg] lg:block hidden'></div>
                {/* nav list */}
                <div className='lg:flex hidden items-center gap-[20px]'>
                    {
                        navList?.map((ele) => {
                            return (
                                <Link onClick={() => setIsActive(ele.id)} href={ele.link} key={ele.id} className={`uppercase text-[14px] ${isActive === ele.id && 'text-[coral] underline'} hover:text-[coral] hover:underline `}>{ele.nav}</Link>
                            )
                        })
                    }
                </div>
                {/* hr */}
                <div className='w-[2px] h-[27.75px] bg-[#5D87C8] rotate-[10deg] lg:block hidden'></div>
                {/* account and search filter */}
                <div className='lg:flex hidden items-center gap-[10px]'>
                    <span className='text-white font-bold'>My Account</span>
                    {/* buttons */}
                    <button type='button' className='text-[#0E43AB] bg-white rounded-[4px] p-[0.3rem_1.4rem] font-[600]'>Sign In</button>
                    {/* inputs */}
                    <input type='text' className='p-[4px_8px] rounded-[4px] border-[2px] border-[#5D87C8] outline-none bg-transparent' placeholder='Search' />
                </div>
                {/* hr */}
                <div className='w-[2px] h-[27.75px] bg-[#5D87C8] rotate-[10deg] lg:block hidden'></div>
                {/* cart page */}
                <div className='w-max flex items-center flex-col leading-3'>
                    <span>2</span>
                    <span>
                        <FaGamepad size={26} className='text-white' />
                    </span>
                </div>
            </header>

            {/* sidebar */}
            {
                isOpenSidebar === true &&
                <>
                    {/* overlay */}
                    <div onClick={() => setIsOpenSidebar(false)} className='w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[110] cursor-pointer'></div>
                </>
            }
            {/* contents */}
            <div className={`fixed top-0 transition-all duration-500 ${isOpenSidebar === true ? 'left-0' : '-left-[200%]'} w-[320px] h-screen bg-white z-[200] shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                {/* top cancel icons */}
                <div onClick={() => setIsOpenSidebar(false)} className='relative'>
                    <span className="text-white text-[40px] cursor-pointer absolute -top-[14px] -right-[40px]">
                        &times;
                    </span>
                </div>
                {/* account button */}
                <div className='flex items-center justify-center gap-[15px] p-[20px]'>
                    <span className='text-[#0E43AB] font-bold text-[14px]'>My Account</span>
                    {/* buttons */}
                    <button type='button' className='text-white bg-[#0E43AB] rounded-[4px] p-[0.3rem_1.2rem] font-[600] text-[14px]'>Sign In</button>
                </div>
                {/* input fields */}
                <div className='w-full h-max px-[20px]'>
                    <input type='text' className='p-[4px_8px] w-full rounded-[4px] border-[2px] border-[#5D87C8] outline-none bg-transparent' placeholder='Search' />
                </div>

                {/* menu list tabs */}
                <div className='flex flex-col items-start gap-[30px] pl-[20px] mt-[20px]'>
                    {
                        navList?.map((ele) => {
                            return (
                                <Link onClick={() => setIsOpenSidebar(false)} href={ele.link} key={ele.id} className='uppercase font-bold text-[#0E43AB] w-full'>{ele.nav}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Header