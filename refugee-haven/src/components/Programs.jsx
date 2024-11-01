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
            <div className="programs px-28 py-16 bg-[#F2F2F2]">
                <h2 className='text-3xl text-[#1B3A57] font-bold text-center'>Our Programs</h2>
                <p className='text-center font-bold'>Refugee Haven offers tailored programs designed to support each step on the journey to a new life</p>
                <div className="programs-container grid grid-cols-3 gap-14 my-16">
                    <div className="program1 bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                        <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-people-roof'></i></span>
                        <h3 className="font-bold text-xl mb-4 mt-10">Safe Housing</h3>
                        <p>Providing secure housing options and assistance for stability and peace of mind.</p>
                    </div>
                    <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                        <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-school'></i></span>
                        <h3 className="font-bold text-xl mb-4 mt-10">Education & Skills Training</h3>
                        <p>Empowering refugees with skills for employment and integration into new communities.</p>
                    </div>
                    <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                        <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-brain'></i></span>
                        <h3 className="font-bold text-xl mb-4 mt-10">Mental Health & Wellness</h3>
                        <p>Offering counseling and mental health services to foster resilience and well-being.</p>
                    </div>


                    {location.pathname === "/programs" ? (
                        <>
                            <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                                <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-hands-holding-child'></i></span>
                                <h3 className="font-bold text-xl mb-4 mt-10">Family Reunification Support</h3>
                                <p>Helping families separated by conflict or displacement reunite with their loved ones.</p>
                            </div>
                            <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                                <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-handshake'></i></span>
                                <h3 className="font-bold text-xl mb-4 mt-10">Cultural Orientation and Integration</h3>
                                <p>Guiding refugees through cultural differences and helping them navigate daily life in their new community.</p>
                            </div>
                            <div className="bg-[#E9E4D3] shadow-lg rounded-lg p-6 text-center">
                                <span className="bg-[#FFEEE0] p-5 rounded-full"><i className='text-3xl text-[#F4A261] fa fa-paintbrush'></i></span>
                                <h3 className="font-bold text-xl mb-4 mt-10">Art Therapy & Creative Expression</h3>
                                <p>Offering art therapy sessions and creative workshops as a form of emotional healing.</p>
                            </div>
                        </>) : (
                        <Link to="/programs"><button className='bg-[#5A8D66] py-2 px-10 rounded-[50px] text-lg text-white font-bold block my-auto'>Explore more</button></Link>
                    )
                    }
                </div>
            </div>

            {location.pathname === "/programs" && (
                <>
                  {/* Impact Section */}
                  <div className="impact-section px-32 py-16">
                                <h2 className='text-3xl text-[#1B3A57] font-bold text-center'>Your Impact at a Glance</h2>
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