import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationBar from './NavigationBar'

const PageBanner = () => {
    const location  = useLocation()
  return (
    <>
        <NavigationBar />
        <div className="page_banner h-[70vh] relative">
            <div className="page_banner-bg"></div>
            {location.pathname === "/programs" ? (<h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-4xl text-3xl text-[#FFFFFF] font-bold text-center'>Programs</h1>) : (<h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-[#FFFFFF] font-bold text-center'>Donate</h1>)}
        </div>
    </>
  )
}

export default PageBanner