import React, { useState } from 'react'
import {
    format,
} from "date-fns";
import { AiOutlineClose } from "react-icons/ai";
import Appointment from './Appointment';

const TimeBooking = ({ timeSlots, itemData }) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [timeSlotClicked, setTimeSlotClicked] = useState(false)
    const [showTimeSlots, setShowTimeSlots] = useState(true);


    const [bookingClicked, setBookingClicked] = useState(false);
    const handleBookingClick = () => {
        setBookingClicked(true);
        setShowTimeSlots(false);
    };
    const handleTimeSlotClick = (time) => {
        setSelectedTime(time);
        setTimeSlotClicked(true);
    };

    const clearTime = () => {
        if (timeSlotClicked) {
            setTimeSlotClicked(false)
        }
    }

    const clearBook = () => {
        setShowTimeSlots(true);
        setBookingClicked(false)
    }

    return (
        <div>
            {showTimeSlots && (
                <>
                    <div className=' grid grid-cols-4 gap-2 justify-center'>
                        {timeSlots.map((time, index) => (
                            <button
                                className={`border-2 border-[#185FA0] text-center p-1 text-sm rounded-md ${selectedTime === time && timeSlotClicked ? 'bg-[#185FA0] text-white' : ''}`}
                                key={index}
                                onClick={() => handleTimeSlotClick(time)}
                                disabled={timeSlotClicked}
                            >{format(time, "HH:mm")}</button>
                        ))}

                    </div>
                    <div className='flex items-center justify-between '>
                        <div className=' mt-4'>
                            {timeSlotClicked && (
                                <button className='flex gap-2 items-center  mt-2 font-semibold text-red-600 text-xl' onClick={clearTime}>
                                    <AiOutlineClose /> Cancel
                                </button>
                            )}
                        </div>
                        <div className=' justify-end'></div>
                        <button
                            className="px-8 py-1.5 bg-bluedoc text-white border-1 rounded-md" onClick={handleBookingClick} disabled={!selectedTime}>
                            Book Appointments
                        </button>

                    </div>
                </>
            )}


            <Appointment selectedTime={selectedTime}
                itemData={itemData} bookingClicked={bookingClicked}
                handleBookingClick={handleBookingClick} clearBook={clearBook} />
        </div>
    );
}

export default TimeBooking
