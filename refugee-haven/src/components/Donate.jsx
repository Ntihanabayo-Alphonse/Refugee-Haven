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
        <div className="donation-section py-16">
            <h2 className='text-3xl text-[#1B3A57] font-bold text-center mb-14'>Join Us in Making a Difference</h2>
            <div className="donation-container relative">
                <div className="donation-bg h-[500px] w-full">
                    <img className='h-full w-full object-cover' src="/images/donate-bg.jpg" alt="donate background" />
                </div>
                <div className="donation-card absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2  w-1/3 p-16 rounded-xl bg-[#F2F2F2]">
                    <h1 className='text-3xl text-[#333333] font-bold mb-8'>They Need Your Help!!</h1>
                    <p className='text-xl mb-4'>Your contribution brings safety, stability, and hope to refugee families.</p>
                    <p className='text-xl mb-8'>Donate with kindness. Every amount donated by you counts.</p>
                    <DonateBtn />
                </div>
            </div>
        </div>
       {location.pathname === "/donate" && (<Footer />)} 
    </>
  )
}

export default Donate