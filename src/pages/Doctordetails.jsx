import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchListByid } from '../redux/reducers/listSlice'
import CategoryDoctor from '../Components/CategoryDoctor'
import DoctorsCategory from '../utils/categoryListDcotor'
import picDoctor from '../assets/picture/doctor_detail.png'
import SearchDoctor from '../Components/SearchDoctor'
import { fetchList } from '../redux/reducers/listSlice'
import ComDetails from '../Components/Doctordetails/ComDetails'


const Doctordetails = () => {
    const { listdata } = useSelector((state) => state.list)
    const [category, setCategory] = useState(DoctorsCategory)

    const { itemData, loading, error } = useSelector((state) => state.list)

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchListByid(id))
    }, [id, dispatch])


    if (loading) {
        return <p>loading ...</p>
    }
    if (error) {
        return <p>Error : {error}</p>
    }

    return (
        <div>
            <div className=' bg-lighter py-5 font-poppins '>
                <div className=' max-w-4xl mx-auto'>
                    <SearchDoctor listdata={listdata} categorytitle='Select Doctor'
                        namedoctor='Search Doctor, clinics, hospital, etc'
                        style_section='px-2 py-3'
                        stylebtn='searchbtn'
                    />
                    <div className='grid grid-cols-7 gap-4'>
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
                <ComDetails itemData={itemData} picDoctor={picDoctor} />
            </div>
        </div>
    )
}

export default Doctordetails
