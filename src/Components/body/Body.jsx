import React, { useEffect } from 'react'
import BodyHome from './BodyHome'
import Banners from './Banners'
import BodySection from './BodySection'
import surgerypic from '../../assets/picture/pict_surgery.png';
import Testimonial from './Testimonial';
import datatestimo from '../../utils/datatestimonial';
import { fetchList } from '../../redux/reducers/listSlice';
import SearchDoctor from '../SearchDoctor';
import { useDispatch, useSelector } from 'react-redux';


const Body = () => {
    const { listdata } = useSelector((state) => state.list)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])


    return (
        <>
            <Banners />
            <SearchDoctor listdata={listdata}
                style_section='px-6 py-6 body_search'
                titlesearch="Find A Doctor"
                stylebtn='px-8 py-1.5 bg-bluedoc text-white border-1 rounded-md' />
            <BodyHome />
            <BodySection pic={surgerypic}>
                You have lots of reasons <br /> to choose us
            </BodySection>
            <Testimonial datatestimo={datatestimo}>
                Testimonial
            </Testimonial>
        </>
    )
}

export default Body
