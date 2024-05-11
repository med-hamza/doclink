import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../../assets/picture/doctor_banner.png'
const Banners = () => {
    return (
        <div className='w-full'>
            <div className='container block md:flex lg:flex md:items-center lg:items-center md:justify-between lg:justify-between mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
                <div>
                    <h1 className=" text-bluedoc text-5xl lg:text-7xl  font-poppins font-medium ">Consult Top <br />
                        <span className='text-bluedoc text-7xl font-poppins font-bold '> Doctors Online </span>
                    </h1>
                    <h2 className=' mt-4 capitalize text-bluedoc font-poppins text-3xl lg:text-5xl'>for any health concern</h2>

                    <p className=' text-primary font-normal mt-5 text-sm mb-10'>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. <br />
                        Our experienced team of medical professionals, cutting-edge technology, and compassionate approach <br /> make us a leader in the healthcare industry</p>

                    {/* <div className='flex justify-start items-center gap-3 mt-10'>
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
            </div> */}

                    <Link to='' className='homebtn'> Appointments </Link>
                </div>
                <div className='  lg:mt-0 mt-14'>
                    <img src={picture} className=' w-96' alt="doctor banner" />

                </div>
            </div>
        </div>
    )
}

export default Banners
