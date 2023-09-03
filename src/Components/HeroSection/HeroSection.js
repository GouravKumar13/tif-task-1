import React from 'react'
import PizzaImage from "../../Assets/pizza image.png"
import logo from "../../Assets/food truck.png"
import vector from "../../Assets/Red pizza vector.png"
const HeroSection = () => {
    return (

        <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 h-screen '>
            <div className='flex px-12 flex-col justify-start gap-20 pt-5 md:order-1 order-2'>
                <div className='w-[13%] hidden md:block'>
                    <img src={ logo } alt="logo" />

                </div>
                <div className='items-center  text-center  md:items-start md:text-left flex flex-col gap-5 md:gap-8'>
                    <h1 className='font-bold text-[38px]  md:text-[63px] text-[#0E2368] leading-[46px] md:leading-[69px]'>Discover the <br /><span className=' text-[#E23744]'>Best</span> Food <br className='hidden md:block' /> And Drinks</h1>
                    <p className='font-medium text-[11px]  md:text-[16.44px] text-[#444957]'>Naturally made Healthcare Products for the <br /> better care & support of your body.</p>
                    <button className='bg-[#E23744]  md:w-[35%] text-[12px] md:text-[18px] rounded-3xl text-white px-5 py-2'>Explore Now!</button>
                </div>

            </div>

            <div className='md:order-2 h-full  w-full order-1  relative'>

                <img src={ PizzaImage } alt="pizzaImage" className='   object-cover ' />
                <img src={ vector } alt="red pizza vector " className='absolute top-0' />
                <button className='absolute text-[11px] md:text-[16px] top-3 right-3 md:top-5 md:right-10 border border-white text-white bg-opacity-0 rounded-3xl px-5 py-2'>Get In Touch</button>
            </div>

        </div>
    )
}

export default HeroSection
