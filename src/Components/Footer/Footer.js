import React from 'react'
import logoFoter from "../../Assets/food truck.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center py-10 mt-9' >
            <div className='w-[50%] h-[50%]'>
                <img src={ logoFoter } alt="" className='object-contain w-full h-full' />
            </div>
            <div className='flex flex-col md:flex-row justify-center  gap-2 px-2 '>
                <div>
                    <h1 className=' text-[#0E2368] font-medium text-[15px] md:text-[19px] py-3'>Contact US</h1>
                    <ul className='text-[8.76px] md:text-[14px] text-[#646874]  w-[80%] flex flex-col gap-2'>
                        <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
                        <li>example2020@gmail.com</li>
                        <li>(904)443-0343</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[15px] font-medium md:text-[19px] text-[#0E2368] py-3'>More</h1>
                    <ul className='text-[8.76px] md:text-[14px] text-[#646874] flex flex-col gap-2 '>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col-reverse gap-5 md:flex-col'>
                <div>
                    <h1 className='md:block hidden font-medium md:text-[19px] text-[#0E2368] py-3'>Social Links</h1>
                    <div className='text-[#0E2368] flex gap-3'>
                        <InstagramIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                    </div>
                </div>
                <p className='md:text-[14px] text-[9px]'>© 2022 Food Truck Example</p>
            </div>
        </div>
    )
}

export default Footer
