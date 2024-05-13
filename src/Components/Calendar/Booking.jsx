import React, { useState } from 'react';
import { format } from 'date-fns';
import Modal from '../Modal/Modal';
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const Booking = ({ selectedTime, itemData }) => {
    const [bookingClicked, setBookingClicked] = useState(false);
    const [openmodal, setopenModal] = useState(false);
    const handleBookingClick = () => {
        setBookingClicked(true);
        setopenModal(true)
    };

    return (
        <div className=' mt-4 text-right'>
            <button
                className="px-8 py-1.5 bg-bluedoc text-white border-1 rounded-md" onClick={handleBookingClick} disabled={!selectedTime}>
                Book Appointments
            </button>
            <Modal
                open={openmodal}
                onClose={() => setopenModal(false)}
                title="shedule"
            >
                {bookingClicked && selectedTime && (
                    <div className=' w-[500px]'>
                        <div className=" flex gap-4">
                            <div>
                                <img src={`${window.location.origin}/images/${itemData?.picture}.png`}
                                    className=' w-32 h-32 picappointment'
                                />
                            </div>
                            <div className=''>
                                <p className='font-medium  text-left'>{itemData.name}</p>
                                <p className='font-medium text-left'>{itemData.title}</p>
                            </div>


                        </div>
                        <div className=' w-full flex items-center justify-between bg-[#D6E8FC] p-2 mt-4 rounded-md'>
                            <div className='  text-bluedoc font-medium flex items-center gap-1'>
                                <IoCalendarOutline className=' font-medium  text-lg' />
                                On{' '}{format(selectedTime, "EEE, dd, yyy")}
                            </div>
                            <div className=' text-bluedoc flex font-medium items-center gap-1'>
                                <IoMdTime className=' text-lg font-medium' />
                                At{' '}{format(selectedTime, "HH:mm")}
                            </div>
                        </div>
                        <div className='flex items-center justify-end gap-4  mt-4'>
                            <div>
                                <button
                                    onClick={() => setopenModal(false)}
                                    className="px-8 py-1.5 bg-[#F2F8FE] border-2 border-[#D6E8FC]  text-[#185FA0] border-1 rounded-md">
                                    Cancel
                                </button>
                            </div>
                            <div>  <button
                                className="px-8 py-1.5 bg-bluedoc border-2  border-bluedoc text-white border-1 rounded-md">
                                Pay Now
                            </button>

                            </div>

                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Booking;
