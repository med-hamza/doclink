import React from 'react'
import boxData from '../../utils/databoxes'
import { Link } from 'react-router-dom'
const BodyHome = () => {
    return (
        <>
            <div className=' w-full py-10 mb-5'>
                <div className='container mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-8'>
                    <div className=' w-4/5 mx-auto'>
                        <div className='flex items-start justify-start gap-5'>
                            <div className=' flex-1 w-32'>
                                <p className=' text-bluedoc text-5xl font-poppins font-light'> Quality Health Made
                                    with <span className=' font-semibold'> DocLink </span> Simple </p>
                                <p className=' text-primary font-thin text-base'>It is the journey that takes you to new destinations
                                    every day with endless possibilities of life on the back
                                    of happiness, energy, and hope.</p>
                            </div>
                            <div className='space-y-8 '>
                                {/* <div className='flex items-center justify-end gap-3'>
                                {boxData.slice(0, 2).map((item) => (
                                    <Link key={item.title} to={item.link} className='bg-lighter p-3 rounded-lg 
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                                        <img src={item.picture} alt="Book Ambulance" className=' w-32 h-32' />
                                        <p className=' text-sm font-medium text-black text-center mt-1'>{item.title}</p>
                                    </Link>
                                ))}
                            </div> */}
                                <div className='flex items-center justify-end gap-3'>
                                    {boxData.slice(1, 5).map((item) => (
                                        <Link key={item.title} to={item.link} className='bg-lighter p-3 rounded-lg
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                                            <img src={item.picture} alt="Book Ambulance" className=' w-32 h-32' />
                                            <p className=' text-sm font-medium text-black text-center mt-1'>{item.title}</p>
                                        </Link>
                                    ))}
                                </div>
                                {/* <div className='flex items-center justify-end gap-3'>
                                {boxData.slice(5, 9).map((item) => (
                                    <Link key={item.title} to={item.link} className='bg-lighter p-3 rounded-lg
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                                        <img src={item.picture} alt="Book Ambulance" className=' w-32 h-32' />
                                        <p className=' text-sm font-medium text-black text-center mt-1'>{item.title}</p>
                                    </Link>
                                ))}
                            </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyHome
