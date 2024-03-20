import React, { Suspense, useEffect, useState } from 'react'
import DoctorsCategory from '../utils/categoryListDcotor'
import CategoryDoctor from '../Components/CategoryDoctor'
import SearchDoctor from '../Components/SearchDoctor'
const ListDoctor = React.lazy(() => import('../Components/ListDoctor'))

const List = () => {

    return (

        <>
            <div className=' bg-lighter py-5 font-poppins '>
                <div className=' max-w-4xl mx-auto'>
                    <SearchDoctor />
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
                <ListDoctor />
            </Suspense>
        </>
    )
}

export default React.memo(List)