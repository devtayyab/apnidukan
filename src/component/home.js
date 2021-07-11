import React, {useEffect, useState} from 'react'
import Navbar from './navbar/navbar'
import Tabsearch from './navbar/searchtab'
import  Listproducts from './display/listproducts'
import {productget} from '../store/action/product'
import Addproduct from './add/addproduct'
import Signup from './auth/signup'
import Signin from './auth/siginin'
import Shipping from './shipping/shipping'
import CartScreen from './cart/cart'
import Detail from './SINGLEPOST/sdetail'
import {useDispatch, useSelector} from 'react-redux'
import Slider from './slider/slider'
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
        <div style ={{maxWidth: '100%', textAlign: "center"}}>
            
            <BrowserRouter>
            <Navbar ></Navbar>
           
            <Route exact path="/">
            <Tabsearch></Tabsearch>
            <Slider></Slider>
                <Listproducts/>
                </Route>
           
            <Route path="/add">
            <Addproduct></Addproduct>
            </Route>
            <Route path= '/signup'>
               <Signup></Signup></Route>
               <Route path= '/signin'>
               <Signin></Signin></Route>
               <Route path= '/product/:id'>
               <Detail></Detail></Route>
               <Route path='/cart/:id?' component={CartScreen} />
               <Route path='/shipping/:id' component={Shipping} />
            </BrowserRouter>
        </div>
    )
}
