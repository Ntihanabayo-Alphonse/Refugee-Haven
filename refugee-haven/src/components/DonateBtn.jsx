import React from 'react'
import { Link } from 'react-router-dom'

const DonateBtn = () => {
  return (
    <>
        <Link to="https://donate.stripe.com/test_7sI03fdqj6DGgRGeUU" target='_blank'><button className='bg-[#F4A261] py-2 px-10 rounded-[50px] text-lg text-white font-bold'>🤍 Donate</button></Link>
    </>
  )
}

export default DonateBtn