import React from 'react'
import { useState } from 'react'

const FilterDoctor = ({ listdata, onNameClick }) => {
    const [searchItem, setSearchItem] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const handleInput = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
        setIsSearching(searchTerm !== '');
    };

    const handleNameClick = (name) => {
        onNameClick(name);
    };

    return (
        <div className=' w-4/5 relative'>
            <input
                type='text'
                value={searchItem}
                onChange={handleInput}
                className={`${isSearching ? 'border-btncolor focus:border focus:border-b-0 ' : ''} placeholder-btncolor px-2 w-full focus:outline-none `}
                placeholder='MS - Obstetrics & Gynaecology, MBBS'
            />
            {isSearching && (
                <div className='searched_list absolute bg-white w-full z-10  h-40 overflow-y-scroll py-3 border border-btncolor border-t-0 px-2'>
                    <ul className=''>
                        {listdata
                            .filter((doctor) =>
                                doctor.name.toLowerCase().includes(searchItem.toLowerCase())
                            )
                            .map((doctor) => (
                                <li className=' cursor-pointer mb-1' key={doctor.id} onClick={() => handleNameClick(doctor.name)}>
                                    <p className='font-medium text-sm'>  {doctor.name} </p>
                                    <p className=' text-xs text-btncolor '> {doctor.title} </p>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default FilterDoctor;
