import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
const Info = ({ itemData, availitemData }) => {
    const isOpen = (schedule) => {
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const currentDateTime = new Date(`2000-01-01 ${currentTime}`);

        const todaySchedule = schedule.find(slot => slot.day === currentDay);

        if (!todaySchedule) return false;

        const startTime = new Date(`2000-01-01 ${todaySchedule.start_time}`);
        const endTime = new Date(`2000-01-01 ${todaySchedule.end_time}`);

        return currentDateTime >= startTime && currentDateTime <= endTime;
    };
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaySchedule = availitemData ? availitemData.schedule.find(slot => slot.day === currentDay) : null;
    const startTim = todaySchedule ? todaySchedule.start_time : '';
    const endTim = todaySchedule ? todaySchedule.end_time : '';


    return (
        <div>
            {itemData ? <>
                <h2 className=' text-2xl font-semibold text-primary mb-4'>Location</h2>
                <GoogleMaps mapId="doctormap" lat={itemData.lat} lng={itemData.lng} />
                <p className=' text-primary text-xl mt-4  font-medium'> {itemData.address} </p>
                <div>
                    {availitemData && isOpen(availitemData.schedule) ? (
                        <div>
                            <p className='font-semibold text-[#07AE60]'>Open now
                                <span className='text-[#536288] text-lg font-medium'> Today : {startTim} - {endTim}</span> </p>

                        </div>
                    ) : (
                        <span className='font-semibold text-red-600'>Closed</span>
                    )}
                </div>


            </> : <p>No data.. </p>}

        </div>
    )
}

export default Info
