import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageBanner from './PageBanner'
import ImpactMap from './ImpactMap'

const Programs = () => {
    const location = useLocation()
    return (
        <>
            <PageBanner />
            <div className="programs px-28 py-16">
                <h2>Our Programs</h2>
                <p>Refugee Haven offers tailored programs designed to support each step on the journey to a new life</p>
                <div className="programs-container grid grid-cols-3 gap-4">
                    <div className="program1">
                        <span><i className='fa fa-people-roof'></i></span>
                        <h3>Safe Housing</h3>
                        <p>Providing secure housing options and assistance for stability and peace of mind.</p>
                    </div>
                    <div className="program1">
                        <span><i className='fa fa-school'></i></span>
                        <h3>Education & Skills Training</h3>
                        <p>Empowering refugees with skills for employment and integration into new communities.</p>
                    </div>
                    <div className="program1">
                        <span><i className='fa fa-brain'></i></span>
                        <h3>Mental Health & Wellness</h3>
                        <p>Offering counseling and mental health services to foster resilience and well-being.</p>
                    </div>


                    {location.pathname === "/programs" ? (
                        <>
                            <div className="program1">
                                <span><i className='fa fa-hands-holding-child'></i></span>
                                <h3>Family Reunification Support</h3>
                                <p>Helping families separated by conflict or displacement reunite with their loved ones.</p>
                            </div>
                            <div className="program1">
                                <span><i className='fa fa-handshake'></i></span>
                                <h3>Cultural Orientation and Integration</h3>
                                <p>Guiding refugees through cultural differences and helping them navigate daily life in their new community.</p>
                            </div>
                            <div className="program1">
                                <span><i className='fa fa-paintbrush'></i></span>
                                <h3>Art Therapy & Creative Expression</h3>
                                <p>Offering art therapy sessions and creative workshops as a form of emotional healing.</p>
                            </div>
                        </>) : (
                        <Link to="/programs"><button>Explore more</button></Link>
                    )
                    }
                </div>
                {/* Impact Section */}
                <div className="impact-section px-32 py-16">
                                <h2>Your Impact at a Glance</h2>
                                <div className="map-container">
                                    <ImpactMap />
                                </div>
                            </div>
            </div>

        </>
    )
}

export default Programs