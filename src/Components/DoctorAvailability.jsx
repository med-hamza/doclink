import React from 'react';
import useIsopen from '../hooks/useIsopen';

const DoctorAvailability = ({ availableData }) => {

    const schedule = Array.isArray(availableData?.schedule) ? availableData.schedule : [];
    const isOpen = useIsopen(schedule);


    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaySchedule = schedule.find(slot => slot.day === currentDay) || {};



    return (
        <div>
            {isOpen ? (
                <p className='font-semibold text-[#07AE60]'>Open now - Today: {todaySchedule.start_time || 'N/A'} - {todaySchedule.end_time || 'N/A'}</p>
            ) : (
                <span className='font-semibold text-red-600'>Closed</span>
            )}
        </div>
    );
};

export default DoctorAvailability;
