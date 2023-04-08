import { cards } from '@/pages/api/Cards';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function GameCategorySection() {
    const [isActiveTab, setIsActiveTab] = useState(1);

    const tabsList = [
        {
            id: 1,
            name: 'popular',
        },
        {
            id: 2,
            name: 'new',
        },
        {
            id: 3,
            name: 'with discount',
        }
    ];

    const [cardsList, setCardList] = useState(cards);

    return (
        <div id='store' className='w-full h-full mt-[3rem] md:p-[1rem_3rem] p-[1rem_1.5rem]'>
            <h1 className='xl:text-[40px] text-[32px] font-bold text-center'>GAME CATALOG</h1>

            {/* cards */}
            <div className='w-full h-full'>
                {/* tab list */}
                <div className='w-full h-max flex items-center justify-center gap-[20px] my-[2rem]'>
                    {
                        tabsList?.map((ele) => {
                            return (
                                <button onClick={() => setIsActiveTab(ele.id)} type='button' key={ele.id} className={` w-max whitespace-nowrap capitalize font-semibold border-2 border-[#ff8c0f] text-[14px] rounded-[5px] p-[0.4rem_0.8rem] ${isActiveTab === ele.id ? 'bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] text-white' : 'text-[#ff8c0f] bg-white'}`}>{ele.name}</button>
                            )
                        })
                    }
                </div>

                {/* cards list */}
                <div className='w-full h-full '>

                    {
                        cardsList?.map((ele) => {
                            const { id, gameList } = ele;

                            if (id === isActiveTab) {
                                return (
                                    <div key={ele.id} className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:justify-normal justify-center gap-[20px] items-center'>
                                        {
                                            gameList?.map((game) => {
                                                const { price, title, imgSrc, video, desc } = game;
                                                return (
                                                    <div key={game.id} className='w-[260px] mx-auto h-[360px] relative group rounded-[10px] shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500'>
                                                        <div className='w-full h-full group-hover:hidden'>
                                                            <Image src={imgSrc} alt='banner-images' width={240} height={360} className='w-full h-full object-cover rounded-[10px]' />
                                                        </div>
                                                        {/* video */}
                                                        <div className='w-full h-full group-hover:block'>
                                                            <video preload='true' autoPlay loop muted className='w-full h-full object-cover'>
                                                                <source src={video} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        {/* overlay contents */}
                                                        <div id="card_overlayContent" className='w-full h-[164px] bg-black absolute group-hover:bottom-0 left-0 right-0 p-[50px_20px_20px]' style={{ transition: 'all 0.5s ease-in-out' }}>
                                                            {/* prices */}
                                                            <h1 className='text-[1.2rem] text-white font-bold'>Price : <span className='text-[#2ecc71]'>{price}</span></h1>
                                                            <p className='my-[0.5rem] text-[12px] text-[#aaa]'>
                                                                {desc}
                                                            </p>
                                                            <h6 className='text-[14px] font-bold text-[#ff8c0f] uppercase'>{title}</h6>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default GameCategorySection