import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
const Info = ({ itemData }) => {
    return (
        <div>
            {itemData ? <>
                <h2 className=' text-2xl font-semibold text-primary mb-4'>Location</h2>
                <GoogleMaps mapId="doctormap" lat={itemData.lat} lng={itemData.lng} />
                <p className=' text-primary text-xl mt-4  font-medium'> {itemData.address} </p>
                <p className='text-[#536288] text-sm mt-2 font-medium'> <span className=' font-semibold text-[#07AE60]'>Open now </span> Today : 7 AM - 19 PM </p>
            </> : <p>No data.. </p>}

        </div>
    )
}

export default Info
