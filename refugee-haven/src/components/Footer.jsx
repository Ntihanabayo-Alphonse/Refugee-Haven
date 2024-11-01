import React from 'react'
import refugeeHavenLogo from "/refugee-haven.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <div className="footer">
                <div className="organization-details">
                    <div className="logo h-14 w-14 bg-[#E9E4D3] rounded-full">
                        <Link to="/"><img className='w-full h-full  object-cover' src={refugeeHavenLogo} alt="refugee haven logo" /></Link>
                    </div>
                    <p>Refugee Haven is a compassionate, community-centered organization dedicated to empowering refugees and displaced individuals on their journey to rebuilding lives.</p>
                    <div className="social-links">
                        <span><i className='fa fa-facebook'></i></span>
                        <span><i className='fa fa-instagram'></i></span>
                        <span><i className='fa fa-twitter'></i></span>
                    </div>
                </div>

                {/* Quick links */}
                <ul className='quick-links'>
                    <h4>Quick Links</h4>
                    <li><Link to="/" className='px-6 py-4 text-[#F4A261] font-bold'>Home</Link></li>
                    <li><Link to="/programs" className='px-5 py-4 text-[#E9E4D3] font-bold hover:text-[#F4A261] duration-500'>Programs</Link></li>
                    <li><Link to="/donate" className='px-5 py-4 text-[#E9E4D3] font-bold hover:text-[#F4A261] duration-500'>Donate</Link></li>
                </ul>

                {/* Contact Us */}
                <div className="contact-us">
                    <h4>Contact Us</h4>
                    <p><i className='fa fa-location'></i> Kyaka II Refugee Settlement <br /> <span>Bukere, Kyegegwa</span></p>
                    <p><i className='fa fa-phone'></i> +256 709 247 206</p>
                    <p><i className='fa fa-mail'></i> refugeehaven@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer