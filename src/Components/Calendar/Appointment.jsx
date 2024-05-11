import React, { useState } from 'react';
import { format } from 'date-fns';

const Appointment = ({ selectedTime }) => {
    const [appointmentClicked, setAppointmentClicked] = useState(false);

    const handleAppointmentClick = () => {
        setAppointmentClicked(true);
    };

    return (
        <div className=' text-right'>
            <button
                className=" mt-4 px-8 py-1.5 bg-bluedoc text-white border-1 rounded-md"
                onClick={handleAppointmentClick}
                disabled={!selectedTime}
            >
                Book Appointment
            </button>
            {appointmentClicked && selectedTime && (
                <div className="mt-4 text-center">
                    {format(selectedTime, "EEEE, MMM dd, HH:mm")}
                </div>
            )}
        </div>
    );
};

export default Appointment;
