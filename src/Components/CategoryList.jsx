import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategory } from '../redux/reducers/categorySlice'
import picture from '../assets/pic_cat/paediatrics.png'
import Loading from './Loading'
const CategoryList = () => {

    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p>Error : {error} </p>
    }

    return (
        <div className='bg-lighter pt-5 pb-5'>
            {data ? <div className='flex items-center justify-center'>
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={`${window.location.origin}/pic_cat/${item.alias}.png`} alt={item.alias} />
                        <img src={picture} />
                        {item.title}
                    </div>
                ))}
            </div> : <p>no category found</p>}
        </div>


    )
}

export default React.memo(CategoryList)
