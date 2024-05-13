import React, { useEffect, useMemo, useState } from 'react'
import BookingDetails from '../Components/Doctordetails/BookingDetails'
import { fetchListByid } from '../redux/reducers/listSlice'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAvailabiltyByid } from '../redux/reducers/AvailabilitySlice'
import CalenderWeek from '../Components/Calendar/CalenderWeek'

const Book = () => {
    const { itemData, loading, error } = useSelector((state) => state.list)
    const { availitemData } = useSelector((state) => state.available)
    const { id } = useParams();
    const pageName = 'booking'
    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch])

    useEffect(() => {
        dispatch(fetchListByid(id))
        dispatch(fetchAvailabiltyByid(id))
    }, [id, dispatch])

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
                <div className=' w-4/5 mx-auto'>
                    <CalenderWeek itemData={itemData} availitemData={availitemData}
                        pageName={pageName} />
                </div>
            </div>

        </div>
    )
}

export default Book
