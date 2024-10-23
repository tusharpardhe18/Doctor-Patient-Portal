import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* --------- Left Section --------------- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    Loren Ipsum is simply dummy text of printing and typsetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrammbled it to make a type specimen book.
                </p>
            </div>
            {/* --------- Center Section --------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>
                    COMPANY
                </p>
                <ul className='felx flex-col gap-2 text-gray-600 cursor-pointer'>
                    <li onClick={()=>{navigate('/'); scrollTo(0,0)}}>Home</li>
                    <li onClick={()=>{navigate('/about'); scrollTo(0,0)}}>About Us</li>
                    <li onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>Contact Us</li>
                    <li onClick={()=>{navigate('/'); scrollTo(0,0)}}>Privacy Policy</li>
                </ul>
            </div>
            {/* --------- Right Section --------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='felx flex-col gap-2 text-gray-600'>
                    <li>+91 - 9999999999</li>
                    <li>prescripto2024@gmail.com</li>
                </ul>

            </div>
        </div>

        {/* ---------------------------------------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer