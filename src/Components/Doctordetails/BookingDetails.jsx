import React from 'react'
import DoctorDetailsContent from './DoctorDetailsContent'

const BookingDetails = ({ itemData, picDoctor }) => {
    return (
        <div className='flex  mb-8'>
            <div className='flex w-full gap-5'>
                <img src={picDoctor} alt={itemData && itemData.name} className=' w-24 h-24 object-cover' />
                <div>
                    {itemData ? (
                        <DoctorDetailsContent itemData={itemData} isBox={true} />
                    ) : (
                        <h3>No data</h3>
                    )}
                </div>
            </div>

        </div>
    )
}

export default BookingDetails
