import React, { useState } from 'react'
import {
    format,
} from "date-fns";
import Booking from './Booking';
import { AiOutlineClose } from "react-icons/ai";

const TimeSlots = ({ timeSlots, itemData }) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [timeSlotClicked, setTimeSlotClicked] = useState(false)

    const handleTimeSlotClick = (time) => {
        setSelectedTime(time);
        setTimeSlotClicked(true);
    };

    const clearTime = () => {
        if (timeSlotClicked) {
            setTimeSlotClicked(false)
        }
    }


    return (
        <div>
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
                <Booking selectedTime={selectedTime} itemData={itemData} />
            </div>


        </div>
    );
}

export default TimeSlots
