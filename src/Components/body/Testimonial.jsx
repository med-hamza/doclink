import React from 'react'

const Testimonial = ({ children, datatestimo }) => {
    return (
        <div className=' w-full mt-5 mb-5'>
            <div className=' w-2/3 mx-auto'>
                <h2 className='text-bluedoc text-center font-bold text-4xl mb-5'>
                    {children}
                </h2>
                <div className=' mt-8 grid grid-cols-3 gap-3'>
                    {datatestimo.map((test) => (
                        <div key={test.name} className='rounded-lg bg-white shadow-md p-6'>
                            <img src={test.pic} className='mb-2' alt="doclink testimonial" />
                            <h3 className=' text-[#333333] text-xl mb-2'>“ {test.title} ”</h3>
                            <p className=' text-primary font-thin text-sm mb-5'>
                                {test.description}
                            </p>
                            <h4 className='text-bluedoc  text-lg font-semibold'> {test.name} </h4>
                            <p className='text-[#555555] text-base font-light '> {test.jobs} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial
