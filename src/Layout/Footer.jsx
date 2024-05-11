import React from 'react'
import Features from '../Components/body/Features'
import logo from '../assets/picture/logo.png'

const Footer = () => {
    return (
        <div>
            <Features />
            <div className='bg-[#fbfdff] p-4'>
                <img src={logo} className='m-auto mb-3' alt="doclink" />
                <p className='text-[#222222] text-sm text-center'> Copyright © 2024, Doclink. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
