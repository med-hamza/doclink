import React from 'react'
import seadoctor from '../../assets/picture/search_doctors.png'
import sehospital from '../../assets/picture/search_hospital.png'
import visit from '../../assets/picture/home_visit.png'
import health from '../../assets/picture/track_health.png'
import healrecord from '../../assets/picture/health_records.png'
const Banners = () => {
    return (
        <div className='container mx-auto px-4 py-28 sm:px-6 lg:px-8 bg-hero-image bg-cover mb-8'>
            <h1 className=" text-primary text-7xl  font-poppins font-medium ">Consult Top <br />
                <span className='text-primary text-7xl font-poppins font-bold '> Doctors Online </span>
            </h1>
            <h2 className=' mt-4 capitalize text-primary font-poppins text-5xl'>for any health concern</h2>

            <div className='flex justify-start items-center gap-3 mt-10'>
                <div className="box">
                    <img src={seadoctor} className=' p-2 w-28 h-24 bg-[#F2F8FE] border-black border-1 rounded-md' alt="seaerch  doctor" />
                    <p className=' text-sm text-black mt-2 font-medium text-center'> Search Doctor</p>
                </div>
                <div className="box">
                    <img src={sehospital} className='p-2 w-28 h-24 bg-[#F2F8FE] border-[#185FA0] rounded-md border-1' alt="seaerch  doctor" />
                    <p className=' text-sm text-black mt-2 font-medium text-center'>Search Hospitals </p>
                </div>
                <div className="box"><img src={visit} className='p-2 w-28 h-24 bg-[#F2F8FE] border-[#185FA0] rounded-md border-1' alt="seaerch  doctor" />
                    <p className=' text-sm text-black mt-2 font-medium text-center'> Home Visits </p> </div>
                <div className="box">
                    <img src={health} className='p-2 w-28 h-24 bg-[#F2F8FE] border-[#185FA0] rounded-md border-1' alt="seaerch  doctor" />
                    <p className=' text-sm text-black mt-2 font-medium text-center'> Track Health</p>
                </div>
                <div className="box">
                    <img src={healrecord} className='p-2 w-28 h-24 bg-[#F2F8FE] border-[#185FA0] rounded-md' alt="seaerch  doctor" />
                    <p className=' text-sm text-black mt-2 font-medium text-center'> Health Records</p>
                </div>
            </div>

        </div>
    )
}

export default Banners
