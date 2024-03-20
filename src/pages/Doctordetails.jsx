import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchListByid } from '../redux/reducers/listSlice'
import CategoryDoctor from '../Components/CategoryDoctor'
import DoctorsCategory from '../utils/categoryListDcotor'
import picDoctor from '../assets/picture/doctor_detail.png'
import Tabs from '../Components/tab/Tabs'
import SearchDoctor from '../Components/SearchDoctor'



const Doctordetails = () => {
    const [category, setCategory] = useState(DoctorsCategory)

    const { itemData, loading, error } = useSelector((state) => state.list)

    const { id } = useParams();

    const dispatch = useDispatch();

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
                    <SearchDoctor />
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
                <div className=' w-4/5 mx-auto flex flex-wrap gap-3'>
                    <div className=' w-full  lg:w-2/3'>
                        <div className='mb-4 px-1 py-1 bg-seconder border-2 border-[#E3F0FF]  rounded-md'>
                            <div className='flex  gap-2'>
                                <div className='flex w-full'>
                                    <img src={picDoctor} alt={itemData && itemData.name} />
                                </div>

                                {itemData ? <div className=' py-2'>
                                    <h2 className=' text-primary text-xl font-semibold'> {itemData.name} </h2>
                                    <p> {itemData.category} </p>
                                    <p className=' font-medium'> {itemData.title}</p>
                                    <p className=' text-[#353537] text-xs mt-2 pr-4'>
                                        Dr. Asha Susawat is a Gynecologist and Obstetrician in Jagatpura, Jaipur and has an experience of 13 years in these fields. Dr. Asha Susawat practices at Asha Clinic in Jagatpura,
                                        Jaipur and Daffodils, by Artemis Hopsitals in Jagatpura, Jaipur. She completed MS - Obstetrics &
                                        Gynaecology from RUHS College of Medical Sciences, Jaipur in 2016 and MBBS from Lady Hardinge Medical College, New Delhi in 2009.
                                    </p>
                                </div>
                                    :
                                    <h3>no data</h3>
                                }
                            </div>
                        </div>
                        <div className='mt-2 mb-2'>
                            <Tabs itemData={itemData} />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='w-full md:w-1/2  lg:w-[32%]'>
                        <h1>helo</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctordetails
