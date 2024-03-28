import React from 'react'
const BodySection = ({ children, pic }) => {
    return (
        <div className='container mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-8'>
            <div className='mx-auto'>
                <div className='flex items-center justify-center gap-32'>
                    <div className=''>
                        <h2 className='text-bluedoc font-bold text-5xl mb-5'>
                            {children}
                        </h2>
                        <p className=' text-primary font-thin text-base'> Lorem ipsum dolor sit amet consectetur adipiscing eli <br />
                            mattis sit phasellus mollis sit aliquam sit nullam.</p>
                    </div>
                    <div className=''>
                        <img src={pic} className=' w-4/5' alt="doclink surgery" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodySection
