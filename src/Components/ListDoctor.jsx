import React from 'react'
import { Link } from 'react-router-dom'
import picDoctor from '../assets/picture/doctor.png'
import AdressMpas from './GoogleMaps/AdressMpas'
const ListDoctor = ({ listdata, loading, error }) => {

    if (loading) {
        return <p> Loading ....</p>
    }
    if (error) {
        return <p>Error : {error} </p>
    }
    return (
        <>
            <div className='w-full container mx-auto px-4 py-4 sm:px-6 lg:px-8 font-poppins'>
                <div className=' w-4/5 mx-auto flex flex-wrap gap-3'>
                    <div className=' w-full lg:w-1/2'>
                        {listdata ? listdata.map((item) => (
                            <div className='mb-4 px-3 py-4 bg-seconder border-2 border-[#E3F0FF]  rounded-md' key={item.id}>
                                <div className="flex items-end">
                                    <Link to={`${item.id}`} className=' w-3/5 flex justify-start items-start'>
                                        <div>
                                            <img src={picDoctor} alt={item.name} />
                                        </div>
                                        <div>
                                            <h3 className='text-black font-semibold'>{item.name}</h3>
                                            <h4 className=' text-black font-normal text-sm'> {item.title}  </h4>
                                            <p className=' text-[#002A50] font-normal text-xs'> {item.address} </p>
                                        </div>
                                    </Link>
                                    <div className=' space-y-2 w-2/5 text-end'>
                                        <div>
                                            <button className='w-2/3 inline-block secondarybtn'>Chat now</button>
                                        </div>
                                        <div>
                                            <button className='w-2/3 inline-block primarybtn'>Book Appointment</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )) : <h1>No data</h1>}
                    </div>
                    <div className='w-full md:w-1/2 lg:w-2/5'>
                        <AdressMpas mapId="googlemap" />
                    </div >
                </div >
            </div >
        </>
    )
}

export default ListDoctor
