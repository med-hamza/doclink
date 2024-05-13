import React, { useEffect, useState } from 'react'
import { fetchListByid } from '../../redux/reducers/listSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import BookingDetails from '../Doctordetails/BookingDetails';
import { fetchAvailabiltyByid } from '../../redux/reducers/AvailabilitySlice';
import Appointment from './Appointment';



const ConfirmBook = () => {
    const { itemData, loading, error } = useSelector((state) => state.list)
    const { availitemData } = useSelector((state) => state.available)
    const [bookingClicked, setBookingClicked] = useState(true);
    const [selectedTime, setSelectedTime] = useState(null);

    const { id } = useParams();
    const pageName = 'booking'
    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch])

    useEffect(() => {
        dispatch(fetchListByid(id))
        dispatch(fetchAvailabiltyByid(id))
    }, [id, dispatch])

    const handleBookingClick = () => {
        setBookingClicked(true);
        setShowTimeSlots(false);
    };
    const clearBook = () => {
        setShowTimeSlots(true);
        setBookingClicked(false)
    }

    if (loading) {
        return <p>loading ...</p>
    }
    if (error) {
        return <p>Error : {error}</p>
    }
    return (
        <div className=' w-2/4 mx-auto  mb-10'>
            <div className=' bg-lighter p-2 rounded-md mb-7'>
                <h1 className=' text-black font-semibold text-xl '>Review Appointment</h1>
            </div>
            <div className='bg-seconder  w-3/4 mx-auto'>
                <div className=' '></div>
                <BookingDetails itemData={itemData} />
                <Appointment selectedTime={selectedTime}
                    itemData={itemData} bookingClicked={bookingClicked}
                    handleBookingClick={handleBookingClick} clearBook={clearBook} />
            </div>

        </div>
    )
}

export default ConfirmBook
