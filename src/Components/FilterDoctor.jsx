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
        <div className='w-full'>
            <input
                type='text'
                value={searchItem}
                onChange={handleInput}
                className='placeholder-[#185FA0] w-full focus:outline-none focus:border-none'
                placeholder='MS - Obstetrics & Gynaecology, MBBS'
            />
            {isSearching && (
                <ul>
                    {listdata
                        .filter((doctor) =>
                            doctor.name.toLowerCase().includes(searchItem.toLowerCase())
                        )
                        .map((doctor) => (
                            <li key={doctor.id} onClick={() => handleNameClick(doctor.name)}>
                                {doctor.name}
                            </li>
                        ))}
                </ul>
            )}

        </div>
    );
};

export default FilterDoctor;
