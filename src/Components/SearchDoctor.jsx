import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategory } from '../redux/reducers/categorySlice';
import { searchDoctor } from '../redux/reducers/searchSlice';

import FilterDoctor from './FilterDoctor';


const SearchDoctor = ({ listdata, style_section, categorytitle, namedoctor, titlesearch, stylebtn, availablename }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.search)
    const { data } = useSelector((state) => state.category)
    const [name, setName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    const handleSearch = () => {
        dispatch(searchDoctor({ selectedCategory, name, showAvailableOnly }));
        let queryString = '';
        if (selectedCategory) {
            queryString += `category=${encodeURIComponent(selectedCategory)}`
        }
        if (name) {
            queryString += `${queryString ? '&' : ''}name=${encodeURIComponent(name)}`
        }
        if (showAvailableOnly) {
            queryString += `available=true`;
        }
        navigate(`/search?${queryString}`);
    };
    const handleNameClick = (selectedName) => {
        navigate(`/search?name=${encodeURIComponent(selectedName)}`);
    };
    const toggleAvailableDoctors = () => {
        setShowAvailableOnly(!showAvailableOnly);
    };


    return (
        <div className={`  mb-5 ${style_section} container mx-auto `} >
            <div className={` bg-white rounded-lg py-6 sm:px-6 lg:px-8 `}>
                <h2 className=' text-black text-4xl lg:px-0 px-2 font-semibold pb-4'>  {titlesearch} </h2>
                <div className=' block lg:flex items-center justify-between gap-8'>
                    <div className=' mx-auto mb-4 w-4/5 lg:w-1/5'>
                        <p className='text-[#8B98B8] text-sm '> {categorytitle} </p>
                        <select name="" id=""
                            className=' w-full focus:outline-none focus:border-none text-[#185FA0]'
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option className='text-[#185FA0]' value="">Specialty</option>
                            {data && data.map((item) => (
                                <option className=' text-[#185FA0]' value={item.name} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className=' mx-auto mb-4  w-4/5 lg:w-3/5'>
                        <p className='text-[#8B98B8] text-sm'> {namedoctor} </p>
                        <FilterDoctor listdata={listdata} onNameClick={handleNameClick} />
                    </div>
                    <div className=' mx-auto  w-4/5 lg:w-1/5'>
                        <p className='text-[#8B98B8] text-sm mb-1'> {availablename} </p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="availableToggle"
                                checked={showAvailableOnly}
                                onChange={toggleAvailableDoctors}
                                className="sr-only peer"
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bluedoc rounded-full peer
                         dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white 
                         after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-bluedoc"></div>
                        </label>
                    </div>
                    <div className=' lg:text-start lg:px-0  text-end px-2'>
                        <button className={` ${stylebtn}`} onClick={handleSearch}> Search  </button>
                    </div>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                </div>
            </div>
        </div>
    )
}

export default SearchDoctor
