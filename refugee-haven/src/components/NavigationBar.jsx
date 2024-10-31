import { Link } from 'react-router-dom'
import refugeeHavenLogo from '/refugee-haven.png'

const NavigationBar = () => {
  return (
    <>
    {/* bg-[#1b3a57] */}
    {/* Navigation Bar */}
        <nav className='flex justify-between items-center px-40 py-4 fixed w-full z-50'>
            <div className="logo h-14 w-14 bg-[#E9E4D3] rounded-full">
                <Link to="/"><img className='w-full h-full  object-cover' src={refugeeHavenLogo} alt="refugee haven logo" /></Link>
            </div>
            <ul className='flex justify-between items-center'>
                <li><Link to="/" className='px-6 py-4 text-[#F4A261] font-bold'>Home</Link></li>
                <li><Link to="/programs" className='px-5 py-4 text-[#E9E4D3] font-bold hover:text-[#F4A261] duration-500'>Programs</Link></li>
                <li><Link to="/donate" className='px-5 py-4 text-[#E9E4D3] font-bold hover:text-[#F4A261] duration-500'>Donate</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default NavigationBar