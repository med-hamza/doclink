import React from 'react'
import logo from "../assets/picture/logo.png"
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className='container mx-auto px-4 py-4 sm:px-6 lg:px-8 hidden lg:block' >
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src={logo} alt='logo doctor' />
                        </Link>
                    </div>
                    <div className='flex  justify-center items-center gap-8'>
                        <Link to="/" className="bottom-link text-black text-lg font-poppins font-medium  hover:text-bluedoc" > Find Doctors </Link>
                        <Link to="/" className="bottom-link text-black text-lg font-poppins font-medium hover:text-bluedoc"  > contact us</Link>
                        <Link to="/" className="bottom-link text-black text-lg font-poppins font-medium hover:text-bluedoc" > Help</Link>
                        <Link to="/" className="bottom-link text-black text-lg font-poppins font-medium hover:text-bluedoc" > Blogs</Link>

                    </div>
                    <div>
                        <div className=''>
                            <div className='flex justify-center items-center gap-8'>
                                <Link to="/" className="text-bluedoc font-poppins font-medium"> Sign In </Link>
                                <Link to="/" className=" px-8 py-1.5 bg-bluedoc text-white border-1 rounded-md "> Sign Up </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
