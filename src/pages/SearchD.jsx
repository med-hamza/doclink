import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDoctor } from '../redux/reducers/searchSlice';
import ListSearchDoctor from '../Components/ListSearchDoctor';


const SearchD = () => {
    const dispatch = useDispatch();
    const { searchdata, loading, error } = useSelector((state) => state.search);
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get('category')
    const name = searchParams.get('name')
    const available = searchParams.get('available')


    useEffect(() => {
        if (category || name || available === 'true') {
            dispatch(searchDoctor({ selectedCategory: category, name, showAvailableOnly: available === 'true' }));
        }
    }, [dispatch, category, name, available]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {searchdata && (
                <ListSearchDoctor searchdata={searchdata} />
            )}

        </div>
    );
};

export default SearchD;
