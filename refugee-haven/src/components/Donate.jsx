import React from 'react'
import DonateBtn from './DonateBtn'
import PageBanner from './PageBanner'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'

const Donate = () => {
    const location = useLocation()
  return (
    <>
       {location.pathname === "/donate" && (<PageBanner />)} 
        <div className="py-16">
            <h2 className='sm:text-3xl text-2xl text-[#1B3A57] font-bold text-center mb-14'>Join Us in Making a Difference</h2>
            <div className="relative">
                <div className="h-[500px] w-full">
                    <img className='h-full w-full object-cover' src="/images/donate-bg.jpg" alt="donate background" />
                </div>
                <div className="absolute top-1/2 md:left-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  xl:w-1/3 lg:w-2/5 md:w-1/2 w-[90%] p-10 xl:p-14 md:p-12 rounded-xl bg-[#F2F2F2]">
                    <h1 className='lg:text-3xl text-2xl text-center md:text-start text-[#333333] font-bold mb-8'>They Need Your Help!!</h1>
                    <p className='lg:text-xl text-lg md:mb-4 mb-3'>Your contribution brings safety, stability, and hope to refugee families.</p>
                    <p className='lg:text-xl text-lg mb-8'>Donate with kindness. Every amount donated by you counts.</p>
                    <DonateBtn />
                </div>
            </div>
        </div>
       {location.pathname === "/donate" && (<Footer />)} 
    </>
  )
}

export default Donate