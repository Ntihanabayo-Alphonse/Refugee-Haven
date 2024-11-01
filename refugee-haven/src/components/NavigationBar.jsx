import { Link } from 'react-router-dom'
import refugeeHavenLogo from '/refugee-haven.png'
import { useState, useEffect } from 'react'
import DonateBtn from './DonateBtn'

const NavigationBar = () => {
  const [ scrolling, setScrolling ] = useState(false)
  const [ menuOpen, setMenuOpen ] = useState(false)

      // Handle the scroll event on the window
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // The scroll handling function on the y-axis
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true)
        } else {
            setScrolling(false)
        }
    }

  return (
    <>

    {/* Navigation Bar */}
        <nav className={scrolling || menuOpen ? "flex justify-between sm:items-center flex-col sm:flex-row items-start px-16 md:px-20 sm:px-6 py-2 fixed w-full z-[1000] bg-[#1B3A57] duration-500" : "flex justify-between sm:items-center flex-col sm:flex-row items-start px-16 md:px-20 sm:px-6 py-4 fixed w-full z-50 duration-500 "}>
            <div className="logo h-14 w-14 bg-[#E9E4D3] rounded-full">
                <Link to="/"><img className='w-full h-full  object-cover' src={refugeeHavenLogo} alt="refugee haven logo" /></Link>
            </div>
            <span className='text-white text-2xl sm:hidden absolute right-16 top-7' onClick={() => {setMenuOpen(!menuOpen)}}><i className="fa fa-bars"></i></span>
            <ul className={`sm:flex justify-between items-center flex-col sm:flex-row ${menuOpen ? 'flex' : 'hidden'} w-full sm:w-auto py-2 sm:py-0`}>
                <li className='mb-3 sm:mb-0'><Link to="/" className='px-6 py-4 text-[#F4A261] font-bold'>Home</Link></li>
                <li className='mb-3 sm:mb-0'><Link to="/programs" className='px-5 py-4 text-[#E9E4D3] font-bold hover:text-[#F4A261] duration-500'>Programs</Link></li>
                <li className='sm:mr-8 mb-3 sm:mb-0'><Link to="/donate" className='px-5 py-4 text-[#E9E4D3] font-bold hover:text-[#F4A261] duration-500'>Donate</Link></li>
                <DonateBtn />
            </ul>
        </nav>
    </>
  )
}

export default NavigationBar