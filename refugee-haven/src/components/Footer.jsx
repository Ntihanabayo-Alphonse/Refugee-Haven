import React from 'react'
import refugeeHavenLogo from "/refugee-haven.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <div className="footer flex justify-between flex-col sm:flex-row px-28 py-16 bg-[#333333]">
                <div className="organization-details w-[300px]">
                    <div className="logo h-20 w-20 bg-[#E9E4D3] rounded-full">
                        <Link to="/"><img className='w-full h-full  object-cover' src={refugeeHavenLogo} alt="refugee haven logo" /></Link>
                    </div>
                    <p className='text-[#E9E4D3] my-8'>Refugee Haven is a compassionate, community-centered organization dedicated to empowering refugees and displaced individuals on their journey to rebuilding lives.</p>
                    <div className="social-links">
                        <a href='/' className='border border-[#E9E4D3] rounded-full px-2 py-2 mr-4 text-lg duration-500 hover:bg-[#F4A261]'><i className='text-[#E9E4D3] fa fa-facebook'></i></a>
                        <a href='/' className='border border-[#E9E4D3] rounded-full px-2 py-2 mr-4 text-lg duration-500 hover:bg-[#F4A261]'><i className='text-[#E9E4D3] fa fa-instagram'></i></a>
                        <a href='/' className='border border-[#E9E4D3] rounded-full px-2 py-2 mr-4 text-lg duration-500 hover:bg-[#F4A261]'><i className='text-[#E9E4D3] fa fa-twitter'></i></a>
                        <a href='/' className='border border-[#E9E4D3] rounded-full px-2 py-2 mr-4 text-lg duration-500 hover:bg-[#F4A261]'><i className='text-[#E9E4D3] fa fa-linkedin'></i></a>
                    </div>
                </div>

                {/* Quick links */}
                <ul className='quick-links'>
                    <h4 className='font-bold text-white mb-3 text-xl'>Quick Links</h4>
                    <li className='my-3'><Link to="/" className='py-4 text-[#F4A261] hover:underline'>Home</Link></li>
                    <li className='my-3'><Link to="/programs" className='py-4 text-[#F4A261] hover:underline'>Programs</Link></li>
                    <li className='my-3'><Link to="/donate" className='py-4 text-[#F4A261] hover:underline'>Donate</Link></li>
                </ul>

                {/* Contact Us */}
                <div className="contact-us">
                    <h4 className='font-bold text-white mb-3 text-xl'>Contact Us</h4>
                    <p className='text-[#E9E4D3] mb-4'><i className='mr-3 text-[#F4A261] fa fa-location'></i> Kyaka II Refugee Settlement <br /> <span className='ml-8 text-sm text-[#d6d6d6]'>Bukere, Kyegegwa</span></p>
                    <p className='text-[#E9E4D3] mb-4'><i className='mr-3 text-[#F4A261] fa fa-phone'></i> +256 709 247 206</p>
                    <p className='text-[#E9E4D3] mb-4'><i className='mr-3 text-[#F4A261] fa fa-envelope'></i> refugeehaven@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer