import React from 'react'

function FooterSection() {
    return (
        <div id="section" className='w-full max-h-[500px] mt-[2rem] relative
    before:content-[""] before:z-10 before:block before:w-full before:h-[500px] before:left-0 before:bottom-0 before:right:-0 before:top-0 before:bg-[url("/img/guardians-of-the-galaxy.jpg")] before:bg-top before:bg-no-repeat before:bg-cover 
    after:content-[""] after:absolute after:w-full after:z-10 after:h-[500px] after:left-0 after:bottom-0 after:right:-0 after:top-0 after:bg-[#0E43AB] after:opacity-[0.8]
    '>
            <div id="help" className='absolute flex items-center justify-center flex-col -mt-[300px] z-50 w-full h-max text-white'>
                <h1 className='text-[41px] font-bold'>SUBCRIBE</h1>
                <h3 className='mb-[1rem] font-bold text-[1.18rem]'>TO THE NEWSLETTER</h3>
                <p className='text-[#ccc] text-[12px] mb-[1rem] text-center lg:w-[30%] md:w-[60%] w-[83%] mx-auto'>Lorem ipsum dolor sit amet, lorem minus consectetur adipisicing elit. Cupiditate minus
                    aliquid impedit
                    culpa fugiat deserunt.</p>

                <div className='lg:w-[30%] md:w-[60%] w-[80%] mx-auto relative flex'>
                    {/* inputs */}
                    <input type='text' className='w-full p-[10px_20px] bg-black/60 outline-none focus:none rounded-[5px_0_0_5px] flex-1 sm:text-[16px] text-[14px]' placeholder='Enter your email' />
                    <button type='button' className='w-max p-[0_1.6rem] bg-gradient-to-r from-[#ff8c0f] to-[#ffc21c] text-white font-bold uppercase rounded-[0_5px_5px_0] sm:text-[16px] text-[14px]'>send</button>
                </div>
            </div>
        </div>
    )
}

export default FooterSection