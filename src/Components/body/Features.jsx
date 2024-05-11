import React from 'react'
import banner from '../../assets/picture/banner_features.png'

import features from '../../utils/features'

const Features = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='p-9 bg-cover'>
            <div className=' block lg:flex justify-center items-center max-w-screen-lg gap-10  mx-auto'>
                <div className=' bg-lighter rounded-3xl  p-6'>
                    <div className='bg-white rounded-2xl'>
                        {features.map((item) => (
                            <div key={item.name} className='box-features px-2 py-3 border-b-2  border-lighter gap-3 flex items-center '>
                                <img src={item.pic} alt="25+ Years Experience" />
                                <div className=''>
                                    <h3 className=' text-primary text-xl font-semibold'>{item.name}</h3>
                                    <p className=' text-[#536288]  text-sm font-light'>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className=' lg:mt-0 mt-8'>
                        <h3 className=' text-lighter font-semibold  text-4xl'> Here's what makes us <br />
                            different from Others </h3>
                        <p className=' text-lighter font-light  text-lg '>We are brave compared to others, because we
                            believe that what we have is the best</p>
                    </div>
                    <div className='flex items-center mt-3 gap-5'>
                        <div>
                            <p className='text-5xl text-lighter font-bold mb-2'>3000+</p>
                            <p className='text-lighter leading-5 text-lg'>
                                Patients served <br />
                                every day
                            </p>
                        </div>
                        <div>
                            <p className='text-5xl text-lighter font-bold mb-2'>200K</p>
                            <p className='text-lighter leading-5  text-lg'>
                                Medical Team <br />
                                around the world
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features
