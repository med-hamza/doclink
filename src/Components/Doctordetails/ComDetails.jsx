import React from 'react'
import Tabs from '../tab/Tabs'
import CalenderWeek from '../Calendar/CalenderWeek';
import DoctorDetailsContent from './DoctorDetailsContent';

const ComDetails = ({ picDoctor, itemData, availitemData }) => {

    const pageName = 'details'

    return (
        <div className=' w-4/5 mx-auto flex flex-wrap gap-3'>
            <div className=' w-full  lg:w-2/3'>
                <div className='mb-4 px-1 py-1 bg-lighter  shadow-sm  rounded-md'>
                    <div className='flex  gap-2'>
                        <div className='flex w-full'>
                            <img src={picDoctor} alt={itemData && itemData.name} />
                        </div>

                        {itemData ? (
                            <DoctorDetailsContent itemData={itemData} isBox={false} />
                        ) : (
                            <h3>No data</h3>
                        )}
                    </div>
                </div>
                <div className='mt-2 mb-2'>
                    <Tabs itemData={itemData} availitemData={availitemData} />
                </div>
                <div>

                </div>
            </div>
            <div className='w-full md:w-1/2  lg:w-[32%]'>
                <CalenderWeek itemData={itemData} availitemData={availitemData} picDoctor={picDoctor} pageName={pageName} />
            </div>
        </div>
    )
};

export default ComDetails
