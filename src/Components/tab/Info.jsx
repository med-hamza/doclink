import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import useIsopen from '../../hooks/useIsopen';
const Info = ({ itemData, availitemData }) => {
    const isOpen = useIsopen(availitemData ? availitemData.schedule : []);
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
                    {isOpen ? (
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
