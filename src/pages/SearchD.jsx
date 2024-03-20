import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDoctor } from '../redux/reducers/searchSlice';
import { Link, useSearchParams } from 'react-router-dom';
import ListSearchDoctor from '../Components/ListSearchDoctor';


const SearchD = () => {
    const dispatch = useDispatch();
    const { searchdata, loading, error } = useSelector((state) => state.search);
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get('category')
    const name = searchParams.get('name')
    // console.log("category", category)



    useEffect(() => {
        if (category || name) {
            dispatch(searchDoctor({ category, name }));
        }
    }, [dispatch, category, name]);
    console.log("data", searchdata)

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
