import React from 'react'
const CategoryDoctor = ({ name, picture, color }) => {
    return (
        <div className='text-center py-4 rounded-md' style={{ backgroundColor: color }}>
            <img className='m-auto' src={picture} alt={name} />
            <p className='mt-2 text-primary font-semibold  text-xs uppercase'>{name}</p>
        </div>
    )
}

export default CategoryDoctor
