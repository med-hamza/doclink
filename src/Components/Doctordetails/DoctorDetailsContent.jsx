import React from 'react'

const DoctorDetailsContent = ({ itemData, isBox }) => {


    return (
        <div className='py-3'>
            <h2 className='text-primary text-xl font-semibold lg:block hidden'>{itemData.name}</h2>
            <p className='lg:block hidden'>{itemData.category}</p>
            <p className='font-medium lg:block hidden'>{itemData.title}</p>
            {!isBox && (
                <>
                    <p className=' font-semibold mb-1 text-black lg:hidden block'> Description : </p>
                    <p className='text-[#353537] text-xs mt-2 pr-4'>
                        Dr. Asha Susawat is a Gynecologist and Obstetrician in Jagatpura, Jaipur and has an experience of 13 years in these fields. Dr. Asha Susawat practices at Asha Clinic in Jagatpura, Jaipur and Daffodils, by Artemis Hopsitals in Jagatpura, Jaipur. She completed MS - Obstetrics & Gynaecology from RUHS College of Medical Sciences, Jaipur in 2016 and MBBS from Lady Hardinge Medical College, New Delhi in 2009.
                    </p>
                </>
            )}

        </div>
    );
}

export default DoctorDetailsContent
