import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategory } from '../redux/reducers/categorySlice';
import { searchDoctor } from '../redux/reducers/searchSlice';

import FilterDoctor from './FilterDoctor';


const SearchDoctor = ({ listdata }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.search)
    const { data } = useSelector((state) => state.category)
    const [name, setName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    const handleSearch = () => {
        dispatch(searchDoctor({ selectedCategory, name }));
        let queryString = '';
        if (selectedCategory) {
            queryString += `category=${encodeURIComponent(selectedCategory)}`
        }
        if (name) {
            queryString += `${queryString ? '&' : ''}name=${encodeURIComponent(name)}`
        }
        navigate(`/search?${queryString}`);
    };
    const handleNameClick = (selectedName) => {
        navigate(`/search?name=${encodeURIComponent(selectedName)}`);
    };


    return (
        <div className='flex items-center justify-between bg-white p-3 rounded-lg mb-5'>
            <div className=''>
                <p className='text-[#8B98B8] text-sm '>Select Doctor </p>
                <select name="" id=""
                    className='focus:outline-none focus:border-none text-[#185FA0]'
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
            <div className=' w-2/3'>
                <p className='text-[#8B98B8] text-sm'>Search Doctor, clinics, hospital, etc.</p>
                <FilterDoctor listdata={listdata} onNameClick={handleNameClick} />
            </div>
            <button className='searchbtn' onClick={handleSearch}> Search  </button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

        </div>
    )
}

export default SearchDoctor
