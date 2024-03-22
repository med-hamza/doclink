import React, { Suspense, useEffect, useState } from 'react'
import DoctorsCategory from '../utils/categoryListDcotor'
import CategoryDoctor from '../Components/CategoryDoctor'
import SearchDoctor from '../Components/SearchDoctor'
import { fetchList } from '../redux/reducers/listSlice'
import { useDispatch, useSelector } from 'react-redux'
const ListDoctor = React.lazy(() => import('../Components/ListDoctor'))

const List = () => {
    const dispatch = useDispatch();
    const { listdata, loading, error } = useSelector((state) => state.list)
    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])
    return (

        <>
            <div className=' bg-lighter py-5 font-poppins '>
                <div className=' max-w-4xl mx-auto'>
                    <SearchDoctor listdata={listdata} categorytitle='Select Doctor'
                        namedoctor='Search Doctor, clinics, hospital, etc'
                        style_section='px-2 py-3'
                        stylebtn='searchbtn'
                    />
                    <div className='grid grid-cols-7 gap-4'>
                        {DoctorsCategory.map((category) => (
                            <CategoryDoctor key={category.id}
                                color={category.color}
                                name={category.name}
                                picture={category.picture}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Suspense fallback={<p> Loading ....</p>}>
                <ListDoctor listdata={listdata} error={error} loading={loading} />
            </Suspense>
        </>
    )
}

export default React.memo(List)
