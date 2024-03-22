import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const FilterDoctor = ({ listdata, onNameClick }) => {

    const inputRef = useRef();

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
    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <div className=' w-4/5 relative'>
            <input
                type='text'
                value={searchItem}
                onChange={handleInput}
                className={`${isSearching ? 'border-bluedoc focus:border focus:border-b-0 ' : ''} placeholder-bluedoc px-2 w-full focus:outline-none `}
                placeholder='MS - Obstetrics & Gynaecology, MBBS'
                ref={inputRef}
            />
            {isSearching && (
                <div className='searched_list absolute bg-white w-full z-10  h-40 overflow-y-scroll py-3 border border-bluedoc border-t-0 px-2'>
                    <ul className=''>
                        {listdata
                            .filter((doctor) =>
                                doctor.name.toLowerCase().includes(searchItem.toLowerCase())
                            )
                            .map((doctor) => (
                                <li className=' cursor-pointer mb-1' key={doctor.id} onClick={() => handleNameClick(doctor.name)}>
                                    <p className='font-medium text-sm'>  {doctor.name} </p>
                                    <p className=' text-xs text-bluedoc '> {doctor.title} </p>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default FilterDoctor;
