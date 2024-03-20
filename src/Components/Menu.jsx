import React from 'react'
import logo from "../assets/picture/logo.svg"
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className='container mx-auto px-4 py-4 sm:px-6 lg:px-8' >
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src={logo} alt='logo doctor' />
                        </Link>
                    </div>
                    <div className='flex  justify-center items-center gap-3'>
                        <Link to="/" className="text-primary font-poppins font-medium" > Find Doctors </Link>
                        <Link to="/" className="text-primary font-poppins font-medium"  > Medicines</Link>
                        <Link to="/" className="text-primary font-poppins font-medium" > Lab Tests</Link>
                    </div>
                    <div>
                        <div className='border b-1 border-[#0F2F64] rounded-md px-4 py-2'>
                            <div className='flex justify-center items-center gap-2'>
                                <Link to="/" className="text-primary font-poppins font-medium"> Sign In </Link>
                                <p>/</p>
                                <Link to="/" className="text-primary font-poppins font-medium"> Sign Up </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
