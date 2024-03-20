import React, { useState } from 'react'
import TabButtons from './TabButtons';
import TabContent from './TabContent';
import Info from './Info';
import Specialty from './Specialty';


const Tabs = ({ itemData }) => {
    const tabData = [
        {
            title: "Info",
            content: (
                <>
                    <Info itemData={itemData} />
                </>
            ),
        },
        {
            title: "Specialty",
            content: (
                <>
                    <Specialty itemData={itemData} />
                </>
            )
        },
        {
            title: "Awards & Recognitions",
            content: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
        },
    ];
    const [activeTab, setActivetab] = useState(0)
    return (
        <div>
            <TabButtons
                activeTab={activeTab}
                setActivetab={setActivetab}
                tabData={tabData} />
            <TabContent
                activeTab={activeTab}
                tabData={tabData} />
        </div>
    )
}

export default Tabs
