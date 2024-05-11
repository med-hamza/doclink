import React from 'react'
const BodySection = ({ children, pic }) => {
    return (
        <div className='container mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-8'>
            <div className='mx-auto'>
                <div className=' block lg:flex items-center  justify-between'>
                    <div className=' lg:mb-0 mb-5'>
                        <h2 className='text-bluedoc font-bold text-5xl mb-5'>
                            {children}
                        </h2>
                        <p className=' text-primary font-thin text-base'> Lorem ipsum dolor sit amet consectetur adipiscing eli <br />
                            mattis sit phasellus mollis sit aliquam sit nullam.</p>
                    </div>
                    <div className=''>
                        <img src={pic} className=' w-full md:w-full sm:w-full lg:w-3/4' alt="doclink surgery" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodySection
