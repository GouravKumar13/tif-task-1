import React from 'react'
import AboutSectionImage from '../../Assets/aboutsection.png'
const About = () => {
    return (
        <div className=' grid  md:grid-cols-2 mt-80  bg-[#F0F1F7] md:aboutSectionBg'>
            <div className='  hidden md:flex w-[384px] h-[468px] '>
                <img src={ AboutSectionImage } alt="about section " className=' object-contain md:ml-[100px] w-full h-full' />
            </div>
            <div className='flex flex-col justify-center gap-5 md:gap-10 items-center md:items-start  p-10 my-16 md:my-0 md:p-0'>
                <h1 className='text-[26px] md:text-[45px]  text-[#0E2368] font-semibold '>About Us</h1>
                <div className='md:w-2/3'>

                    <p className='text-[11px] md:text-[15px]  text-[#444957] text-center md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                </div>
                <button className='bg-[#E23744]  md:w-[25%] text-[11px] md:text-[16px] rounded-3xl text-white px-5 md:px-0 py-2'>Read More</button>

            </div>
            <div></div>

        </div>
    )
}

export default About
