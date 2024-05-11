import React from 'react'
import boxData from '../../utils/databoxes'
import { Link } from 'react-router-dom'
const BodyHome = () => {
    return (
        <>
            <div className=' w-full py-10 mb-5'>
                <div className='container mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-8'>
                    <div className=' w-full lg:w-4/5 mx-auto'>
                        <div className=' block md:flex md:items-center md:justify-between lg:flex lg:items-start lg:justify-between gap-5'>
                            <div className=' flex-1'>
                                <p className=' text-bluedoc text-5xl font-poppins font-light'> Quality Health Made
                                    with <span className=' font-semibold'> DocLink </span> Simple </p>
                                <p className=' text-primary font-thin text-base'>It is the journey that takes you to new destinations
                                    every day with endless possibilities of life on the back
                                    of happiness, energy, and hope.</p>
                            </div>
                            <div className=' mt-8 md:mt-0 lg:mt-0 space-y-8 '>
                                <div className=' grid grid-cols-2  lg:flex lg:items-center lg:justify-end gap-5 lg:gap-3'>
                                    {boxData.slice(1, 5).map((item) => (
                                        <Link key={item.title} to={item.link} className='bg-lighter p-3 rounded-lg
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                                            <img src={item.picture} alt="Book Ambulance" className=' w-32 h-32' />
                                            <p className=' text-sm font-medium text-black text-center mt-1'>{item.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyHome
