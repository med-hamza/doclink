import React from 'react'
import brief from '../../assets/icons/brief-medical.svg.png'
const Specialty = ({ itemData }) => {

    const dataspesi = [
        { name: "Dentistry", },
        { name: "Cosmetic Dentistry" },
        { name: "Emergency Dentistry" },
        { name: "Endodontics" },
        { name: "Laser Dentistry" },
    ]
    return (
        <div>
            {itemData ? <>
                <h2 className=' text-primary text-3xl font-semibold mb-6'> {itemData.name} Profile </h2>
                <h4 className=' text-primary text-xl font-medium mb-2'> Biography </h4>
                <p className=' text-sm text-primary font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum ligula morbi eget facilisi vitae tristique. Nec ut aliquam
                    alquerue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum ligula morb... </p>
                <h4 className=' text-primary text-xl mt-6 font-medium mb-2'>Specialities</h4>
                {dataspesi.map((item) => {
                    return (
                        <div key={item.name} className='flex justify-start  items-center gap-2'>
                            <span> <img src={brief} alt={item.name} /> </span>
                            <p className='text-primary text-base'> {item.name} </p>
                        </div>
                    )
                })}
            </> : <p>no data ...</p>}


        </div>
    )
}

export default Specialty
