import React, {useEffect, useState} from 'react'
import Navbar from './navbar/navbar'
import Tabsearch from './navbar/searchtab'
import  Cards  from './display/display'
import {productget} from '../store/action/product'
import Addproduct from './add/addproduct'
import Signup from './auth/signup'
import Signin from './auth/siginin'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
export default function Home() {

    const dispatch = useDispatch()
    const [products, setproducts] = useState([])

    const product = useSelector(state=> state.product)
    const state = useSelector(state=> state.user)
    console.log("stateathome", product)

useEffect(() => {
   dispatch(productget())
    setproducts(product)
   
}, [dispatch])

 
    return (
        <div>
            
            <BrowserRouter>
            <Navbar ></Navbar>
            <Tabsearch></Tabsearch>
            <Route exact path="/">
            {product.map((item)=><Cards key={item?._id} item={item}/>)}</Route>
           
            <Route path="/add">
            <Addproduct></Addproduct>
            </Route>
            <Route path= '/signup'>
               <Signup></Signup></Route>
               <Route path= '/signin'>
               <Signin></Signin></Route>
            </BrowserRouter>
        </div>
    )
}
