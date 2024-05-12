import React, { useState } from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import useIsopen from '../../hooks/useIsopen';
import Modal from '../Modal/Modal';
import { PiMapPinThin } from "react-icons/pi";
import { PiPhoneLight } from "react-icons/pi";
import { PiPhoneFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";

const Info = ({ itemData, availitemData }) => {
    const [open, setOpen] = useState(false)


    const isOpen = useIsopen(availitemData ? availitemData.schedule : []);
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaySchedule = availitemData ? availitemData.schedule.find(slot => slot.day === currentDay) : null;
    const startTim = todaySchedule ? todaySchedule.start_time : '';
    const endTim = todaySchedule ? todaySchedule.end_time : '';


    return (
        <div>
            {itemData ? <>
                <div className=' hidden lg:block'>
                    <h2 className=' text-2xl font-semibold text-primary mb-4'>Contact</h2>
                    <div className='mb-4'>
                        <button
                            onClick={() => setOpen(true)}
                            className=' pl-2 pr-6 py-1.5 bg-bluedoc text-white border-1 flex items-center justify-start gap-3 rounded-md'><PiPhoneLight />
                            Call now </button>
                    </div>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="call"
                    >
                        <div className='w-[400px]'>
                            <div className=" flex gap-4">
                                <div>
                                    {/* <img src={picDoctor} alt={itemData && itemData.name}
                                    className='picappointment' /> */}
                                </div>
                                <div className=''>
                                    <p className='font-medium  text-left'>{itemData.name}</p>
                                    <p className='font-light text-left'>{itemData.title}</p>
                                    <div className='flex items-center gap-1 mt-1'>
                                        <PiMapPinThin className=' text-lg text-primary' />
                                        <p className='font-light text-xs text-left'> {itemData.address} </p>
                                    </div>
                                    <div className='mt-6  mb-5 m-auto'>
                                        <h3 className='mb-4  font-medium' >Doctor's Contact Information Provided Below :</h3>
                                        <div className='  mx-auto inline-block'>
                                            <a href={`tel:${itemData.phone}`} className=' text-center  px-4 flex items-center justify-start gap-3 py-1.5 bg-white border rounded-md border-primary'>
                                                <PiPhoneFill />
                                                {itemData.phone}
                                                <MdOutlineKeyboardArrowRight />
                                            </a>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>

                    </Modal>
                </div>
                <div>
                    <p className='border-b border-lighter mb-4'></p>
                </div>
                <h2 className=' lg:block hidden text-2xl font-semibold text-primary mb-4'>Location</h2>
                <div className="lg:hidden  block rounded-md shadow-lg text-center py-4">
                    <p className="text-xs text-black ">
                        {" "}
                        Here is your route to get to:
                    </p>
                    <span className="text-sm text-bluedoc ">
                        {" "}
                        {itemData.address}
                    </span>
                </div>
                <IoMdArrowDropdown className="text-center -mt-[0.70rem] text-white text-3xl mx-auto" />
                <GoogleMaps mapId="doctormap" lat={itemData.lat} lng={itemData.lng} />
                <p className=' lg:block hidden text-primary text-xl mt-4  font-medium'> {itemData.address} </p>
                <div>
                    {isOpen ? (
                        <div className=' lg:mt-1 mt-4'>
                            <p className='font-semibold text-[#07AE60]'>Open now
                                <span className='text-[#536288] text-lg font-medium'> Today : {startTim} - {endTim}</span> </p>

                        </div>
                    ) : (
                        <div className='lg:mt-1 mt-2'>
                            <span className=' font-semibold text-red-600'>Closed</span>
                        </div>
                    )}
                </div>


            </> : <p>No data.. </p>}

        </div>
    )
}

export default Info
