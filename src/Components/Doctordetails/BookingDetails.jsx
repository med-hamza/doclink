import React from 'react'
import DoctorDetailsContent from './DoctorDetailsContent'

const BookingDetails = ({ itemData }) => {
    return (
        <div className='flex  mb-8'>
            <div className='flex w-full gap-5'>
                <div className='bg-white'>
                    <img src={`${window.location.origin}/images/${itemData?.picture}.png`} alt={itemData?.name} className=' w-24 h-24 object-cover' />
                </div>
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
