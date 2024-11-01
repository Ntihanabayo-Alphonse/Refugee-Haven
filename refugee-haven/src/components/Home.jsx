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
                <div className="banner-info absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1>A Safe Haven for New Beginnings</h1>
                    <p>Empowering Refugees to Rebuild and Thrive in Supportive Communities</p>
                    <div className="button">
                        <DonateBtn />
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="about-us flex justify-between px-40 py-24">
                <div className="about-img">
                    <img src="/images/about-bg.jpeg" alt="About Us" />
                </div>
                <div className="about-info">
                    <h2>About Us</h2>
                    <p>Refugee Haven is a compassionate, community-centered organization dedicated to empowering refugees and displaced individuals on their journey to rebuilding lives.</p>
                    <h3>Mission</h3>
                    <p>To provide safe, welcoming spaces where refugees can find resources, support, and a strong sense of belonging as they adjust to new communities.
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
            <div className="latest-news px-32 py-16">
                <h2>Latest News</h2>
                <div className="latestNews-container">
                    <LatestNews />
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default Home