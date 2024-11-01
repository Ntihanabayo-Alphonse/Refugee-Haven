import React from 'react'
import DonateBtn from './DonateBtn'
import PageBanner from './PageBanner'

const Donate = () => {
  return (
    <>
        <PageBanner />
        <div className="donation-section py-16">
            <h2>Join Us in Making a Difference</h2>
            <div className="donation-container relative">
                <div className="donation-bg h-[500px] w-full">
                    <img className='h-full w-full object-cover' src="/images/donate-bg.jpg" alt="donate background" />
                </div>
                <div className="donation-card absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2">
                    <h1>They Need Your Help!!</h1>
                    <p>Your contribution brings safety, stability, and hope to refugee families.</p>
                    <DonateBtn />
                </div>
            </div>
        </div>
    </>
  )
}

export default Donate