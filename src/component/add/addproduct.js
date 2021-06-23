import React, {useState,useEffect} from 'react'
import {FormControl, InputLabel,Input,FormHelperText, Button} from '@material-ui/core'
import {productadd} from '../../store/action/product'
import {useDispatch} from 'react-redux'
import './style.css'
import {useHistory} from 'react-router-dom'
export default function Addproduct() {

const [product, setproduct] =useState({

      
        name: "",
        category: "",
        image: "",
        price: "",
        countInStock: "",
        brand: "",
        rating: "",
        numReviews: "",
        description: ""
    

})
const dispatch = useDispatch()
const history = useHistory();
const Handleform =(e)=>{
e.preventDefault()

  console.log(product)
  dispatch(productadd(product , history))
  history.push('/')
}

    return (
    <div>
      <form className='forms'>
        <FormControl className="controls">
  <InputLabel htmlFor="my-input">Product Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={product.name} onChange={(e)=>setproduct({...product , name: e.target.value})}
  />


  </FormControl><FormControl className="controls">
  <InputLabel htmlFor="my-iput">Catagory</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={product.category} onChange={(e)=>setproduct({...product , category: e.target.value})}
  /></FormControl><FormControl className="controls">
   
  <InputLabel htmlFor="my-input">Price</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={product.price} onChange={(e)=>setproduct({...product , price: e.target.value})}
  /></FormControl><FormControl className="controls">
  
  <InputLabel htmlFor="my-input">Description</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" 
  defultvalue={product.description} onChange={(e)=>setproduct({...product , description: e.target.value})}
  
  /></FormControl><FormControl className="controls">
 
  <InputLabel htmlFor="my-input">Rating</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  defultvalue={product.rating} onChange={(e)=>setproduct({...product , rating: e.target.value})}
  /></FormControl><FormControl className="controls">
  
</FormControl>

<Button type="submit" onClick={Handleform} variant="outlined" color="primary">ADD</Button>
</form>

</div>
    )
}
