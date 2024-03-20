import React from 'react'

const TabContent = ({ tabData, activeTab }) => {
    return (
        <div>
            <div >
                {tabData[activeTab].content}
            </div>

        </div>
    )
}

export default TabContent
