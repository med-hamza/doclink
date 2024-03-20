import React from 'react'

const TabButtons = ({ tabData, setActivetab, activeTab }) => {
    return (
        <div className='flex justify-start items-center gap-4 mb-5 border-b border-[#D2E9FE]  dark:border-[#D2E9FE]'>
            {tabData.map((item, index) => (
                <button className={`
                inline-block p-2  rounded-t-lg hover:border-lighter
                ${index === activeTab ? 'text-primary font-semibold border-b-2 border-primary hover:border-primary' : ''}`}
                    key={item.title} onClick={() => setActivetab(index)}>  {item.title} </button>
            ))}
        </div>
    )
}

export default TabButtons
