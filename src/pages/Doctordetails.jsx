import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchListByid } from '../redux/reducers/listSlice'
import CategoryDoctor from '../Components/CategoryDoctor'
import DoctorsCategory from '../utils/categoryListDcotor'
import picDoctor from '../assets/picture/doctor_detail.png'
import SearchDoctor from '../Components/SearchDoctor'
import { fetchList } from '../redux/reducers/listSlice'
import ComDetails from '../Components/Doctordetails/ComDetails'
import { fetchAvailabiltyByid } from '../redux/reducers/AvailabilitySlice'

const Doctordetails = () => {
    const { listdata } = useSelector((state) => state.list)
    const { availitemData } = useSelector((state) => state.available)
    const { itemData, loading, error } = useSelector((state) => state.list)

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAvailabiltyByid(id))
        dispatch(fetchList())
        dispatch(fetchListByid(id))
    }, [id, dispatch])

    const category = useMemo(() => DoctorsCategory, []);

    if (loading) {
        return <p>loading ...</p>
    }
    if (error) {
        return <p>Error : {error}</p>
    }

    return (
        <div>
            <div className=' bg-lighter py-5 font-poppins '>
                <div className=' max-w-4xl lg:px-0  px-10 mx-auto'>
                    <SearchDoctor listdata={listdata} categorytitle='Select Doctor'
                        namedoctor='Search Doctor, clinics, hospital, etc'
                        availablename='Availability'
                        style_section='py-3'
                        stylebtn='searchbtn'
                    />
                    <div className='lg:grid md:grid md:grid-cols-7 lg:grid-cols-7 gap-2 hidden lg:gap-4'>
                        {category.map((category) => (
                            <CategoryDoctor key={category.id}
                                color={category.color}
                                name={category.name}
                                picture={category.picture}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full container mx-auto px-4 py-4 sm:px-6 lg:px-8 font-poppins'>
                <ComDetails itemData={itemData} picDoctor={picDoctor} availitemData={availitemData}
                    description='details'
                />
            </div>

        </div>
    )
}

export default Doctordetails
