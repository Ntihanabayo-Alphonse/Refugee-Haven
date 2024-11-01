import React from 'react'
import NavigationBar from './NavigationBar'
import DonateBtn from './DonateBtn'
import Programs from './Programs'
import ImpactMap from './ImpactMap'
import Donate from './Donate'
import LatestNews from './LatestNews'
import Footer from './Footer'


const Home = () => {
    return (
        <>
            <NavigationBar />

            {/* Banner Section */}
            <div className="banner-section relative">
                <div className="banner-image"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto px-8 sm:px-0 text-center sm:text-start">
                    <h1 className='font-bold text-white lg:text-4xl sm:text-3xl text-2xl'>A Safe Haven for New Beginnings</h1>
                    <p className='text-[#E9E4D3] mb-6 text-'>Empowering Refugees to Rebuild and Thrive in Supportive Communities</p>
                    <div className="button">
                        <DonateBtn />
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 md:gap-10 lg:px-32 px-16 max-[400px]:px-10  py-24">
                <div>
                    <img className='h-full' src="/images/about-bg.jpeg" alt="About Us" />
                </div>
                <div>
                    <h2 className='md:text-3xl text-2xl text-[#1B3A57] font-bold'>About Us</h2>
                    <p className='mb-6 text-[15px] md:text-[16px]'>Refugee Haven is a compassionate, community-centered organization dedicated to empowering refugees and displaced individuals on their journey to rebuilding lives.</p>
                    <h3 className='sm:text-xl text-lg font-bold text-[#1B3A57]'>Mission</h3>
                    <p className='mb-6 ml-4 text-[15px] md:text-[16px]'>To provide safe, welcoming spaces where refugees can find resources, support, and a strong sense of belonging as they adjust to new communities.
                        <br />
                        <br />
                        At Refugee Haven, we understand that the path to a stable and fulfilling life begins with essential support, so we focus on providing housing, healthcare, education, and vocational training tailored to each individual's needs.</p>
                    <DonateBtn />
                </div>
            </div>

            {/* Programs */}
            <Programs />

            {/* Donate Section */}
            <Donate />

            {/* Latest News Section */}
            <div className="latest-news px-32 py-16 bg-[#ebfff0]">
                <h2 className='text-3xl text-[#1B3A57] font-bold text-center'>Latest News</h2>
                <div className="latestNews-container p-10">
                    <LatestNews />
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default Home