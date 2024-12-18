import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageBanner from './PageBanner'
import ImpactMap from './ImpactMap'
import Footer from './Footer'

const Programs = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname === "/programs" && (<PageBanner />)}
            <div className="programs lg:px-28 md:px-24 px-14 py-16 bg-[#F2F2F2]">
                <h2 className='sm:text-3xl text-2xl text-[#1B3A57] font-bold text-center'>Our Programs</h2>
                <p className='text-center text-[15px] sm:text-[16px] font-bold'>Refugee Haven offers tailored programs designed to support each step on the journey to a new life</p>
                <div className="programs-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-14 my-16">
                    <div className="program1 bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                        <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-people-roof'></i></span>
                        <h3 className="font-bold sm:text-xl mb-4 mt-10 text-lg">Safe Housing</h3>
                        <p className="text-[15px] sm:text-[16px] ">Providing secure housing options and assistance for stability and peace of mind.</p>
                    </div>
                    <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                        <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-school'></i></span>
                        <h3 className="font-bold sm:text-xl mb-4 mt-10 text-lg">Education & Skills Training</h3>
                        <p className="text-[15px] sm:text-[16px] ">Empowering refugees with skills for employment and integration into new communities.</p>
                    </div>
                    <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                        <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-brain'></i></span>
                        <h3 className="font-bold sm:text-xl mb-4 mt-10 text-lg">Mental Health & Wellness</h3>
                        <p className="text-[15px] sm:text-[16px] ">Offering counseling and mental health services to foster resilience and well-being.</p>
                    </div>


                    {location.pathname === "/programs" ? (
                        <>
                            <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                                <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-hands-holding-child'></i></span>
                                <h3 className="font-bold sm:text-xl mb-4 mt-10 text-lg">Family Reunification Support</h3>
                                <p className="text-[15px] sm:text-[16px] ">Helping families separated by conflict or displacement reunite with their loved ones.</p>
                            </div>
                            <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                                <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-handshake'></i></span>
                                <h3 className="font-bold sm:text-xl mb-4 mt-10 text-lg">Cultural Orientation and Integration</h3>
                                <p className="text-[15px] sm:text-[16px] ">Guiding refugees through cultural differences and helping them navigate daily life in their new community.</p>
                            </div>
                            <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                                <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-paintbrush'></i></span>
                                <h3 className="font-bold sm:text-xl mb-4 mt-10 text-lg">Art Therapy & Creative Expression</h3>
                                <p className="text-[15px] sm:text-[16px] ">Offering art therapy sessions and creative workshops as a form of emotional healing.</p>
                            </div>
                        </>) : (
                        <Link to="/programs"><button className='bg-[#5A8D66] py-2 sm:px-10 px-6 rounded-[50px] sm:text-lg text-white font-bold block mx-auto my-auto'>Explore more</button></Link>
                    )
                    }
                </div>
            </div>

            {location.pathname === "/programs" && (
                <>
                  {/* Impact Section */}
                  <div className="impact-section lg:px-32 sm:px-16 px-6 py-16">
                                <h2 className='md:text-3xl sm:text-2xl text-xl text-[#1B3A57] font-bold text-center mb-12'>Your Impact at a Glance</h2>
                                <div className="map-container">
                                    <ImpactMap />
                                </div>
                            </div>

                            {/* Footer */}
                            <Footer />
                </>
            )}

        </>
    )
}

export default Programs