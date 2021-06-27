import React, {useEffect} from 'react'

import Cards from './display'
import {useDispatch, useSelector} from 'react-redux'
import {productget} from '../../store/action/product'


export default function Listproducts() {

    const dispatch = useDispatch();
    const state = useSelector(state=> state.product)
    console.log(state)
    useEffect(() => {
        dispatch(productget())
    },[dispatch])
    return (
    state.map((item)=><Cards key={item?._id} item={item}/>)
    )
}
