import React, { useState } from 'react'

import {
    format,
} from "date-fns";
const TimeSlots = ({ timeSlots }) => {
    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeSlotClick = (time) => {
        setSelectedTime(time);
        console.log("Selected time:", time);
    };
    return (
        <div className=' grid grid-cols-4 gap-2 justify-center'>
            {timeSlots.map((time, index) => (
                <button
                    className={`border-2 border-[#185FA0] text-center p-1 text-sm rounded-md ${selectedTime === time ? 'bg-[#185FA0] text-white' : ''}`}
                    key={index}
                    onClick={() => handleTimeSlotClick(time)}
                >{format(time, "HH:mm")}</button>
            ))}
        </div>
    );
}

export default TimeSlots
