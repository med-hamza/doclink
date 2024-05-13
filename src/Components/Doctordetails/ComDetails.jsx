import React from 'react'
import Tabs from '../tab/Tabs'
import CalenderWeek from '../Calendar/CalenderWeek';
import DoctorDetailsContent from './DoctorDetailsContent';
import { PiPhoneFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const ComDetails = ({ itemData, availitemData }) => {

    const pageName = 'details'

    return (
        <div className=' w-11/12 lg:w-4/5 mx-auto flex flex-wrap gap-3'>
            <div className=' w-full lg:w-3/5'>
                <div className='mb-6'>
                    <h1 className='text-2xl font-semibold mb-2  block lg:hidden  text-primary'> {itemData?.name} </h1>
                    <p className='font-light lg:hidden  mb-6  text-black'>{itemData?.title}</p>
                    <div className=' lg:hidden mx-auto inline-block'>
                        <a href={`tel:${itemData?.phone}`} className=' text-center   px-4 flex items-center justify-start gap-3 py-1.5 bg-white border rounded-md border-primary'>
                            <PiPhoneFill />
                            Call now
                            <MdOutlineKeyboardArrowRight />
                        </a>
                    </div>
                </div>
                <div className='mb-4 lg:px-0 lg:py-0  bg-white lg:bg-lighter  lg:shadow-sm lg:rounded-md  shadow-md px-4 rounded-xl  py-4 font-light text-sm'>
                    <div className='flex  gap-2'>
                        <div className='hidden rounded-s-md lg:flex w-full bg-white '>
                            <img src={`${window.location.origin}/images/${itemData?.picture}.png`}
                                className=' w-full'
                            />
                        </div>

                        {itemData ? (
                            <DoctorDetailsContent itemData={itemData} isBox={false} />
                        ) : (
                            <h3>No data</h3>
                        )}

                    </div>
                </div>
                <div className='mt-2 mb-2'>
                    <Tabs itemData={itemData} availitemData={availitemData} />
                </div>
                <div>

                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-2/6'>
                <CalenderWeek itemData={itemData} availitemData={availitemData} pageName={pageName} />
            </div>
        </div>
    )
};

export default ComDetails
